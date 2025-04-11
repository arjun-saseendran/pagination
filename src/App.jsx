import React, { useEffect, useState } from "react";
import { ProductCard } from "./components/ProductCard";
import { PaginationBar } from "./components/PaginationBar";

export const App = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await fetch("https://dummyjson.com/products");
        const jsonData = await data.json();
        setProducts(jsonData?.products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, []);
  const PAGE_SIZE = 10;
  const totalProducts = products.length;
  const noOfPage = Math.ceil(totalProducts / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  

  return (
    <>
      <PaginationBar noOfPage={noOfPage} pageSize={PAGE_SIZE} totalProducts={totalProducts} setCurrentPage={setCurrentPage} currentPage={currentPage} start={start} end={end} />
      <div className="flex flex-wrap gap-2 p-5">
        {products.slice(start, end).map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            image={product.thumbnail}
          />
        ))}
      </div>
    </>
  );
};
