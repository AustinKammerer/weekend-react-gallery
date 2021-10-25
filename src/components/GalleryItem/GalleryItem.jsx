import { useState } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

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
    // console.dir(e.target);
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
        if (e.target.innerText === "LIKE") {
          // run the PUT request function in app to update likes
          updateGalleryItem(item);
        } else if (e.target.innerText === "REMOVE") {
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
    <Card sx={{ maxWidth: 500, m: 2 }}>
      <CardActionArea>
        {imgDisplay ? (
          <CardMedia
            component="img"
            height="200"
            image={item.path}
            onClick={clickHandler}
            className="image"
          />
        ) : (
          <Typography
            variant="body2"
            onClick={clickHandler}
            className="description"
            sx={{
              boxSizing: "border-box",
              width: descriptionDims[0],
              height: descriptionDims[1],
              display: "flex",
              alignItems: "center",
              p: 3,
            }}
          >
            {item.description}
          </Typography>
        )}
      </CardActionArea>
      <Typography variant="subtitle1" textAlign={"center"} mt={2}>
        {item.likes}{" "}
        {item.likes === 1 ? "person likes this" : "people like this"}
      </Typography>
      <CardActions
        sx={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 2fr",
          gridTemplateRows: "auto",
          gridTemplateAreas: `"like . delete"`,
        }}
      >
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
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}
