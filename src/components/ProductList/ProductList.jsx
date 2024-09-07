import React from "react";
import Product from "../Product/Product";

// Danh sách objects -> Danh sách nhưng cái mảng Component
const ProductList = (props) => {
  const { products = [], handleSelectProduct, cart } = props;

  // Phải có unique key cho child element
  // khi dùng map
  const listProduct =
    products &&
    products.map((product) => <Product product={product} handleSelectProduct={handleSelectProduct} key={product.id} />);

  return (
    <>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Giỏ hàng {cart.length}
      </button>
      <div className="d-flex align-items-center justify-content-center gap-4 pt-5">{listProduct}</div>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Thông tin giỏ hàng
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {cart.map((product, index) => {
                return (
                  <ul style={{ backgroundColor: "gray" }} key={index}>
                    <li>Tên SP : {product.title}</li>
                    <li>
                      <img src={product.thumbnail} alt="" width={50} />
                    </li>
                    <li>Số Lương : 1</li>
                    <li>Giá : 10005000</li>
                    <li>Thánh tiền : 50025000</li>
                  </ul>
                );
              })}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
