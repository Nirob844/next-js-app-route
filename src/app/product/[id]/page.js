import ProductDetails from "@/components/Ui/ProductDetails";

const ProductDetailsPage = async ({ params }) => {
  const res = await fetch(`http://localhost:5000/watches/${params.id}`, {
    cache: "no-store",
  });
  const data = await res.json();
  return (
    <div>
      <ProductDetails product={data}></ProductDetails>
    </div>
  );
};

export default ProductDetailsPage;
