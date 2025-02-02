function ProductForm() {
  let [pName, updateName] = useState("");
  let [pPrice, updatePrice] = useState("");
  let [pDescription, updateDescription] = useState("");
  let [pAvailable, updateAvailable] = useState("");
  let [pImageUrl, updateImageUrl] = useState("");

  function nameInputHandler(event) {
    updateName(event.target.value);
  }

  function priceInputHandler(event) {
    updatePrice(event.target.value);
  }

  function descriptionInputHandler(event) {
    updateDescription(event.target.value);
  }

  function availabilityInputHandler(event) {
    updateAvailable(event.target.value);
  }

  function imageInputHandler(event) {
    updateImageUrl(event.target.value);
  }

  return (
    <form className="row g-3">
      <div className="col-md-6">
        <label htmlFor="name">Product Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Product Name"
          onChange={nameInputHandler}
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="price">Product Price</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          className="form-control"
          id="price"
          placeholder="Product Price"
          onChange={priceInputHandler}
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Product Description</label>
        <input
          type="text"
          className="form-control"
          id="description"
          placeholder="Product Description"
          onChange={descriptionInputHandler}
        />
      </div>

      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="isAvailable"
          onChange={availabilityInputHandler}
        />
        <label className="form-check-label" htmlFor="isAvailable">
          Is product available in stock?
        </label>
      </div>

      <div className="form-group">
        <label htmlFor="select-image">Select product image</label>
        <input
          type="file"
          className="form-control"
          id="select-image"
          onChange={imageInputHandler}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Add Product
      </button>
    </form>
  );
}

export default ProductForm;
