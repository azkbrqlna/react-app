/* eslint-disable react/prop-types */
import Button from "../elements/Button";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-sm bg-white border border-gray-300 rounded-lg shadow-lg">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image } = props;
  return (
    <a href="#">
      <img
        src={image}
        alt="product"
        className="p-8 rounded-t-lg w-full h-64 object-cover"
      />
    </a>
  );
};
const Body = (props) => {
  const { children, title } = props;
  return (
    <div className="px-5 pb-5">
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900">
          {title}
        </h5>
        <p className="text-sm text-gray-700 mt-2">{children}</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { price } = props;
  return (
    <div className="flex items-center justify-between px-5 py-4 border-t border-gray-200">
      <span className="text-lg font-semibold text-gray-900">{price}</span>
      <Button
        text="Add to cart"
        classname="bg-blue-600 text-white px-4 py-2 rounded"
      />
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
