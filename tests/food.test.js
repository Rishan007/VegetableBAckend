const Product = require('../modules/Vegetables');
const mongoose = require('mongoose');
// use the new name of the database
const url = 'mongodb://localhost:27017/VegStore';
beforeAll(async () => {
 await mongoose.connect(url, {
 useNewUrlParser: true,
 useCreateIndex: true
 });
});
afterAll(async () => {
 await mongoose.connection.close();
});


describe('Product Schema test anything', () => {
// the code below is for insert testing
 it('Add product testing anything', () => {
 const product = {
 'Name': 'as',
 'Price': '21',
 'Description':'asdasdasd',

 };
 
 return Product.create(product)
 .then((pro_ret) => {
 expect(pro_ret.Name).toEqual('as');
 });
 });

//  it('to test the delete product is working or not', async () => {
//  const status = await Product.findByIdAndDelete({_id:"607dbcdd1ae5e520309baadc"});
//  console.log(status)
//  expect(status.Name).toEqual("Burg");
//  })


it('to test the update', async () => {
    return Product.findOneAndUpdate({_id :Object('607962b67683795d1030f673')}, 
   {$set : {Name:'b'}})
    .then((pp)=>{
    console.log(pp)
    expect(pp.Name).toEqual('b')
    })
    
   });
    
   })