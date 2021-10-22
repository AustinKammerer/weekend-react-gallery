export default function GalleryItem({ item, updateGalleryItem }) {
  return (
    <div>
      <img src={item.path} />
      <p>{item.description}</p>
      <p>{item.likes} people like this</p>
      <button>Like</button>
    </div>
  );
}
