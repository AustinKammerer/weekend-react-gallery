import { useState } from "react";
import "./GalleryItem.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardActionArea from "@mui/material/CardActionArea";

export default function GalleryItem({
  item,
  updateGalleryItem,
  deleteGalleryItem,
}) {
  // variable for displaying image versus description
  const [imgDisplay, setImgDisplay] = useState(true);
  // variable for setting the description element's dimensions to those of its image so card size doesnt change
  const [descriptionDims, setDescriptionDims] = useState([]);

  // click handler for image, description, and like/delete buttons
  const clickHandler = (e) => {
    console.dir(e.target);
    // change functionality based on what was clicked
    switch (e.target.tagName) {
      case "IMG":
        // grab the image dimensions when clicked
        let picWidthStr = `${e.target.width}px`;
        let picHeightStr = `${e.target.height}px`;
        // set them in a state variable (array)
        setDescriptionDims([picWidthStr, picHeightStr]);
        // flip the truthyness of imgDisplay
        setImgDisplay(!imgDisplay);
        break;
      case "BUTTON":
        if (e.target.className === "likeBtn") {
          // run the PUT request function in app to update likes
          updateGalleryItem(item);
        } else if (e.target.className === "deleteBtn") {
          // run the DELETE request function in app to delete the image
          deleteGalleryItem(item);
        }
        break;
      case "P":
        // flip the truthyness of imgDisplay back to true so the image displays again
        setImgDisplay(!imgDisplay);
        break;
    }
  };

  return (
    <Card sx={{ maxWidth: 345, m: 5 }}>
      {/* <div className="delete"></div> */}
      <CardActionArea>
        <div className="cardMain">
          {/* if imgDisplay is true (default) the image is displayed, 
        if it is true (when the image is clicked) the description will display instead */}
          {imgDisplay ? (
            <img className="image " src={item.path} onClick={clickHandler} />
          ) : (
            <p
              className="description"
              onClick={clickHandler}
              style={{ width: descriptionDims[0], height: descriptionDims[1] }}
            >
              {item.description}
            </p>
          )}
        </div>
      </CardActionArea>
      <div className="likes">
        <p>
          {item.likes}{" "}
          {item.likes === 1 ? "person likes this" : "people like this"}
        </p>
      </div>
      <CardActions
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          gridTemplateRows: "auto",
          gridTemplateAreas: `"like . delete"`,
        }}
      >
        {/* <Box> */}
        <Button
          className="likeBtn"
          onClick={clickHandler}
          sx={{ gridArea: "like" }}
        >
          Like
        </Button>
        <Button
          onClick={clickHandler}
          className="deleteBtn"
          sx={{ gridArea: "delete" }}
        >
          X
        </Button>
        {/* </Box> */}
      </CardActions>
    </Card>
  );
}
