import Baby_Cow from "./Baby_Cow_Nylon_Halter.webp";
import Cow_Mohri from "./Cow_Animal_Mohri_Halter.webp";
import Cow_Brush from "./Cow_Bath_Brushes.jpg";
import Dog_Set from "./Dog_Accessories_Set.webp";
import Dog_Lead from "./Dog_Lead_Rope.webp";
import Horse_Brush from "./Horse_Bath_brush.webp";
import Horse_Gloves from "./Horse_Bath_Gloves.webp";
import Horse_Boot from "./Horse_Bell_Boot_Rubber.webp";
import Horse_Bridle from "./Horse_Biothene_Bridle_Set.jpg";
import Biothene_Halter from "./Horse_Biothene_Halter.jpg";
import Horse_Bit from "./Horse_bit_Iron.webp";
import Brass_Bit from "./Horse_Brass_Bit.webp";
import Horse_Comb from "./Horse_Comb.webp";
import Horse_Water_Proof from "./Horse_Cover_Water_Proof.webp";
import Horse_Cover from "./Horse_Cover.webp";
import Iron_Bit from "./Horse_Dee_Bit_Iron.jpg";
import Horse_Fleeze from "./Horse_Fleeze_Cover.webp";
import Horse_Hoof from "./Horse_Hoof_Cleaner.webp";
import Horse_Saddle from "./Horse_Jumping_Saddle.jpg";
import Horse_Khurera from "./Khurera.webp";
import Horse_Seat from "./Horse_Seat_Leather_Set.jpg";
import Soft_Seat from "./Horse_Soft_Seat.jpg";
import Steel_Bit from "./Horse_Steel_Bit.webp";
import Synthetic_Saddle from "./Horse_Systhetic_Western_Saddle.webp";
import Western_Saddle from "./Horse_Western_Saddle_Only.jpg";
import Cow_Halter from "./Nylon_Cow_Halter_Mohra.jpg";
import Horse_Halter from "./Nylon_Horse_Halter.webp";
import Western_Saddle_Set from "./Horse_Western_Saddle_Set.jpg";
import Show_halter from './Show_Halter.jpg';
import Pvc_halter from './pvc_horse_halter.webp';
import Horse_Blade from './horse_blade.jpg';
import Bridal_Set from './Bridal_Set.webp';
import round_blade from './round_blade.jpg';
import hoof_cleaner from './Horse_Hoof_Cleaning_Brush.webp';
import horse_seat from './Horse_Western_Saddle_Set.jpg';
import chest_belt from './chest_belt.jpg';
import nose_ring from './nose_ring.jpeg';
import dog_muzzle from './dog_shikli.webp';
import dog_comb from './dog_comb.jpg';

