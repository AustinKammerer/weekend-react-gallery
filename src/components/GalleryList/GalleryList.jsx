import GalleryItem from "../GalleryItem/GalleryItem.jsx";
import Box from "@mui/material/Box";

export default function GalleryList({
  itemList,
  updateGalleryItem,
  deleteGalleryItem,
}) {
  // loop over the itemList to generate a component for each item
  // the map callback's 'item' argument is passed to the component as a prop
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {itemList.map((item) => (
        <GalleryItem
          key={item.id}
          item={item}
          updateGalleryItem={updateGalleryItem}
          deleteGalleryItem={deleteGalleryItem}
        />
      ))}
    </Box>
  );
}
