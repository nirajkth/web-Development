import Button from "./Button";

function ProductDetails(props) {
  let badgeClass = "badge-margin-left-240 badge";
  badgeClass += props.isAvailable ? " bg-success" : " bg-danger";
  let productCount = 0;

  function displayFormattedProductCount() {
    return productCount > 0 ? productCount : "Zero";
  }

  let incrementProductCount = function () {
    ++productCount;
    console.log(productCount);
  };

  let decrementProductCount = function () {
    if (productCount > 0) --productCount;
    console.log(productCount);
  };

  return (
    <div className="d-flex align-items-center justify-content-between mt-1">
      <h6 className="font-weight-bold my-2" style={{ "margin-right": 30 }}>
        ${props.price}
      </h6>
      <Button eventHandler={decrementProductCount}>-</Button>
      <span style={{ padding: "8px 14px", "font-size": 13 }}>
        {displayFormattedProductCount()}
      </span>
      <Button eventHandler={incrementProductCount}>+</Button>
      <span className={badgeClass}>
        {props.isAvailable ? "Available" : "Unavailable"}
      </span>
    </div>
  );
}

export default ProductDetails;
