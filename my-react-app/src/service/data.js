let catalog = [
    {
        "title": "honeycomb" ,
        "category": "fruit",
        "price": 15,
        "image": "picture",
        "_id": "1"  // unique id for each product
    }, //comma is here because it means we are adding another product to the array
    {
        "title": "chair" ,
        "category": "furniture",
        "price": 15,
        "image": "picture",
        "_id": "2"  // unique id for each product
    }, //comma is here because it means we are adding another product to the array
    {
        "title": "car" ,
        "category": "vehicle",
        "price": 15,
        "image": "picture",
        "_id": "3"  // unique id for each product
    }, //comma is here because it means we are adding another product to the array
];

class DataService {
    getProducts()
    {
        return catalog;
    }
}
export default DataService;