import React from "react";
import ReactDOM from "react-dom/client";
import { restaurantsData } from "./data";

const Title = () => (
  <a href="/">
    <img
      className="logo"
      src="https://play-lh.googleusercontent.com/A8jF58KO1y2uHPBUaaHbs9zSvPHoS1FrMdrg8jooV9ftDidkOhnKNWacfPhjKae1IA"
      alt="Logo" />
  </a>
);

const HeaderComponent = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const RestrauntCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating
}) => {
  // const {restraunt} = props;
  // const  = restraunt;
  return (
    <div className="card">
      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{avgRating} Stars</h3>
    </div>
  )
}

const BodyComponent = () => {
  return (
    <div className="restaurant-list">
      {
        restaurantsData.map((restraunt) => {
          return <RestrauntCard {...restraunt.info} key={restraunt.info.id}/>
        })
      }
    </div>
  )
}

const FooterComponent = () => {
  return (
    <h2>Footer</h2>
  )
}

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />)