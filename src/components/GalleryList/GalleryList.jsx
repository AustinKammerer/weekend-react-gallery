import GalleryItem from "../GalleryItem/GalleryItem.jsx";

export default function GalleryList({ itemList, updateGalleryItem }) {
  // loop over the itemList to generate a component for each item
  // the map callback's 'item' argument is passed to the component as a prop
  return (
    <div>
      {itemList.map((item) => (
        <GalleryItem
          key={item.id}
          updateGalleryItem={updateGalleryItem}
          item={item}
        />
      ))}
    </div>
  );
}
