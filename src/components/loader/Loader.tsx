import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import "./loader.css";

const Loader: React.FC = () => {
  const dispatch = useDispatch();
  const showElement = useSelector((state: RootState) => state.loader.visible);

  // useEffect(() => {
  //   dispatch(showLoader());
  //   const timer = setTimeout(() => {
  //     dispatch(hideLoader());
  //   }, 5000);
  //   return () => clearTimeout(timer);
  // }, [dispatch]);

  return (
    <div>
      {showElement ? (
        <div className="loaderContainer">
          <div className="wrapper">
            <div className="loader"></div>
            <div className="activeLoaderContainer">
              <div className="keyboardLoader"></div>
              <div className="handLeft"></div>
              <div className="handRight"></div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Loader;