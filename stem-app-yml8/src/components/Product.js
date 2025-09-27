function Product ({product: {title, price, description, category, image}}) {
  return (
    <div>
      <div style={{backgroundImage: `url(${image})`}}></div>
      <div>
        <h1>{title.substr(0, 50)}</h1>
        <h3>{category}</h3>
        <p>{price}

lt;/p>


        <div>{description.substr(0, 100)}</div>


      </div>


    </div>


  );


}


export default Product;



As you can see, the Product component just shows the product details. We haven't added any classes for styling at the moment.


Next, go to src/App.js and change the content to the following:


import "./App.css";
import Product from "./components/Product";
import products from "./data/products.json";

function App() {
  return (
    <div>
      <div>
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default App;

