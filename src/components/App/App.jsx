import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import GalleryList from "../GalleryList/GalleryList.jsx";
import GalleryForm from "../GalleryForm/GalleryForm.jsx";

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
      .then((res) => {
        console.log(res.data);
        setItemList(res.data);
      })
      .catch((err) => {
        console.log("Error getting the gallery", err);
      });
  };

  // PUT request function to update an item's likes
  const updateGalleryItem = (item) => {
    const id = item.id;
    axios
      .put(`gallery/like/${id}`)
      .then((res) => {
        console.log("Item update success");
        getGallery();
      })
      .catch((err) => {
        console.log("Error updating the item", err);
        alert("Unable to update item!");
      });
  };

  //POST request function add a new item to the gallery
  const addGalleryItem = (newItem) => {
    console.log(newItem);
    axios
      .post("gallery", newItem)
      .then((res) => {
        console.log("Item added successfully", newItem);
        getGallery();
      })
      .catch((err) => {
        console.log("Error adding item to the database", err);
      });
  };

  // itemList is passed to GalleryList as a prop so it may be mapped
  // updateGalleryItem is passed as a prop so it may be then passed to GalleryItem for the 'Like' button click handler
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <GalleryForm addGalleryItem={addGalleryItem} />
      <GalleryList itemList={itemList} updateGalleryItem={updateGalleryItem} />
    </div>
  );
}

export default App;