let all_products = [
    {
        id: 1,
        name: "Baby Cow Halter Made Up of Nylon",
        category: "cow",
        image: Baby_Cow,
        new_price: 120,
        old_price: 160
    },
    {
        id: 2,
        name: "Cow Mohri 7.5 Meter Rope",
        category: "cow",
        image: Cow_Mohri,
        new_price: 80,
        old_price: 120
    },
    {
        id: 3,
        name: "Cow Brush For Grooming (Bathing)",
        category: "cow",
        image: Cow_Brush,
        new_price: 70,
        old_price: 120
    },
    {
        id: 4,
        name: "Cow Halter In Nylon",
        category: "cow",
        image: Cow_Halter,
        new_price: 150,
        old_price: 220
    },
    {
        id: 5,
        name: "Dog Lead Rope of 2 Meter",
        category: "dog",
        image: Dog_Lead,
        new_price: 120,
        old_price: 180
    },
    {
        id: 6,
        name: "Dog Set Including Chest Belt & Lead Rope & Neck Belt",
        category: "dog",
        image: Dog_Set,
        new_price: 400,
        old_price: 550
    },
    {
        id: 7,
        name: "Brush Specially Made for Horse",
        category: "horse",
        image: Horse_Brush,
        new_price: 200,
        old_price: 300
    },
    {
        id: 8,
        name: "Gloves for Grooming both Horse and Cow",
        category: "horse",
        image: Horse_Gloves,
        new_price: 150,
        old_price: 220
    },
    {
        id: 9,
        name: "Horse Bell Boot Made up of Rubber",
        category: "horse",
        image: Horse_Boot,
        new_price: 250,
        old_price: 320
    },
    {
        id: 10,
        name: "Horse Bridle Set Made up of Biothene Stronger than Leather",
        category: "horse",
        image: Horse_Bridle,
        new_price: 750,
        old_price: 900
    },
    {
        id: 11,
        name: "Horse Halter Made up of Biothene Stronger than Leather",
        category: "horse",
        image: Biothene_Halter,
        new_price: 600,
        old_price: 750
    },
    {
        id: 12,
        name: "Horse Bit Rounded Ring Made up of Iron",
        category: "horse",
        image: Horse_Bit,
        new_price: 220,
        old_price: 350
    },
    {
        id: 13,
        name: "Horse Bit Plain and Twisted Made up of Brass",
        category: "horse",
        image: Brass_Bit,
        new_price: 650,
        old_price: 750
    },
    {
        id: 14,
        name: "Horse Comb Made up of Rubber",
        category: "horse",
        image: Horse_Comb,
        new_price: 120,
        old_price: 200
    },
    {
        id: 15,
        name: "Horse Water Proof Cover and Hot also",
        category: "horse",
        image: Horse_Water_Proof,
        new_price: 1700,
        old_price: 2000
    },
    {
        id: 16,
        name: "Horse Cover Simple",
        category: "horse",
        image: Horse_Cover,
        new_price: 550,
        old_price: 650
    },
    {
        id: 17,
        name: "Horse Dee-Bit Made up of Iron",
        category: "horse",
        image: Iron_Bit,
        new_price: 350,
        old_price: 450
    },
    {
        id: 18,
        name: "Horse Cover Made up of Fleeze ",
        category: "horse",
        image: Horse_Fleeze,
        new_price: 700,
        old_price: 850
    },
    {
        id: 19,
        name: "Horse Brush Used For Cleaning the Hoof of Horse",
        category: "horse",
        image: Horse_Hoof,
        new_price: 250,
        old_price: 350
    },
    {
        id: 20,
        name: "Horse Jumping Saddle In Leather",
        category: "horse",
        image: Horse_Saddle,
        new_price: 4500,
        old_price: 4900
    },
    {
        id: 21,
        name: "Horse Khurera Disposal used for Grooming",
        category: "horse",
        image: Horse_Khurera,
        new_price: 150,
        old_price: 180
    },
    {
        id: 22,
        name: "Horse Jumping Saddle Set Including Bridle Set",
        category: "horse",
        image: Horse_Seat,
        new_price: 5500,
        old_price: 5900
    },
    {
        id: 23,
        name: "Horse Soft Seat Made up of Synthetic",
        category: "horse",
        image: Soft_Seat,
        new_price: 3000,
        old_price: 3500
    },
    {
        id: 24,
        name: "Horse Steel Bit Plain & Twisted",
        category: "horse",
        image: Steel_Bit,
        new_price: 500,
        old_price: 650
    },
    {
        id: 25,
        name: "Horse Western Saddle Set In Synthetic",
        category: "horse",
        image: Synthetic_Saddle,
        new_price: 6000,
        old_price: 6900
    },
    {
        id: 26,
        name: "Horse Western Saddle In Leather Without Set",
        category: "horse",
        image: Western_Saddle,
        new_price: 6400,
        old_price: 6900
    },
    
    {
        id: 27,
        name: "Horse Halter In Nylon",
        category: "horse",
        image: Horse_Halter,
        new_price: 250,
        old_price: 350
    },
    {
        id: 28,
        name: "Horse Western Saddle Set In Leather With Bridle Set",
        category: "horse",
        image: Western_Saddle_Set,
        new_price: 10000,
        old_price: 11900
    },
    {
        id:29,
        name: "Show Halter with Steel Chain In Biothene",
        category: "horse",
        image: Show_halter,
        new_price:850,
        old_price:1000
    },
    {
        id:30,
        name: "Halter in Biothene(PVC) Best Quality",
        category: "horse",
        image: Pvc_halter,
        new_price:550,
        old_price:720

    },
    {
        id:31,
        name: "Horse Blade In Steel",
        category: "horse",
        image: Horse_Blade,
        new_price:550,
        old_price:650
    },
    {
        id:32,
        name: "Horse Bridle Set In Biothene(PVC)",
        category: "horse",
        image: Bridal_Set,
        new_price:850,
        old_price:1000
    },
    {
        id:33,
        name: "Round Blade In Steel for Horse Grooming",
        category: "horse",
        image: round_blade,
        new_price:700,
        old_price:850
    },
    {
        id:34,
        name: "Hoof Cleaner For Horse",
        category: "horse",
        image: hoof_cleaner,
        new_price:250,
        old_price:350
    },
    {
        id:35,
        name: "Horse Wester Saddle Set In Leather with Bridle Set",
        category: "horse",
        image: horse_seat,
        new_price:9500,
        old_price:10000
    },
    {
        id:36,
        name: "Bridle Set and Chest Belt Set In Leather",
        category: "horse",
        image: chest_belt,
        new_price:950,
        old_price:1100
    },
    {
        id:37,
        name: "Nose Ring For Cow In Steel And Brass",
        category: "cow",
        image: nose_ring,
        new_price:600,
        old_price:750
    },
    {
        id:38,
        name: "Dog Muzzle In Plastic",
        category: "dog",
        image: dog_muzzle,
        new_price:200,
        old_price:350
    },
    {
        id:39,
        name: "Dog Comb For Dog Grooming In Steel",
        category: "dog",
        image: dog_comb,
        new_price:180,
        old_price:250
    }
]

export default all_products





