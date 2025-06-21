import "./product.css";
import QtyPicker from "./qtyPicker";
import { useEffect } from "react";

function Product() {

    // useEffect hook to fetch product data
    useEffect(function(){
        console.log("Hello I am a product");
    }, []);

    return (
        <div className="product">
            <h5>title goes here</h5>
            <img src="https://picsum.photos/200/200" />
            <div className="prices">
                <label>Price</label>
                <label>Total</label>
            </div>
            <QtyPicker />
            <button className="btn btn-sm btn-dark">Add</button>
        </div>
    )


}

export default Product;