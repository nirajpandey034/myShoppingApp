import React from "react";
import ProductCard from "./ProductCard";

import "../Styles/ProductContainer.css";
import "../Styles/SiteHeader.css";

//data JSON file
import { ProductData } from "../ProductData";

function Home() {
  return (
    <div>
      <div className="product-container">
        {ProductData.map((prod) => {
          return (
            <ProductCard
              key={prod.id}
              path={prod.path}
              altText={prod.altText}
              title={prod.title}
              price={prod.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
