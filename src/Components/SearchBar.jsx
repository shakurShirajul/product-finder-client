const SearchBar = () => {
  return (
    <>
      <div>
        <div className="bg-white p-2 rounded-xl mb-2 drop-shadow-sm">
          <div className="flex gap-5 justify-end">
            <div className="flex gap-2">
              <label className="border px-5 rounded-xl flex items-center gap-2">
                <input type="text" className="focus:outline-none" placeholder="Search" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
              <button className="btn btn-primary text-white font-bold">SEARCH</button>
            </div>
            <div>
              <label className="flex justify-center items-center">
                <span>Sort By:</span>
                <select className="select border">
                  <option disabled selected>
                    Default
                  </option>
                  <option>Java</option>
                  <option>Go</option>
                  <option>C</option>
                  <option>C#</option>
                  <option>C++</option>
                  <option>Rust</option>
                  <option>JavaScript</option>
                  <option>Python</option>
                </select>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SearchBar;
