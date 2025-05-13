import { useState } from "react"
import SearchBar from  "./Components/SearchBar"
import ImageList from  "./Components/ImagenList"
import searchImages from  "./api"

function App() {
  //searchImages('cars')
  const [image, setImages] = useState([])

  const handleSubmit = async(term) => {
    console.log('usted esta buscando con: ', term)
    const result = await searchImages(term)
  }
  return 
  <>
  <h1>Pictures App</h1>
  <SearchBar onSubmit={handleSubmit}/>
  <ImageList images={image}/>
  </>
  }
export default App