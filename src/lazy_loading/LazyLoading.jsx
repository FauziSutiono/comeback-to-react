import { lazy, Suspense } from "react";

export const LazyLoading = () => {
  const ProductList = lazy(() => import("./Output"));
  return (
    <>
      <h1>Welcome to the Store</h1>
      <Suspense fallback={<div>Loading Products...</div>}>
        <ProductList />
      </Suspense>
    </>
  );
};
