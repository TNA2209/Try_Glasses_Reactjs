import React, { Component } from "react";
import brgImg from "../assets/glassesImage/Bgr.png";
import model from "../assets/glassesImage/model.jpg";
import DataGlasses from "../Data/dataGlasses.json";
export default class BaiTapThuKinh extends Component {
  
    state = {
    glassesCurrent: {
        id: 1,
        price: 30,
        name: "GUCCI G8850U",
        url: "./glassesImage/v1.png",
        desc: "Light pink square lenses define these sunglasses, ending with another of pearl effect tip.",
    },
  };

  renderGlassesList = () => {
    return DataGlasses.map((glassesItem, index) => {
      return (
        <img
          onClick={() => {
            this.changeGlasses(glassesItem);
          }}
          className="ml-2 p-2 border border-width-1"
          style={{ width: "110px", cursor: "pointer" }}
          key={index}
          src={glassesItem.url}
          alt={`Glasses ${index}`}
        />
      );
    });
  };

  changeGlasses = (newGlasses) => {
      this.setState({
        glassesCurrent: newGlasses
      });
  }
  
  render() {
    const divStyle = {
      backgroundImage: `url(${brgImg})`,
      minHeight: "100%",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh",
    };

    const styleGlasses = {
      width: "150px",
      top: "75px",
      right: "75px",
      opacity: "0.8",
    };
    const infoGlasses = {
      width: "250px",
      top: "200px",
      left: "270px",
      paddingLeft: "15px",
      backgroundColor: "rgba(255,127,0,.5)",
      textAlign: "left",
      height: "105px",
      fontSize: "20px",
    };
    return (
      <div style={divStyle}>
        <div style={{ backgroundColor: "rgb(0,0,0,.5)", minHeight: "100%" }}>
          <h3
            style={{ backgroundColor: "rgba(148,0,211,.1" }}
            className="text-center text-light p-5"
          >
            TRY GLASSES APP ONLINE
          </h3>

          <div className="container">
            <div className="row mt-5 text-center">
              <div className="col-6">
                <div className="position-relative">
                  <img
                    className="position-absolute"
                    style={{ width: "250px" }}
                    src={model}
                    alt="model"
                  />
                  <img
                    style={styleGlasses}
                    className="position-absolute"
                    src={this.state.glassesCurrent.url}
                    alt="v1"
                  />
                  <div
                    style={infoGlasses}
                    className="position-relative font-weight-bold"
                  >
                    <p className="text-primary">
                      {this.state.glassesCurrent.name}
                    </p>
                    <p style={{ fontSize: "12px" }}>
                      {this.state.glassesCurrent.desc}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <img style={{ width: "250px" }} src={model} alt="model" />
              </div>
            </div>
            {/* List glass */}
            <div className="bg-light mt-5 d-flex justify-content-center p-5">
              {this.renderGlassesList()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
