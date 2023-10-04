/* eslint-disable react/prop-types */
import Carousel from "react-bootstrap/Carousel";
import { FaBed, FaRestroom, FaBath, FaRegBuilding } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { BsHeart, BsFillHeartFill } from "react-icons/bs";
import { useState } from "react";

export default function CarCard({ property }) {
  const [like, setLike] = useState(false);
  return (
    <div className="col-lg-4 col-md-6 col-sm-6 col-12 p-4 ">
      <div
        className="card  rounded-4 border-3 border-white p-1 shadow-lg"
        style={{ backgroundColor: "#e8e8e8" }}
      >
        <Carousel interval={null}>
          {property.image_urls.map((image, imageIndex) => (
            <Carousel.Item key={imageIndex}>
              <div
                style={{
                  height: "300px",
                  width: "370px",
                }}
              >
                <img
                  src={image}
                  className="card-img-top rounded-4"
                  alt="not found"
                  style={{ height: "100%", objectFit: "cover" }}
                />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div
          className="d-flex justify-content-between p-2"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
          }}
        >
          <div className=" d-flex justify-content-between">
            <button type="button" className="btn btn-light rounded-pill">
              {property.category}
            </button>
            <button
              type="button"
              className="btn btn-light rounded-pill"
              onClick={() => setLike(!like)}
            >
              {like ? <BsFillHeartFill /> : <BsHeart className=".bg-info" />}
            </button>
          </div>
        </div>

        <div className="card-body">
          <div className="d-flex justify-content-between">
            <div className="p-0">
              {" "}
              <p>
                <span>
                  <GoLocation />
                </span>
                {property.location}
              </p>
            </div>
            <div className="p-0">
              {property.popular === "True" ? (
                <button
                  type="button"
                  className="btn btn-primary position-relative"
                >
                  Popular
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    +{property.ratings}
                    <span className="visually-hidden">ratings</span>
                  </span>
                </button>
              ) : (
                ""
              )}
            </div>
          </div>

          <p className="mt-2   fs-5">{property.complete_address}</p>
          <div className="d-flex flex-row  justify-content-between m-4">
            <div className="p-0">
              <p>
                <FaRegBuilding className="text-secondary fs-2" />{" "}
              </p>
              <p> {property.number_of_rooms}rooms</p>
            </div>
            <div className="p-0">
              <p>
                <FaBed className="text-secondary fs-2" />{" "}
              </p>
              <p> {property.number_of_bedrooms}bed</p>
            </div>
            <div className="p-0">
              <p>
                <FaBath className="text-secondary fs-2" />{" "}
              </p>
              <p> {property.number_of_baths} bath</p>
            </div>
            <div className="p-0">
              <p>
                <FaRestroom className="text-secondary fs-2" />{" "}
              </p>
              <p> {property.number_of_staff} staff</p>
            </div>
          </div>

          <hr className="my-2" />
          <div className=" d-flex justify-content-between items-center">
            <p className="mt-2  fw-bold fs-4">
              {property.price}
              <span style={{ fontWeight: 100 }}>/month</span>
            </p>
            <p>
              <button
                type="button"
                className="btn btn-outline-primary rounded-4 m-1"
              >
                Rent Now
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
