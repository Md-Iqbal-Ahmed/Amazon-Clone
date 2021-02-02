import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg"
          alt=""
        />
        <div className="home_row">
          <Product
            id="123458"
            title="Hanes mens Long Sleeve Beefy Henley Shirt Slate Heather X Large"
            price={9.97}
            rating={4}
            image="https://m.media-amazon.com/images/I/91YHIgoKb4L._AC_AA180_.jpg"
          />
          <Product
            id="164789"
            title="Xiaomi Redmi 9 EU 64Gb ROM 4Gb Ram Sunset Purple"
            price={189.48}
            rating={5}
            image="https://m.media-amazon.com/images/I/61TIUx9dzhL._AC_AA180_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="6874598"
            title="JBL FLIP 4 - Waterproof Portable Bluetooth Speaker - Black"
            price={79.95}
            rating={4}
            image="https://m.media-amazon.com/images/I/61d5F64UDpL._AC_AA180_.jpg"
          />
          <Product
            id="364897"
            title="Backpacks for Men,Extra Large 50L Travel Backpack"
            price={29.99}
            rating={2}
            image="https://m.media-amazon.com/images/I/81mXjWvDazL._AC_AA180_.jpg"
          />
          <Product
            id="886324"
            title="Magic Bullet Blender, Small, Silver, 11 Piece Set | 24 ounce "
            price={29.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/713VYm+wuGL._AC_AA180_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="377965"
            title="HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p) - Built-In Speakers and VESA Mounting - Height/Tilt Adjustment for Ergonomic Viewing - HDMI and DisplayPort - (1D0J9AA#ABA)"
            price={174.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/91fAU6mxFsL._AC_AA180_.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
