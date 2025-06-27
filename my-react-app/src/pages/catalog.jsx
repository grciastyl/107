//please create this compononent, just render a message "catalog page"
//use h1 and provide a className "catalog-page"

//please try this but into the products
import { useState, useEffect } from "react";
import Product from "../components/product";
import "./catalog.css"
import DataService from "../service/data";

function Catalog() {
    const [items, setItems] = useState([])//create a state variable to hold the products

    useEffect(function () {
        console.log("component loaded")
        loadCatalog();//call the function to load the products on component load

    },[]);

    function loadCatalog(){
        //get the products
        let service = new DataService;
        let productEnd = service.getProducts();
        console.log(productEnd);
        setItems(productEnd); //update the state with the new productss
    }

    return (
        <div className="catalog-page">
            <h1>Catalog Page</h1>
            <h5>Hello we have {items.length} new products</h5>
            {/*render products according to the amount of items that you have */}

            <br />
            {items.map( temp => <Product data ={temp} key={temp._id}></Product>)}
            {/* transforms every element in the array items into component.
            for each element I have in an {array} i want to create a temporarl variable that will be transformed into something*/}
            {/*props is something that comes with react that helps you pass data to components*/}

        </div>
    );
}

export default Catalog;