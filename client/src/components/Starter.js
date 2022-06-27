import React from "react";
import Carousel from "react-bootstrap/Carousel";
import poster1 from "../assets/poster1.png";
import poster2 from "../assets/poster2.png";
import poster3 from "../assets/poster3.png";
import Chart from "../components/Chart";
import Impact from "./Impact";
function Starter() {
    let obj={
        width:"400px",
        padding: "5px 100px ",
        height: "630px",
      }
  return (
    <div>
      <Carousel>
        <Carousel.Item>
        <img style = {obj} className="d-block w-100" src={poster1} alt="Second slide" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style = {obj} className="d-block w-100" src={poster3} alt="Second slide" />

          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style = {obj} className="d-block w-100" src={poster2} alt="Third slide" />

          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    <br/>
    <br/>
    <Chart/>
    <Impact/>

    </div>
  );
}

export default Starter;
