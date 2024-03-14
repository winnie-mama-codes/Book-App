import BookDetails from "../components/BookDetails"
import BookSearch from "../components/BookSearch"

const Home = () => {
    return (
      <div>
        <div  className="flex items-center justify-center h-screen bg-cover bg-center opacity-100 "
        style={{ backgroundImage: `url(https://images.pexels.com/photos/1907784/pexels-photo-1907784.jpeg?auto=compress&cs=tinysrgb&w=600` }}>
            <BookSearch />
        
        </div>
        <BookDetails />
      </div>
    )
  }
  
  export default Home