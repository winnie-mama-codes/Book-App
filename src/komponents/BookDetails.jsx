import { useBookContext } from "../BooksContext"

const BookDetails = () => {
    const {books,addBookToRead} = useBookContext();
   console.log(books)
  return (
   <div className="mt-8">
{books.length>0&&(
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9 m-24">
      {books.map(book=>(
     <div onClick={()=>addBookToRead(book)} key={book.id} className="border border-gray-300 rounded-lg p-4 ">
     {book.volumeInfo.imageLinks && (
         <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} className="w-full h-96  " />
         )}
         <h2 className="text-xl font-semibold m-6 text-center">{book.volumeInfo.title}</h2>
         {book.volumeInfo.authors && (
           <p className="text-gray-600 m-2 text-center">{book.volumeInfo.authors.join(', ')}</p>
         )}
     <p className="text-gray-700 mt-2  overflow-scroll  h-56 ">{book.volumeInfo.description}</p>
   </div>
))}

       </div>
)}

   </div>
  )
}

export default BookDetails