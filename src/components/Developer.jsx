import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDev } from "../redux/action/developerAction";

function Developer() {
  const dispatch = useDispatch();
  const { dev } = useSelector((state) => state.developer);

  useEffect(() => {
    dispatch(getDev());
  }, []);

  return (
    <div className="develover">
      <h2>Developer</h2>
      <div className="container-dev" >
        {dev.map((item) => {
          return (
            <div className="card mb-3" key={item.id} id={item.jurusan}>
              <div className="row g-0" id="rowDev">
                <div className="col-md-4">
                  <img
                    src={item.gambar}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body" id="card-body">
                    <h5 className="card-title">{item.nama}</h5>
                    <p className="card-text">{item.universitas}</p>
                    <p className="card-text">{item.jurusan}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Developer;
