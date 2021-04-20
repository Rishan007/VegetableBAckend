const Product = require('../modules/Booking');
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
 'User': '607e669736fa3e2630c1b603',
 'Vegetables': '607e64f636fa3e2630c1b5fd',
 'Qty':'5',

 "Date":"5"
 };
 
 return Product.create(product)
 .then((pro_ret) => {
    
 expect(pro_ret.Date).toEqual('5');
 });
 });

//  it('to test the delete product is working or not', async () => {
//  const status = await Product.findByIdAndDelete({_id:"607dbf93cf18a56498e02b87"});
//  console.log(status)
//  expect(status.Date).toEqual("5");
//  })


    
   })