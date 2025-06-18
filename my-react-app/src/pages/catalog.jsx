//please create this compononent, just render a message "catalog page"
//use h1 and provide a className "catalog-page"
import Product from "../components/product";
import "./catalog.css"

function Catalog() {
    return (
        <div className="catalog-page">
            <h1>Catalog Page</h1>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
    );
}

export default Catalog;