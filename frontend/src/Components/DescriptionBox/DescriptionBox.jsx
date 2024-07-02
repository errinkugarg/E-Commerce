import React from "react";
import './DescriptionBox.css'
const DescriptionBox = () => {
    return(
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews</div>
            </div>
            <div className="descriptionbox-description">
                <p>
                    An e-commerce website is an online platform that facilitates the buying and selling of 
                    products or services over the Internet. It serves as a virtual marketplace where businesses and 
                    Individuals can showcase their products, Interact with customers, and conduct transactions 
                    without the need for a physical presence. E-commerse Websites have gained a immense popularity 
                    due to their convenience, accessibility, and the global reach they offer.
                </p>
                <p>E-commerce Websites typically displays a product or services along with detailed 
                    description, images, prices and any available variations(e.g. sizes, colors). 
                    Each product usually has its own dedicated page with relevant information.</p>
            </div>
        </div>
    )
}

export default DescriptionBox