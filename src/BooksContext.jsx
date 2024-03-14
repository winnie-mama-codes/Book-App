import { createContext, useContext, useState } from "react";
import axios from "axios";

//create context and use it
const BooksContext = createContext();
export const useBookContext = () => useContext(BooksContext);

//create context provider

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [selectedBooks, setSelectedBooks] = useState([]);

  const key = import.meta.env.VITE_API_KEY;

  const fetchBooks = async (searchTerm) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${key}`
      );
      setBooks(response.data.items);
    } catch (error) {
      console.log("Error fetching boos", error);
    }
  };


  const addBookToRead = (book) => {
    setSelectedBooks([...selectedBooks,book])
  }

  return (
  <BooksContext.Provider value= {{books,fetchBooks,selectedBooks, addBookToRead}}>
    {children}
    </BooksContext.Provider>
  );
};
