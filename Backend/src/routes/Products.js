var router = require('express').Router();

let Product = require('../models/Product');
let List = require('../models/List');
let Booking = require('../models/Booking')
router.post('/add', async (req,res) => {
    console.log(req.body)

    const product = new Product ({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        userId: req.body.userId,
        url: req.body.url
    })
    try{
        const savedProduct = await product.save();
        res.json({data: savedProduct});
    } catch(e) {
        res.status(400).json({error})
    }
});

router.get('/list', async(req,res) => {
    Product.find({}, (err,result) => {
        res.send(result)
    })
});

router.get('/single/:id', async (req,res)=> {
    console.log(req.params)
    Product.findById(req.params.id, (err,result) => {
        res.send(result)
    })
})

router.delete('/ad/:id', async (req,res) => {
    Product.findByIdAndDelete(req.params.id, (err,result) => {
        res.send(result)
    })
})

router.get('/getadswithid/:userId', async(req,res) => {
    Product.find({userId: req.params.userId}, (err,result) => {
        res.send(result)
    })
})

router.post('/addlist', async (req,res) => {
    console.log(req.body)

    const list = new List ({
        name: req.body.name,
        price: req.body.price,
        userId: req.body.userId,
    })
    try{
        const savedProduct = await list.save();
        res.json({data: savedProduct});
    } catch(e) {
        res.status(400).json({error})
    }
});

router.get('/addlist', async(req,res) => {
    List.find({}, (err,result) => {
        res.send(result)
    })
})

router.delete('/addlist', async(req,res) => {
    List.deleteMany({}, (err,result) => {
        res.send(result)
    } )
})

router.post('/checkout', async(req,res) => {
    const booking = new Booking({
        items: req.body.items,
        price: req.body.price,
        userId: req.body.userId
    })
    try{
        const savedBooking = await booking.save();
        res.json({data: savedBooking});
    } catch(error) {
        res.status(400).json({error})
    }

})


module.exports = router

