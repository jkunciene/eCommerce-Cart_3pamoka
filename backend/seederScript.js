require("dotenv").config();

const productsData = require("./data/products");
const connectDB = require("./config/db");
const Product = require("./models/Products");

connectDB();

const importData = async () => {
    try {
        await Product.deleteMany({});

        await Product.insertMany(productsData);

        console.log("Data import success");

        process.exit();

    } catch (error) {
        console.log("Error with data import"+error);
        process.exit(1);
    }
}
importData();