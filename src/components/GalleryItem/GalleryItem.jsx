import { useState } from "react";
import "./GalleryItem.css";

export default function GalleryItem({ item, updateGalleryItem }) {
  // TODO img click handler to display description instead
  const [isImgClicked, setIsImgClicked] = useState(false);
  const [descriptionDims, setDescriptionDims] = useState([]);

  const clickHandler = (e) => {
    console.dir(e.target);

    switch (e.target.tagName) {
      case "IMG":
        console.log("image");
        // document.querySelector(".description").style.width = `${picWidth}px`;
        let picWidthStr = `${document.querySelector("img").width}px`;
        let picHeightStr = `${document.querySelector("img").height}px`;
        console.log(picWidthStr);
        setDescriptionDims([picWidthStr, picHeightStr]);
        setIsImgClicked(!isImgClicked);
        break;
      case "BUTTON":
        console.log("button");
        updateGalleryItem(item);
        break;
      case "P":
        console.log("p");
        setIsImgClicked(!isImgClicked);
        break;
    }
  };

  // TODO like button click handler to increase likes by 1 (updateGalleryItem)
  return (
    <div className="card">
      <div className="cardMain">
        {!isImgClicked ? (
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
        <button onClick={clickHandler}>Like</button>
      </div>
    </div>
  );
}
