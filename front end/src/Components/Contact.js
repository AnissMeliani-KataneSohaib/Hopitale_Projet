import React, { useState } from "react";
import Footer from "./Footer";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useEffect } from "react"
export const Contact = () => {
  const [na, setNa] = useState("");
  const [da, setDa] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [com, setCom] = useState("");

  useEffect(()=>{
    document.title='App hospital-Contact'
  },[])


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

  const Commentaire = (e) => {
    const v = e.target.value;
    setCom(v);
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    margin: "50px",
    maxWidth: "1200px",
    margin: "auto",
    marginBottom: "150px",
  };

  const formStyle = {
    backgroundColor: "#f8f9fa",
    padding: "60px",
    boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.1)",
    marginBottom: "20px",
    marginTop: "200px",
    flex: "2",
    marginRight: "20px",
  };

  const mapStyle = {
    flex: "1.5",
    marginTop: "320px",
  };

  const inputStyle = {
    marginBottom: "15px",
  };

  const buttonStyle = {
    backgroundColor: "#334389",
    borderColor: "#334389",
    color: "#fff",
    fontWeight: "bold",
    width: "100%",
  };

  const headerStyle = {
    textAlign: "center",
    marginBottom: "20px",
  };
  
  const styleforvideo={
    width:' 100%',
    height: '100%',
    position: 'fixed',
    zIndex: '-1',
    objectFit: 'cover',
    filter: 'blur(8px)'
};

  return (
    <>
     <video className='videoTag' autoPlay loop muted style={styleforvideo}>
        <source src='./fvid/video.mp4' type='video/mp4' />
      </video>

      <div style={containerStyle}>
        <div style={formStyle}>
          <h2 style={headerStyle}>Contact Us</h2>
          <div className="mb-3" style={inputStyle}>
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="First Name"
              onChange={handleChangee}
            />
          </div>
          <div className="mb-3" style={inputStyle}>
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Last Name"
              onChange={prda}
            />
          </div>
          <div className="mb-3" style={inputStyle}>
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
              onChange={mail}
            />
          </div>
          <div className="mb-3" style={inputStyle}>
            <label className="form-label">Phone Number</label>
            <PhoneInput
              country={"us"}
              value={tel}
              onChange={Tel}
              inputClass="form-control" 
            />
          </div>

          <div className="mb-3" style={inputStyle}>
            <label htmlFor="comments" className="form-label">
              Comments/Questions
            </label>
            <textarea
              className="form-control"
              id="comments"
              rows="3"
              onChange={Commentaire}
            ></textarea>
          </div>
          <button
            onClick={() => console.log(na, da, email, tel, com)}
            className="btn btn-success"
            style={buttonStyle}
          >
            Send
          </button>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106376.56000876661!2d-7.669393223679275!3d33.572403231399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb06c1d84f310fd3!2sCasablanca!5e0!3m2!1sen!2sma!4v1708258598437!5m2!1sen!2sma"
          width="100%"
          height="450"
          style={mapStyle}
          allowFullScreen=""
          loading="lazy"
          title="Map"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Footer />
    </>
  );
};
