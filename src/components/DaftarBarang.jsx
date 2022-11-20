import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBenda } from "../redux/action/dataBendaAction";
import Item from "./Item";
import { Link} from "react-router-dom";

function DaftarBarang() {
  const dispatch = useDispatch();
  const { benda } = useSelector((state) => state.benda);
  const [data, setData] = useState({});
  const [negara, setNegara] = useState("");
  const [sort, setSort] = useState("all");

  const handleSubmit = (e) => {
    e.preventDefault();
    setData(negara);
    setNegara("");
    setSort(negara);
  };

  useEffect(() => {
    dispatch(getBenda());
  }, []);

  const addData = () => {};

  return (
    <div className="museum">
      <div className="inputData">
        <Link to={"inputdata"} className="nav-link">
          <button onClick={addData()}>Add Data+</button>
        </Link>
        <form className="d-flex" id="form" onSubmit={handleSubmit}>
          <input
            className="form-control me-2"
            id="cari"
            type="search"
            placeholder="Diawali huruf kapital..."
            aria-label="Search"
            value={negara}
            onChange={(e) => setNegara(e.target.value)}
          />
          <button className="btn btn-outline-secondary" type="submit">
            Search
          </button>
        </form>
      </div>
      <div className="button_negara">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => setSort("all")}>
          All
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => setSort("burma")}>
          Burma
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => setSort("china")}>
          China
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => setSort("india")}>
          India
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => setSort("indonesia")}>
          Indonesia
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => setSort("japan")}>
          Japan
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => setSort("korea")}>
          Korea
        </button>
      </div>

      <div className="text_negara"></div>
      <div className="container-dev" id="daftarBarang">
        {benda.length > 0 && sort === data
          ? benda.map((item) => {
              if (
                item.provenience.includes(data) ||
                item.object_name.includes(data)
              ) {
                // console.log(item.provenience.includes("Burma"));
                return (
                  <Item
                    id={item.id}
                    img={item.img}
                    name={item.object_name}
                    provinsi={item.provenience}
                    url={item.url}
                    desc={item.accession_credit_line}
                  />
                );
              }
            })
          : null}

        {benda.length > 0 && sort === "all"
          ? benda.map((item) => {
              // console.log(item.provenience.includes("Burma"));
              return (
                <Item
                  id={item.id}
                  img={item.img}
                  name={item.object_name}
                  provinsi={item.provenience}
                  url={item.url}
                  desc={item.accession_credit_line}
                />
              );
            })
          : null}

        {benda.length > 0 && sort === "burma"
          ? benda.map((item) => {
              if (item.provenience.includes("Burma")) {
                // console.log(item.provenience.includes("Burma"));
                return (
                  <Item
                    id={item.id}
                    img={item.img}
                    name={item.object_name}
                    provinsi={item.provenience}
                    url={item.url}
                    desc={item.accession_credit_line}
                  />
                );
              }
            })
          : null}

        {benda.length > 0 && sort === "china"
          ? benda.map((item) => {
              if (item.provenience.includes("China")) {
                // console.log(item.provenience.includes("China"));
                return (
                  <Item
                    id={item.id}
                    img={item.img}
                    name={item.object_name}
                    provinsi={item.provenience}
                    url={item.url}
                    desc={item.accession_credit_line}
                  />
                );
              }
            })
          : null}

        {benda.length > 0 && sort === "india"
          ? benda.map((item) => {
              if (item.provenience.includes("India")) {
                // console.log(item.provenience.includes("India"));
                return (
                  <Item
                    id={item.id}
                    img={item.img}
                    name={item.object_name}
                    provinsi={item.provenience}
                    url={item.url}
                    desc={item.accession_credit_line}
                  />
                );
              }
            })
          : null}

        {benda.length > 0 && sort === "indonesia"
          ? benda.map((item) => {
              if (item.provenience.includes("Indonesia")) {
                // console.log(item.provenience.includes("Burma"));
                return (
                  <Item
                    id={item.id}
                    img={item.img}
                    name={item.object_name}
                    provinsi={item.provenience}
                    url={item.url}
                    desc={item.accession_credit_line}
                  />
                );
              }
            })
          : null}

        {benda.length > 0 && sort === "japan"
          ? benda.map((item) => {
              if (item.provenience.includes("Japan")) {
                // console.log(item.provenience.includes("Burma"));
                return (
                  <Item
                    id={item.id}
                    img={item.img}
                    name={item.object_name}
                    provinsi={item.provenience}
                    url={item.url}
                    desc={item.accession_credit_line}
                  />
                );
              }
            })
          : null}

        {benda.length > 0 && sort === "korea"
          ? benda.map((item) => {
              if (item.provenience.includes("Korea")) {
                // console.log(item.provenience.includes("Burma"));
                return (
                  <Item
                    id={item.id}
                    img={item.img}
                    name={item.object_name}
                    provinsi={item.provenience}
                    url={item.url}
                    desc={item.accession_credit_line}
                  />
                );
              }
            })
          : null}
      </div>
    </div>
  );
}

export default DaftarBarang;
