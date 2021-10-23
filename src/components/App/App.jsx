import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import GalleryList from "../GalleryList/GalleryList.jsx";

function App() {
  // state variables
  const [itemList, setItemList] = useState([]);
  // GET request function

  useEffect(() => {
    getGallery();
  }, []);

  const getGallery = () => {
    axios
      .get("/gallery")
      .then((response) => {
        console.log(response.data);
        setItemList(response.data);
      })
      .catch((error) => {
        console.log("Error getting the gallery", error);
      });
  };

  const updateGalleryItem = (item) => {
    const id = item.id;
    axios
      .put(`gallery/like/${id}`)
      .then((response) => {
        console.log("Item update success");
        getGallery();
      })
      .catch((error) => {
        console.log("Error updating the item", error);
        alert("Unable to update item!");
      });
  };

  console.log(itemList);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <p>Gallery goes here</p>
      {/* <img src="images/goat_small.jpg" /> */}
      <GalleryList itemList={itemList} updateGalleryItem={updateGalleryItem} />
    </div>
  );
}

export default App;
