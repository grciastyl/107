import "./qtyPicker.css";
import { useState } from "react";
//logic goes here for the QtyPicker component
function QtyPicker() {
    //create the stateVariable
    let [quantity, setQuantity] = useState(1);
    //setQuantity(100); // this is how you change the state variable
    //quantity = 100; // this is not how you change the state variable, it wont work



    function decrement() {
        console.log("Decrementing quantity");
        let newQuantity = quantity - 1;// decrement the quantity by 1
        if (newQuantity < 1) {
            newQuantity = 1; // if the quantity is less than 1, set it to 1
            
            
        }
        setQuantity(newQuantity); // update the state variable with the new quantity
    }
    function increment() {
        console.log("Incrementing quantity");
        let newQuantity = quantity + 1;// increment the quantity by 1
        setQuantity(newQuantity); // update the state variable with the new quantity
    }

    /**
     * A React component for selecting a quantity.
     *
     * @function QtyPicker
     * @returns {JSX.Element} - A JSX element representing the QtyPicker component.
     */
    function QtyPicker() {
        return (
            <div className="qty-Picker">
                <button>-</button>
                <label>1</label>
                <button>+</button>
            </div>
        );
    }
    return (
        <div className="qty-Picker">
            <button disabled={quantity===1} onClick={decrement}>-</button>
            {/*this is how you disable the decrement button if the quantity is 1 
            = this is an assignment
            == this is a comparison
            === this is a comparison that returns a true/false*/
            }
            <label>{quantity}</label>
            <button onClick={increment}>+</button>
        </div>
    );
}

//this is the exporting the component qtyPicker
export default QtyPicker;