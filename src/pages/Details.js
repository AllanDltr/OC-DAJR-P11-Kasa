import React from "react";
import Slideshow from "../components/Slideshow";
import {Navigate, useParams} from "react-router-dom";
import Tag from "../components/Tag";
import Star from "../components/Star";
import "../styles/Details.css";
import "../styles/Collapse.css";
import { Collapse } from "../components/Collapse";
import { data as logementsArray } from "../datas/logements";

const Details = () => {
  const { id } = useParams();

  const dataLogement = logementsArray.find((logement) => logement.id === id);

  if (!dataLogement) return <Navigate to="/404" />

  const {
    id: logementId,
    pictures,
    title,
    location,
    tags,
    rating,
    host: { name: hostName, picture: hostPicture },
    description,
    equipments,
  } = dataLogement;

  const Rating = ({ rating }) => {
    return (
      <ul className="star">
        {Array.from(Array(5), (e, index) => {
          if (index < parseInt(rating)) {
            return (
              <div key={index} className="star--yes">
                <Star />
              </div>
            );
          } else {
            return (
              <div key={index} className="star--no">
                <Star />
              </div>
            );
          }
        })}
      </ul>
    );
  };

  return (
      <>
        <Slideshow key={logementId} pictures={pictures} />
        <div className="Card">
          <div className="Card__title">
            <h1>{title}</h1>
            <p>{location}</p>
            <Tag tags={tags} />
          </div>
          <div className="flexRowB">
            <div className="flexRow">
              <p className="wrap">{hostName}</p>
              <img src={hostPicture} alt="Host" className="picture" />
            </div>
            <Rating rating={rating} />
          </div>
        </div>
        <div className="flex">
          <Collapse key={id + 2} datas={description} title="Description" />
          <Collapse key={id + 3} datas={equipments} title="Equipements" />
        </div>
      </>
  );
};

export default Details;