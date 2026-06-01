import React from "react";
import { Carousel } from "react-bootstrap"; // Impor Carousel dari react-bootstrap
import Button from 'react-bootstrap/Button';
import "../styles/SlideGambar.css";

function SlideGambar() {
  return (
    <>
    <Carousel>
      <Carousel.Item>
        <img
          className="gambar-1"
          src="https://cdn.pixabay.com/photo/2014/10/07/13/48/mountain-477832_1280.jpg"
          alt="First slide"
          />
          <div className="slide-text">TOUR JAPAN</div>
          <div className="slide-text-2">Visiting japan is an incredible experience that offers a mix of<br></br>tradional culture and modern innovations</div>
         <Button className="button-view-more" type="submit">View More</Button>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="gambar-2"
          src="https://cdn.pixabay.com/photo/2020/07/23/01/16/heritage-5430081_1280.jpg"
          alt="Second slide"
          />
          <div className="slide-text">TOUR JAPAN</div>
          <div className="slide-text-2">Visiting japan is an incredible experience that offers a mix of<br></br>tradional culture and modern innovations</div>
           <Button className="button-view-more" type="submit">View More</Button>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="gambar-3"
          src="https://cdn.pixabay.com/photo/2014/09/09/14/20/city-440102_960_720.jpg"
          alt="Third slide"
          />
          <div className="slide-text">TOUR JAPAN</div>
          <div className="slide-text-2">Visiting japan is an incredible experience that offers a mix of<br></br>tradional culture and modern innovations</div>
           <Button className="button-view-more" type="submit">View More</Button>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
          </>
  );
}

export default SlideGambar;
