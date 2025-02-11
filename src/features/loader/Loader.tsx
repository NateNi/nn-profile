import React, { useEffect } from "react";
import './loader.css';

function Loader() {

    const [showElement, setShowElement] = React.useState(true);
    useEffect(() => {
        setTimeout(function () {
        setShowElement(false);
        }, 5000);
    }, []);

  return (
    <div>
    {showElement ? (
        <div className="loaderContainer">
        <div className="wrapper">
          <div className="loader">
          </div>
          <div className="activeLoaderContainer">
              <div className="keyboardLoader"></div>
              <div className="handLeft"></div>
              <div className="handRight"></div>
          </div>
        </div>
      </div>
    ) : (
        <div></div>
      )}
    </div>
  );
}

export default Loader;
