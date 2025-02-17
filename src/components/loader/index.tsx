import React, { FC } from "react";
import { useSelector } from "react-redux";
import { selectLoaderVisibility } from "../../redux/selectors/loaderSelector";
import { RootState } from "../../redux/store";
import "./loader.css";

export const Loader: FC = () => {
  const loaderVisibility = useSelector(selectLoaderVisibility);

  return (
    <div>
      {loaderVisibility ? (
        <div className="loaderContainer">
          <div className="wrapper">
            <div className="loader"></div>
            <div className="activeLoaderContainer">
              <div className="keyboardContainer">
                <div className="keyboardLoader"/>
              </div>
              <div className="handContainer">
                <div className="handLeft" />
                <div className="handRight" />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
