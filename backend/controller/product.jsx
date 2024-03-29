const Model = require('../model/product.jsx');
const Product = Model.Product;
//create product--admin

exports.createProduct = (async(req,res)=>{
    // const doc = await productModel.create(req.body);
    const product = new Product(req.body);
    product.save(); //it will save the data in the database

    res.status(201).json({
        success:true,
        product
    })
});

//getting all the product
exports.getAllProduct = (async(req,res)=>{
    const products = await Product.find();
    if(!products){
        return res.status(500).send({
            success:false,
            message:"products not found"
        })
    }
    res.status(200).send(products);
})

//getting single product
exports.getProduct = (async(req,res)=>{
    try{
        const id = req.params.id;
        const product = await Product.find({_id:id});
        res.status(200).send(product);
    }catch(err){
        res.status(404)
        console.log(err)
    }
    
})

//update product--admin
exports.updateProduct = (async(req,res)=>{
    const id = req.params.id;
    let product = await Product.findById(id);

    if(!product){
        return res.status(500).send({
            success:false,
            message:"product not found"
        })
    }

     product = await Product.findOneAndUpdate({_id:id}, req.body,{
        //options
        new:true,
        runValidators:true,
        useFindAndModify:false
    });
    res.status(200).send(product);
});

//replace product--admin
exports.replaceProduct = (async(req,res)=>{
    const id = req.params.id;
    let product = await Product.findById(id);
    if(!product){
        return res.status(500).send({
            success:false,
            message:"product not found"
        })
    }
    product = await Product.findOneAndReplace({_id:id},req.body);
    res.status(200).send(product);

});

//delete product--admin
exports.deleteProduct = (async(req,res)=>{
    const id = req.params.id;
    let product = await Product.findById(id);
    console.log(product,"hello")
    if(!product){
        return res.status(500).send({
            success:false,
            message:"product not found for delete"
        })
    }
    product = await Product.findOneAndDelete({_id:id});
    res.status(200).json({
        success:true,
        message:"product delete successfully"
    });

});