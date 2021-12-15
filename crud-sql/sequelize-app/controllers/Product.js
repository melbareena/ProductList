// Import model Product
import Product from "../models/Product.js";

// Get product
export const getAllProducts = async (req, res) => {
    try {
        const product = await Product.findAll();
        res.send(product);
    } catch (error) {
        res.json({ message: error.message});
        console.log(error);
    }
}

// Get product id
export const getProductById = async (req, res) => {
    try {
        const product = await Product.findAll({
            where: {
                id: req.params.id
            }
        });
        //console.log(product[0]);
        res.json(product[0]);
    } catch (error) {
        res.json({ message: error.message});
        console.log(error);
    }
}

// Create product
export const createProduct = async (req, res) => {
    try {
        await Product.create(req.body);
        alert("done");
        res.json({
            "message": "Product Created"
        });
    } catch (error) {
        res.json({ message: error.message});
        console.log(error);
    }
}

// Update product
export const updateProduct = async (req, res) => {
    try {
        await Product.update(req.body, {
            where: {
                id:req.params.id
            }
        });
        //console.log(product[0]);
        res.json({
            "message": "Product Updated"
        });
    } catch (error) {
        res.json({ message: error.message});
        console.log(error);
    }
}


// Delete product id
export const deleteProduct = async (req, res) => {
    try {
        await Product.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Product Deleted"
        });
    } catch (error) {
        res.json({ message: error.message});
        console.log(error);
    }
}