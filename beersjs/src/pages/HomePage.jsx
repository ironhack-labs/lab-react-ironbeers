import React from "react";
import { Link } from "react-router-dom";
import { HomeCard } from "../components/HomeCard";

let image_url_all =
  "http://cervecearte.com/wp-content/uploads/YH_Brea-Taps.jpg";
let image_url_random =
  "https://static.iris.net.co/semana/upload/images/2017/4/4/520979_1.jpg";
let image_url_new =
  "https://www.brewbound.com/wp-content/uploads/2018/11/Panther-cub.jpg";

let description = "¿Qué es Lorem Ipsum?Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas , las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum."

export const HomePage = () => {
  return (
    <div className="homePageLinks">
      <Link to="/beers" style={{ textDecoration: 'none' }}>
        <HomeCard image_url={image_url_all} name="All Beers" description={description} />
      </Link>
      <Link to="/randombeer" style={{ textDecoration: 'none' }}>
      <HomeCard image_url={image_url_random} name="Random Beer!" description={description} />
      </Link>
      <Link to="/new" style={{ textDecoration: 'none' }}>
      <HomeCard image_url={image_url_new} name="Add a new beer" description={description} />
      </Link>
    </div>
  );
};
