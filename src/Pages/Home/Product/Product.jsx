const Product = ({ product }) => {
  return (
    <>
      <div>
        <div className="">
          <div className="card card-compact  bg-base-100 border hover:shadow-lg">
            <figure className="p-7">
              <img
                src={product.image}
                alt=""
                className="h-60 w-full rounded-md"
              />
            </figure>
            <div className="card-body overflow-hidden">
              <h2 className="card-title capitalize line-clamp-1">
                {product.name}
              </h2>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-4xl font-bold text-success">
                    <span className="text-5xl font-bold ">$ </span>
                    {product.price}
                  </p>
                </div>
                <div className="">
                  <button
                    // onClick={handleAddToCart}
                    className="bg-gray-400 hover:bg-primary rounded-full p-2"
                  >
                    {/* <MdAddShoppingCart className="text-4xl text-white" /> */}
                  </button>
                </div>
              </div>
            </div>
            <p>{}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Product;
