import React from "react";
import logo from "../../assets/logo.png";
import "./Register.css";

const Register = () => {
  return (
    <section
      style={{
        padding: "120px 0 80px 0",
        width: "100%",
        marginTop: "50px",
      }}
    >
      <div
        className="container"
        style={{
          width: "100%",
          padding: "0px 35px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginRight: "-15px",
            marginLeft: "-15px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: "0 0 100%", maxWidth: "100%" }}>
            <div className="cardWrapper">
              <div
                className="imgWrapper"
                style={{
                  position: "relative",
                  top: "-150px",
                  height: "0",
                  marginBottom: "44px",
                }}
              >
                <img
                  src={logo}
                  alt="logo"
                  style={{
                    width: "150px",
                    margin: "2em auto",
                    borderRadius: "50%",
                  }}
                />
              </div>
              <div
                className="text-center pb-4"
                style={{
                  color: "#fff",
                  marginBottom: "16px !important",
                  textAlign: "center",
                }}
              >
                <h4 style={{ fontSize: "1.5rem" }}>ElectroInfinity Club</h4>
                <p className="para-styles" style={{ fontSize: "1.25rem" }}>
                  Let's come together to build a better tomorrow🚀
                </p>
              </div>

              {/*Club Register Link*/}
              <a
                className="club-reg-link"
                href="https://forms.gle/fjxAKbc9vYUsCPHz6"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join the Club
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
