import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBenda } from "../redux/action/dataBendaAction";
import Item from "./Item";

function Carousel() {
  const dispatch = useDispatch();
  const { benda } = useSelector((state) => state.benda);

  useEffect(() => {
    dispatch(getBenda());
  }, []);

  return (
    <div className="carousel2">
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
              <div className="row" id="row1">
                {benda.splice(0, 4).map((item) => (
                  <div className="col" key={item.id}>
                    <Item
                      id={item.id}
                      img={item.img}
                      name={item.object_name}
                      provinsi={item.provenience}
                      url={item.url}
                      // desc={item.description}
                    />
                  </div>
                ))}
              </div>
            </div>
          <div className="carousel-item" data-bs-interval="2000">
   
              <div className="row" id="row2">
                {benda.splice(0, 4).map((item) => (
                  <div className="col">
                    <Item
                      id={item.id}
                      img={item.img}
                      name={item.object_name}
                      provinsi={item.provenience}
                      url={item.url}
                      // desc={item.description}
                    />
                  </div>
                ))}
              </div>
            </div>
  
          <div className="carousel-item">
            {/* <div className="container"> */}
              <div className="row" id="row3">
                {benda.splice(0, 4).map((item) => (
                  <div className="col">
                    <Item
                      id={item.id}
                      img={item.img}
                      name={item.object_name}
                      provinsi={item.provenience}
                      url={item.url}
                      // desc={item.description}
                    />
                  </div>
                ))}
              </div>
            </div>
          {/* </div> */}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* {benda.splice(0, 4).map((item) => (
                <div className="col">
                  <Item
                    id={item.id}
                    img={item.img}
                    name={item.object_name}
                    provinsi={item.provenience}
                    url={item.url}
                    // desc={item.description}
                  /> 
                </div>
              ))}*/}
    </div>
  );
}

export default Carousel;
