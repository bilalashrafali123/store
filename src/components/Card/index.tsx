import "./index.scss";

const Card = () => {
  return (
    <div className="card">
      <img src="/src/p1.jpg" alt="product-1" />
      <p className="card-text">
        Addidas New Hammer sole <br /> for sports person
      </p>
      <p className="money">
        $150{" "}
        <span>
          <del>$210</del>
        </span>
      </p>
      <div className="icons">
        <span>
          <i className="fa-solid fa-cart-shopping"></i>
        </span>
        <span>
          <i className="fa-solid fa-heart"></i>
        </span>
        <span>
          <i className="fa-solid fa-bookmark"></i>
        </span>
        <span>
          <i className="fa-solid fa-thumbs-up"></i>
        </span>
      </div>
    </div>
  );
};

export default Card;
