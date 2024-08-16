import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <div className="bg-[#f2f4f8] font-roboto">
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default Root;
