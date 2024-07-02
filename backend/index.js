const port = 5000;
const express = require("express");
const { JsonWebTokenError } = require("jsonwebtoken");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path=require("path");
const cors = require("cors");
const { log } = require("console");
const { nextTick, send } = require("process");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/E-Commerce");

app.get("/",(req,res)=>{
    res.send("Express is Running");
})

// Image Storage Engine

const storage = multer.diskStorage({
    destination:'./upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage: storage})

// Endpoint for Imgaes
app.use('/images',express.static('upload/images'))
app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})


// Schema for creating products

const Product = mongoose.model("Product",{
    id:{
        type: Number,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    new_price:{
        type: Number,
        required: true,
    },
    old_price:{
        type: Number,
        required: true,
    },
    date:{
        type: Date,
        default:Date.now,
    },
    available:{
        type: Boolean,
        default: true,
    },
})

app.post('/addproduct',async (req,res)=>{
    let products = await Product.find({});
    let id;
    if(products.length>0)
    {
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id+1;
    }
    else
    {
        id=1;
    }
    const product = new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
    });
    console.log(product);
    await product.save();
    console.log("Saved");
    res.json({
        success:true,
        name:req.body.name,
    })
})


// creating api for remove product

app.post('/removeproduct',async (req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("Removed");
    res.json({
        success:true,
        name:req.body.name
    })
})

// creating API for getting all product list

app.get('/allproducts', async (req, res) => {
    try {
        let products = await Product.find({}).exec(); // Wait for the query to execute and get the documents
        console.log("All Products Fetched");
        res.send(products); // Send the documents in the response
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
})

// Schema Creating for User Model

const Users = mongoose.model('Users',{
    name:{
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    cartData: {
        type: Object,
    },
    date: {
        type: Date,
        default: Date.now,
    }
})

// Creating Endpoint for registering the User.

app.post('/signup',async (req,res) => {

    let check = await Users.findOne({email:req.body.email});
    if (check) {
        return res.status(400).json({success:false,errors:"User Already Exist With Same Email Address"})
    }
    let cart = {};
    for (let i = 0; i < 300; i++) {
        cart[i]=0;
    }
    const user = new Users({
        name:req.body.username,
        email:req.body.email,
        password:req.body.password,
        cartData:cart,
    })

    await user.save();

    const data = {
        user:{
            id:user.id
        }
    }

    const token = jwt.sign(data,'secret_ecom');
    res.json({success:true,token})

})


// Creating Endpoint for User Login

app.post('/login',async (req,res) => {
    let user = await Users.findOne({email:req.body.email});
    if (user) {
        const passCompare = req.body.password === user.password;
        if (passCompare) {
            const data = {
                user : {
                    id:user.id
                }
            }
            const token = jwt.sign(data,'secret_ecom');
            res.json({success:true,token});
        }
        else
        {
            res.json({success:false,errors:"Wrong Password"});
        }
    }
    else
    {
        res.json({success:false,errors:"User Does Not Exist"});
    }
})

// Creating Endpoint for newcollection data

app.get('/newcollections',async (req,res) => {
    let products = await Product.find({});
    let newcollection = products.slice(1).slice(-8);
    console.log("NewCollection Fetched");
    res.send(newcollection);
})

// Creating Endpoint for  Popular in Horses Secion

app.get('/popularinhorses',async (req,res) => {
    let products = await Product.find({category:"horse"});
    let popular_in_horse = products.slice(0,4);
    console.log("Popular In Horse Fetched");
    res.send(popular_in_horse);
})

const fetchUser = async (req,res,next) => {
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({errors:"Please authenticate using valid token"})
    }
    else
    {
        try {
            const data = jwt.verify(token,'secret_ecom');
            req.user = data.user;
            next();
        } catch (error) {
            res.status(401),send({errors:"Please Authenticate using a valid token"})
        }
    }

}



// Creating Endpoint for Adding products in cart data
app.post('/addtocart', fetchUser, async (req, res) => {
    try {
        let userData = await Users.findOne({ _id: req.user.id });

        // Initialize the cart item if it doesn't exist
        if (!userData.cartData[req.body.itemId]) {
            userData.cartData[req.body.itemId] = 0;
        }

        userData.cartData[req.body.itemId] += 1;

        // Update the user's cartData in the database
        await Users.findOneAndUpdate(
            { _id: req.user.id },
            { $set: { cartData: userData.cartData } }
        );

        res.json({ success: true, message: "Item added to cart" });
    } catch (error) {
        console.error("Error adding item to cart:", error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
});


app.listen(port,(error)=>{
    if(!error)
    {
        console.log("Server Running on Port "+port);
    }
    else
    {
        console.log("Error : "+error);
    }
});