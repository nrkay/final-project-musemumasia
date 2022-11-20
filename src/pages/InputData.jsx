import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBenda} from "../redux/action/dataBendaAction";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

// import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";

function InputData() {
  const dispatch = useDispatch();
  const [nama, setNama] = useState("");
  const [negara, setNegara] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [url, setUrl] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [gambar, setGambar] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBenda({nama, negara, deskripsi, url, tanggal, gambar}));
    setNama("");
    setNegara("");
    setDeskripsi("");
    setUrl("");
    setTanggal("");
    setGambar("");
    alert("berhasil menambahkan data")
  };

  return (
    <div className="tambah">
      <form className="formInput" onSubmit={handleSubmit}>
        <h2>ADD Data</h2>
        <label htmlFor="nama">Nama Benda:</label>
        <input
          type="text"
          id="nama"
          name="nama"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />
        <label htmlFor="negara">Negara:</label>
        <input
          type="text"
          id="negara"
          name="negara"
          value={negara}
          onChange={(e) => setNegara(e.target.value)}
        />
        <label htmlFor="deskripsi">Deskripsi:</label>
        <textarea
          name="deskripsi"
          id="deskripsi"
          cols="30"
          rows="10"
          onChange={(e) => setDeskripsi(e.target.value)}
          value={deskripsi}>
          Deskripsi
        </textarea>
        <label htmlFor="url">URL:</label>
        <input
          type="url"
          id="url"
          placeholder="https://www.penn.museum"
          pattern="https://.*"
          name="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <label htmlFor="tanggal">Tanggal Pemberian: </label>
        <input
          type="text"
          id="tanggal"
          name="tanggal"
          value={tanggal}
          onChange={(e) => setTanggal(e.target.value)}
        />
        <label htmlFor="formFile" className="form-label">
          Gambar dalam url:
        </label>
        <input
          type="url"
          id="gambar"
          placeholder="https://www.penn.museum"
          pattern="https://.*"
          name="url"
          value={gambar}
          onChange={(e) => setGambar(e.target.value)}
        />
        <button type="submit" className="btn btn-secondary mb-3">
          Submit
        </button>
      </form>
    </div>
  );
}

export default InputData;
