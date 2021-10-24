import { useState } from "react";
import "./GalleryItem.css";

export default function GalleryItem({ item, updateGalleryItem }) {
  // variable for displaying image versus description
  const [imgDisplay, setImgDisplay] = useState(true);
  // variable for setting the description element's dimensions to those of its image so card size doesnt change
  const [descriptionDims, setDescriptionDims] = useState([]);

  // click handler for image, description, and like button
  const clickHandler = (e) => {
    // console.log(e.target.tagName);
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
        // run the PUT request function in app to update likes
        updateGalleryItem(item);
        break;
      case "P":
        // flip the truthyness of imgDisplay back to true so the image displays again
        setImgDisplay(!imgDisplay);
        break;
    }
  };

  return (
    <div className="card">
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
      <div className="likes">
        <p>
          {item.likes}{" "}
          {item.likes === 1 ? "person likes this" : "people like this"}
        </p>
        <button className="likeBtn" onClick={clickHandler}>
          Like
        </button>
      </div>
    </div>
  );
}
