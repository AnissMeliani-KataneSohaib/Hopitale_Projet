import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import React, { useState } from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { useEffect } from "react";
// import PhoneInput from "react-phone-input-2";
import Footer from "./Footer";


export default function Recrutement() {
  const [pdfFile, setPDFFile] = useState(null);
  const [viewPdf, setViewPdf] = useState(null);
  const [na, setNa] = useState("");
  const [da, setDa] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");

  useEffect(() => {
    document.title = "App hospital-Recrutement";
  }, []);

  const fileType = ["application/pdf"];

  const handleChange = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && fileType.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onload = (e) => {
          setPDFFile(e.target.result);
        };
      } else {
        setPDFFile(null);
      }
    } else {
      console.log("Please select a PDF");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pdfFile !== null) {
      setViewPdf(pdfFile);
    } else {
      setViewPdf(null);
    }
  };

  const newPlugin = defaultLayoutPlugin();

  const handleChangee = (e) => {
    const value = e.target.value;
    setNa(value);
  };
  const prda = (e) => {
    const v = e.target.value;
    setDa(v);
  };

  const mail = (e) => {
    const value = e.target.value;
    setEmail(value);
  };
  const Tel = (e) => {
    const v = e.target.value;
    setTel(v);
  };

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Lilita+One&display=swap" rel="stylesheet" />

      <div className="container-fluid" style={{ backgroundColor: "#f8f9fa", padding: "200px 0", position: "relative" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <h1 className="text-center" style={{ color: 'rgb(51, 67, 137)', fontFamily: "Lilita One", fontWeight: '400px', fontStyle: 'normal' }}>REJOIGNEZ DE NOTRE ÉQUIPE!</h1>
              <form onSubmit={handleSubmit} style={{ backgroundColor: "white", padding: "20px", borderRadius: "10px" }}>
                <div className="mb-3">
                  <label htmlFor="firstName" className="form-label">
                    Prénom
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="Prénom"
                    onChange={handleChangee}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label">
                    Nom de famille
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder="Nom de famille"
                    onChange={prda}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Adresse Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"
                    onChange={mail}
                  />
                </div>

                <div className="mb-3" >
                  <label htmlFor="lastName" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id=" PhoneNumber"
                    placeholder="+212 "
                    onChange={Tel}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="file"
                    className="form-control"
                    onChange={handleChange}
                  />
                </div>
                <div className="pdf-container mt-3">
                  <h3>View PDF</h3>
                  <div className="pdf-viewer">
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                      {viewPdf ? (
                        <Viewer fileUrl={viewPdf} plugins={[newPlugin]} />
                      ) : (
                        <div>No PDF</div>
                      )}
                    </Worker>
                  </div>
                </div>

                <button type="submit" className="btn btn-success mt-3" style={{ width: "100%" }}>
                  View PDF
                </button>

                <div className="text-center mt-3">
                  <button
                    onClick={() => console.log(na, da, email, tel)}
                    type="button"
                    className="btn btn-primary"
                    style={{ backgroundColor: 'rgb(51, 67, 137)', width: "100%" }}
                  >
                    submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />

   
    </>
  );
}
