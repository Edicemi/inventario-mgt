const Product_Type = require("../models/product-type");
exports.addProductType = async(req, res) => {
    try {
        const { name, description } = req.body;

        const product_Type = new Product_Type({
            name: name,
            description: description,
        });

        await product_Type.save();
        return res.status(200).json({
            message: 'New product category added succesfully',
        });
    } catch (error) {
        console.log(error)
        return res.status(error.code).json({
            message: error.message,
            code: error.code,
        })
    }
};

exports.fetchAll = async(req, res) => {
    try{
      const product_type = await Product_Type.find().select(["name", "description"]);
      return res.status(200).json({
        message: 'New product category added succesfully',
        product_type,
    });
}catch (error) {
    console.log(error)
    return res.status(error.code).json({
        message: error.message,
        code: error.code,
    })
}
};
