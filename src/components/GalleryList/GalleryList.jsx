import GalleryItem from "../GalleryItem/GalleryItem.jsx";

export default function GalleryList({
  itemList,
  updateGalleryItem,
  deleteGalleryItem,
}) {
  // loop over the itemList to generate a component for each item
  // the map callback's 'item' argument is passed to the component as a prop
  return (
    <div>
      {itemList.map((item) => (
        <GalleryItem
          key={item.id}
          item={item}
          updateGalleryItem={updateGalleryItem}
          deleteGalleryItem={deleteGalleryItem}
        />
      ))}
    </div>
  );
}
