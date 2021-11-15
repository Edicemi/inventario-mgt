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

    }
}

const getAllCloth = async (req, res) => {
    try {
      const cloth_types = await otherClothPrice.find().select(["name", "amount"]);
      Response(res).success(
        {
          cloth_types,
        },
        200
      );
    } catch (err) {
      Response(res).error(err, err.code);
    }
  };