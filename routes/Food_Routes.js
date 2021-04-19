const express = require('express')
const router = express.Router()
const upload = require('../middleware/upload')
const Food = require('../modules/Vegetables')
const auth = require('../middleware/auth')


router.post('/vegetable/insert',function(req,res){

const name= req.body.Name
const description = req.body.Description
const price = req.body.Price
const rating = req.body.Rating
const data = new Food({Name:name,Description:description,Price:price,Rating:rating})
data.save().then(function(result){
    res.status(200).json({success:true,data:data})
})


})
router.put('/vegetable/photo/:id',upload.single("file"),function(req,res){
console.log("foods")

const id = req.params.id
const file = req.file
Food.findByIdAndUpdate({_id:id},{
    Image:file.filename  }).then(function(result){
        res.status(200).json({status:true,message:"Updated"})
    })
})

router.get('/vegetable/show',function(req,res){


Food.find().then(function(result){
console.log(result)
res.status(200).json({success:true,data:result})

})


router.get('/vegetable/single/:id',function(req,res){
  console.log('asdasdasdasd')
Food.findOne({_id:req.params.id}).then((data)=>{
res.status(200).json({data:data})
})

})

router.put('/vegetable/update/:id',upload.single('image'),function(req,res){

  const file = req.file
  const name= req.body.Name
  const description = req.body.Description
  const price = req.body.Price
  const image = file.filename
  Food.findByIdAndUpdate({_id:req.params.id},{

    Name:name,
    Description:description,
    Price:price,
    Image:image
  }).then((data)=>{
    res.status(200).json({message:"One Item Updatead"})
  })

})
router.delete('/d/:id',function(req,res){
console.log("asdasdasd")
  Food.findOneAndDelete({_id:req.params.id}).then((data)=>{

    res.status(200).json({success:true,message:"asdasdasdads"})
  })
})



})


module.exports = router




