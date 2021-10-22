export default function GalleryList({ itemList }) {
  return (
    <div>
      {itemList.map((item) => (
        <img src={item.path} key={item.id} />
      ))}
    </div>
  );
}
