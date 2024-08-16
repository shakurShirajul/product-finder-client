const Aside = () => {
  return (
    <>
      <div className="w-full">
        <div className="space-y-2">
          <div className="bg-white p-2 rounded-md drop-shadow-sm">
            <p className="text-xl">Price Range</p>
            <div>
              <div>
                <input
                  type="range"
                  min={0}
                  max="100"
                  value="40"
                  className="range range-xs"
                />
              </div>
            </div>
          </div>
          <div className="bg-white p-2 rounded-md drop-shadow-sm">
            <p className="text-xl">Brand Name</p>
            <ul>
              <li>Apple</li>
              <li>Samsung</li>
              <li>Xiaomi</li>
              <li>Tecno</li>
              <li>Adidas</li>
              <li>Samsung</li>
              <li>Nike</li>
            </ul>
          </div>
          <div className="bg-white p-2 rounded-md drop-shadow-sm">
            <p className="text-xl">Category</p>
            <ul>
              <li>Mobile</li>
              <li>Watch</li>
              <li>Sneaker</li>
              <li>Laptop</li>
              <li>Earphones</li>
              <li>Earbuds</li>
              <li>Cap</li>
              <li>Bag</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Aside;
