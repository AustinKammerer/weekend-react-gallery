import { useState } from "react";
import "./GalleryForm.css";

export default function GalleryForm({ addGalleryItem }) {
  // declare variable newItem and a way to set it
  // each input will change its respective property of newItem
  const [newItem, setNewItem] = useState({ path: "", description: "" });
  const handleChange = (e) => {
    // console.dir(e.target);
    // unpack the name and value properties from the input that is being changed
    // assign them to variables
    const { name, value } = e.target;
    // a callback is used so we can have access to the previous state of newItem
    // we then spread prevState (property that isn't being changed by the input) into newItem so we don't overwrite it
    // the changed propery's key is set to e.target.name while its value it set to e.target.value
    setNewItem((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // only run addGalleryItem if path input is not empty
    if (newItem.path === "") {
      alert("Please enter a URL");
    } else {
      addGalleryItem(newItem);
      // reset the input fields
      setNewItem({ path: "", description: "" });
    }
  };

  //   console.log(newItem);
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="path">Image URL:</label>
      <input
        name="path"
        value={newItem.path}
        type="text"
        onChange={handleChange}
        className="text-input"
      />
      <label htmlFor="description">Image Description:</label>
      <input
        name="description"
        value={newItem.description}
        type="text"
        onChange={handleChange}
        className="text-input"
      />
      <input type="submit" value="Add Image" />
    </form>
  );
}
