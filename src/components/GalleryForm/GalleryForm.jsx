import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";

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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Paper sx={{ px: 2 }}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          autoComplete="off"
        >
          <TextField
            value={newItem.path}
            onChange={handleChange}
            margin="normal"
            required
            fullWidth
            id="path"
            label="Image URL"
            name="path"
            autoFocus
            size="small"
          />
          <TextField
            value={newItem.description}
            onChange={handleChange}
            margin="normal"
            fullWidth
            id="description"
            label="Description"
            name="description"
            autoFocus
            size="small"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 1, mb: 2 }}
          >
            Add Image
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
