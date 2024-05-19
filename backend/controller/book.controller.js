import Book from '../model/book.model';

export const getbook = async(req,res)=>{
    try{
        const book=await Book.find();
        res.status(200).send(book)
    }catch(error){
        res.status(500).send({message:"Something went wrong"})
    }
}