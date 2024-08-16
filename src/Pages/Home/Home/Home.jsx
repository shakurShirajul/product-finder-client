import Aside from "../../../Components/Aside";
import Navbar from "../../../Components/Navbar";
import SearchBar from "../../../Components/SearchBar";
import Products from "../Products/Products";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-5">
            <div className="flex-1">
              <Aside />
            </div>
            <div className="max-w-5xl">
              <div>
                <SearchBar />
              </div>
              <div>
                <Products />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
