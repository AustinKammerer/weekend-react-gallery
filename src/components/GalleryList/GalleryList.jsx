import GalleryItem from "../GalleryItem/GalleryItem.jsx";

export default function GalleryList({ itemList, updateGalleryItem }) {
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
