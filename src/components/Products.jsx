import React from "react";
import Product from "./Product";

const Products = () => {
  const product = [
    {
      tittle: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
    //   live: true,
    //   case: fasle,
    },
    {
      tittle: "TTR",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
    //   live: true,
    //   case: fasle,
    },
    {
      tittle: "YIR 2022",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
    //   live: true,
    //   case: fasle,
    },
    {
      tittle: "YAHOO!",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
    //   live: true,
    //   case: fasle,
    },
  ];

  return (
    <div>
      {product.map((elem, index) => (
        <Product elem={elem} />
      ))}
    </div>
  );
};

export default Products;
