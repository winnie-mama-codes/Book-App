import { useBookContext } from "../BooksContext"

const BookToRead = () => {
    const {selectedBooks} = useBookContext()    
    console.log(selectedBooks)
    if (!selectedBooks || selectedBooks.length === 0) {
        return (
            <div className="mt-8">
                <h1>No books selected</h1>
            </div>
        )
    }
    return (
        <div className="mt-8">
            <h1>Selected books</h1>
            {selectedBooks.map((book) => (
                <div key={book.id} className="border border-gray-300 rounded-lg p-4">

                    <h2 className="text-xl font-semibold mb-2">{book.volumeInfo.title}</h2>
                    {book.volumeInfo.authors && (
                        <p className="text-gray-600 mb-2">{book.volumeInfo.authors.join(', ')}</p>
                    )}
                    {book.volumeInfo.imageLinks && (
                        <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} className="" />
                    )}
                    <p className="text-gray-700 mt-2">{book.volumeInfo.description}</p>
                </div>
            ))}
        </div>
    )
}

export default BookToRead