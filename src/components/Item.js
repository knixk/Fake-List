const Item = ({ name, image, cell, email }) => {
  return (
    <div className="item">
      <img alt={"avatar"} src={image}></img>

      <div className="info">
        <h2>{name}</h2>
        <p>{email}</p>
        <p>{cell}</p>
      </div>
    </div>
  );
};

export default Item;
