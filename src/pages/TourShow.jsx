import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import TourModel from "../models/TourModel";

function TourShow(props) {
  const { id } = useParams();
  const [tour, setTour] = useState({});

  useEffect(() => {
    TourModel.find(id)
    .then((res) => {
        setTour(res)
    })
    .catch((err) =>{
      console.err("lổi xảy ra : ",err)
    })
  }, [id]);

  return (
    <div>
      <h1>Tour Show</h1>
      <h3>Tour du lịch {tour.name}</h3>
      <p>Giới thiệu : {tour.description}</p>
      <Link to="/">Danh sách</Link>
    </div>
  );
}

export default TourShow;