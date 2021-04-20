const express = require('express')
const router = express.Router()
const upload = require('../middleware/upload')
const Food = require('../modules/Vegetables')
const auth = require('../middleware/auth')


router.post('/vegetable/insert',upload.single('pimage'),function(req,res){

const name= req.body.pname
const price = req.body.pprice
const desc = req.body.pdesc
const image = req.file.filename
const data = new Food({Name:name,Price:price,Description:desc,Image:image})
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
})

router.get('/veg/single/:id',function(req,res){
  console.log('asdasdasdasd')
Food.findOne({_id:req.params.id}).then((data)=>{
res.status(200).json({data:data})
})

})



router.put('/vegetable/update/:id',upload.single('image'),function(req,res){

 
  const name= req.body.pname
  const price = req.body.pprice


  if(req.file){
    const file = req.file
    const image = file.filename


    Food.findByIdAndUpdate({_id:req.params.id},{
     
      Name:name,
      Price:price,
      Image:image,
      Desciption:req.body.pdesc

    }).then((data)=>{
      res.status(200).json({message:"One Item Updatead"})
    })
  }
  else{


    Food.findByIdAndUpdate({_id:req.params.id},{
  
      Name:name,
      Price:price,
      Desciption:req.body.pdesc
    }).then((data)=>{
      res.status(200).json({message:"One Item Updatead"})
    })
    
  }
 

})
router.delete('/d/:id',function(req,res){
console.log("asdasdasd")
  Food.findOneAndDelete({_id:req.params.id}).then((data)=>{

    res.status(200).json({success:true,message:"asdasdasdads"})
  })
})


module.exports = router




