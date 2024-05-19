import mongoose from "mongoose";

const bookSchema=mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    image:String,
})
const Book=mongoose.model("Book",bookSchema);

// export default book;
// module.exports = Book;
export default Book