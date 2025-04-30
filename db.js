const  mongose =  require ("mongoose");
mongose.connect("mongodb+srv://soumyaprakashdash23:1PqdvqodjoqiJeGG@cluster0.kdtjx.mongodb.net/")
console.log ("serve") ;

const todoSchema = mongose.Schema({
     title:String,
     description:String,
     completed:Boolean

})
 const todo = mongose.model('todos',todoSchema);

 module.exports = {
    todo
 }