/* eslint-disable react/jsx-key */
import CardProduct from "../components/fragments/CardProduct";

const products = [
  {
    id: 1,
    name: "Sepatu Coklat",
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit beatae
          magnam repellendus voluptates! Nulla necessitatibus architecto,
          delectus animi minus vitae impedit rem rerum officia modi, odio enim
          deleniti, eum recusandae!`,
    price: "Rp. 100.000",
    image: "/images/shoes-1.jpg",
  },
  {
    id: 2,
    name: "Sepatu Lama",
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit beatae
          magnam repellendus voluptates! Nulla necessitatibus architecto,
          `,
    price: "Rp. 800.000",
    image: "/images/shoes-1.jpg",
  },
];
const ProductsPage = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center m-5 items-stretch">
      {products.map((product) => (
        <CardProduct key={product.id}>
          <CardProduct.Header image={product.image} />
          <CardProduct.Body title={product.name}>
            {" "}
            {product.desc}
          </CardProduct.Body>
          <CardProduct.Footer price={product.price} />
        </CardProduct>
      ))}
    </div>
  );
};

export default ProductsPage;
