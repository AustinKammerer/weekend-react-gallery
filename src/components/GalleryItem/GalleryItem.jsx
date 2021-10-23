import { useState } from "react";

export default function GalleryItem({ item, updateGalleryItem }) {
  // TODO img click handler to display description instead
  const [isImgClicked, setIsImgClicked] = useState(false);
  let personUnit = "person";
  const clickHandler = (e) => {
    console.dir(e.target);
    switch (e.target.tagName) {
      case "IMG":
        console.log("image");
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
  console.log(isImgClicked);
  // TODO like button click handler to increase likes by 1 (updateGalleryItem)
  return (
    <div>
      <img src={item.path} onClick={clickHandler} />
      <p onClick={clickHandler}>{item.description}</p>
      <p>
        {item.likes}{" "}
        {item.likes === 1 ? "person likes this" : "people like this"}
      </p>
      <button onClick={clickHandler}>Like</button>
    </div>
  );
}
