import { useState } from "react";

const Aside = () => {
  const [value, setValue] = useState(0);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(0);

  // const handleChange = (value) => {
  //   console.log(value);
  //   setValue(value);
  //   setMaxValue(value);
  // };

  return (
    <>
      <div className="w-full">
        <div className="space-y-2">
          {/* Price Range */}
          <div className="bg-white rounded-md drop-shadow-sm">
            <div className="pt-5 px-5">
              <p className="text-xl">Price Range</p>
            </div>
            <div className="divider m-0 p-0"></div>
            <div className="pl-5 px-5 pb-5">
              <div className="space-y-3">
                <input
                  id="slider"
                  type="range"
                  min={0}
                  max={100}
                  value={value}
                  className="w-full h-2 rounded-lg cursor-pointer dark:accent-violet-600"
                  // onChange={()=>{handleChange(value)}}
                />
                <div>
                  <div className="grid grid-cols-2 gap-10">
                    <input
                      type="text"
                      className="border text-center"
                      value={minValue}
                    />
                    <input
                      type="text"
                      className="border text-center"
                      value={maxValue}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Brand Section */}
          <div className="bg-white rounded-md drop-shadow-sm">
            <div className="pt-5 px-5">
              <p className="text-xl">Brand Name</p>
            </div>
            <div className="divider m-0 p-0"></div>
            <ul className="pl-5 pb-5">
              <li>
                <input type="checkbox" /> Apple
              </li>
              <li>
                <input type="checkbox" /> Samsung
              </li>
              <li>
                <input type="checkbox" /> Xiaomi
              </li>
              <li>
                <input type="checkbox" /> Tecno
              </li>
              <li>
                <input type="checkbox" /> Adidas
              </li>
              <li>
                <input type="checkbox" /> Samsung
              </li>
              <li>
                <input type="checkbox" /> Nike
              </li>
            </ul>
          </div>

          {/* Category Section */}
          <div className="bg-white rounded-md drop-shadow-sm">
            <div className="pt-5 px-5">
              <p className="text-xl">Category</p>
            </div>
            <div className="divider m-0 p-0"></div>
            <ul className="pl-5 pb-5">
              <li>
                <input type="checkbox" /> Mobile
              </li>
              <li>
                <input type="checkbox" /> Watch
              </li>
              <li>
                <input type="checkbox" /> Sneaker
              </li>
              <li>
                <input type="checkbox" /> Laptop
              </li>
              <li>
                <input type="checkbox" /> Earphones
              </li>
              <li>
                <input type="checkbox" /> Earbuds
              </li>
              <li>
                <input type="checkbox" /> Cap
              </li>
              <li>
                <input type="checkbox" /> Bag
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Aside;
