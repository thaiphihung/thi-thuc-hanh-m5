import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TourModel from "../models/TourModel";
import "../TourList.css";

function TourList(props) {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    TourModel.getAll()
      .then((res) => {
        setTours(res);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Tour List</h1>
      <table border={1} width={800} style={{ margin: "20px auto", position: "relative" }}>
        <thead>
          <tr>
            <th style={{ position: "relative" }}>
              <div style={{ position: "absolute", top: "-20px", left: "0" }}>
                <Link to="/tours/create" className="add-link">Thêm</Link>
              </div>
              #
            </th>
            <th>Tên</th>
            <th>Giá</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tours.map((tour, index) => (
            <tr key={index}>
              <th>{tour.id}</th>
              <th>
                <Link to={"/tours/" + tour.id}>{tour.name}</Link>
              </th>
              <th>{tour.price}</th>
              <th>
                <button className="edit-btn">
                  <Link to={"/tours/" + tour.id + "/edit"} className="button-link">
                    Sửa
                  </Link>
                </button>{" "}
                |
                <button className="delete-btn">
                  <Link to={"/tours/" + tour.id + "/delete"} className="button-link">
                    Xóa
                  </Link>
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TourList;