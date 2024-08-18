import Products from "./Products";

const products = [
  {
    pID: 1,
    pName: "Fresh Milk",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
    isAvailable: true,
    image: "images/fresh-milk.png",
    price: 12,
  },
  {
    pID: 2,
    pName: "Cottage Cheese",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
    isAvailable: false,
    image: "images/cottage-cheese.png",
    price: 10,
  },
  {
    pID: 3,
    pName: "Brocoli",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
    isAvailable: true,
    image: "images/brocoli.png",
    price: 15,
  },
  {
    pID: 4,
    pName: "oranges",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
    isAvailable: true,
    image: "images/oranges.png",
    price: 20,
  },
  {
    pID: 5,
    pName: "Olive oil",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
    isAvailable: false,
    image: "images/olive-oil.png",
    price: 14,
  },
];

function ProductList() {
  return (
    <div className="row">
      <div className="col-lg-8 mx-auto">
        <ul className="list-group shadow">
          <Products
            id={products[0].pID}
            name={products[0].pName}
            description={products[0].desc}
            isAvailable={products[0].isAvailable}
            price={products[0].price}
            imageUrl={products[0].image}
          />
          <Products
            id={products[1].pID}
            name={products[1].pName}
            description={products[1].desc}
            isAvailable={products[1].isAvailable}
            price={products[1].price}
            imageUrl={products[1].image}
          />
          <Products
            id={products[2].pID}
            name={products[2].pName}
            description={products[2].desc}
            isAvailable={products[2].isAvailable}
            price={products[2].price}
            imageUrl={products[2].image}
          />
          <Products
            id={products[3].pID}
            name={products[3].pName}
            description={products[3].desc}
            isAvailable={products[3].isAvailable}
            price={products[3].price}
            imageUrl={products[3].image}
          />
          <Products
            id={products[4].pID}
            name={products[4].pName}
            description={products[4].desc}
            isAvailable={products[4].isAvailable}
            price={products[4].price}
            imageUrl={products[4].image}
          />
        </ul>
      </div>
    </div>
  );
}

export default ProductList;
