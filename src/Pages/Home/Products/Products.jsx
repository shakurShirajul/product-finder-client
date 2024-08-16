import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Product from "../Product/Product";

const Products = () => {
  const { data: products = [], reftech } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:5000/products");
      return response.data;
    },
  });
  console.log(products);
  return (
    <>
      <div className="grid grid-cols-3 gap-10">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};
export default Products;
