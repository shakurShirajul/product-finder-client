import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";

const Aside = () => {
  const [value, setValue] = useState(0);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(9999);
  const [checkedBrand, setCheckedBrand] = useState([]);
  const [checkedCategory, setCheckedCategory] = useState([]);

  // const handleChange = (value) => {
  //   console.log(value);
  //   setValue(value);
  //   setMaxValue(value);
  // };

  const queryClient = useQueryClient();

  const handleBrandCheckboxChange = async (event) => {
    const { checked, value } = event.target;
    if (checked) {
      setCheckedBrand([...checkedBrand, value]);
    } else {
      setCheckedBrand(checkedBrand.filter((item) => item !== value));
    }
  };

  const handleCateogryCheckedBoxChange = (event) => {
    const { checked, value } = event.target;
    if (checked) {
      setCheckedCategory([...checkedCategory, value]);
    } else {
      setCheckedCategory(checkedCategory.filter((item) => item !== value));
    }
  };

  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/products?brandChecked=${checkedBrand}&categoryChecked=${checkedCategory}&minPrice=${minValue}&maxPrice=${maxValue}`
      )
      .then((response) => [
        queryClient.setQueryData(["products"], response.data),
      ]);
  }, [checkedBrand, checkedCategory, minValue, maxValue]);

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
                <div>
                  <div className="grid grid-cols-2 gap-10">
                    <span>
                      Min
                      <input
                        type="text"
                        className="border text-center max-w-20"
                        placeholder={minValue}
                        onChange={(event)=>{
                          setMinValue(event.target.value);
                        }}
                      />
                    </span>
                    <span>
                      Max
                      <input
                        type="text"
                        className="border text-center max-w-20"
                        placeholder={maxValue}
                        onChange={(event)=>{
                          setMaxValue(event.target.value);
                        }}
                      />
                    </span>
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
                <input
                  type="checkbox"
                  value="Apple"
                  onChange={handleBrandCheckboxChange}
                />
                <span> Apple</span>
              </li>
              <li>
                <input
                  type="checkbox"
                  value="Samsung"
                  onChange={handleBrandCheckboxChange}
                />
                <span> Samsung</span>
              </li>
              <li>
                <input
                  type="checkbox"
                  value="Xiaomi"
                  onChange={handleBrandCheckboxChange}
                />
                <span> Xiaomi</span>
              </li>
              <li>
                <input
                  type="checkbox"
                  value="Tecno"
                  onChange={handleBrandCheckboxChange}
                />
                <span> Tecno</span>
              </li>
              <li>
                <input
                  type="checkbox"
                  value="Adidas"
                  onChange={handleBrandCheckboxChange}
                />
                <span> Adidas</span>
              </li>
              <li>
                <input
                  type="checkbox"
                  value="Nike"
                  onChange={handleBrandCheckboxChange}
                />
                <span> Nike</span>
              </li>
              <li>
                <input
                  type="checkbox"
                  value="JBL"
                  onChange={handleBrandCheckboxChange}
                />
                <span> JBL</span>
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
                <input
                  type="checkbox"
                  value="Mobile"
                  onChange={handleCateogryCheckedBoxChange}
                />{" "}
                <span> Mobile</span>
              </li>
              <li>
                <input
                  type="checkbox"
                  value="Watch"
                  onChange={handleCateogryCheckedBoxChange}
                />{" "}
                <span> Watch</span>
              </li>
              <li>
                <input
                  type="checkbox"
                  value="Sneaker"
                  onChange={handleCateogryCheckedBoxChange}
                />{" "}
                <span> Sneaker</span>
              </li>
              <li>
                <input
                  type="checkbox"
                  value="Laptop"
                  onChange={handleCateogryCheckedBoxChange}
                />{" "}
                <span> Laptop</span>
              </li>
              <li>
                <input
                  type="checkbox"
                  value="Earphones"
                  onChange={handleCateogryCheckedBoxChange}
                />{" "}
                <span> Earphones</span>
              </li>
              <li>
                <input
                  type="checkbox"
                  value="Earbuds"
                  onChange={handleCateogryCheckedBoxChange}
                />{" "}
                <span> Earbuds</span>
              </li>
              <li>
                <input
                  type="checkbox"
                  value="Cap"
                  onChange={handleCateogryCheckedBoxChange}
                />{" "}
                <span> Cap</span>
              </li>
              <li>
                <input
                  type="checkbox"
                  value="Bag"
                  onChange={handleCateogryCheckedBoxChange}
                />{" "}
                <span> Bag</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Aside;
