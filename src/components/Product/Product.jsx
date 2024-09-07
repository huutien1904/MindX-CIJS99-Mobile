import React from "react";

const Product = (props) => {
  const { product, handleSelectProduct } = props;
  const { thumbnail, title, price, id } = product;

  const handleClickViewDetailProduct = () => {
    handleSelectProduct(id);
  };

  const handleClickAddToCart = () => {
    handleSelectProduct(id);
  };

  return (
    <div className="card">
      <img src={thumbnail} className="card-img-top p-2" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{price}</p>
        <div className="d-flex align-items-center gap-2">
          <button className="btn btn-success text-nowrap" onClick={handleClickViewDetailProduct}>
            Xem chi tiết
          </button>
          <button className="btn btn-danger text-nowrap" onClick={handleClickAddToCart}>
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
