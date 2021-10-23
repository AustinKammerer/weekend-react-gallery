import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import GalleryList from "../GalleryList/GalleryList.jsx";

function App() {
  // state variables
  const [itemList, setItemList] = useState([]);

  // trigger the GET only once on page render
  useEffect(() => {
    getGallery();
  }, []);

  // GET request function
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

  // PUT request function to update an item's likes
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

  // itemList is passed to GalleryList as a prop so it may be mapped
  // updateGalleryItem is passed as a prop so it may be then passed to GalleryItem for the 'Like' button click handler
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <GalleryList itemList={itemList} updateGalleryItem={updateGalleryItem} />
    </div>
  );
}

export default App;
