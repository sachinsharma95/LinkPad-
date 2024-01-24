import React from "react";
import Alumini1 from "../Assets/Alu1.jfif";
import Alumini2 from "../Assets/Alu2.jfif";
import Alumini3 from "../Assets/Alu3.webp";

const Work = () => {
  const workInfoData = [
    {
      image: Alumini1,
      title: "Alumini1",
      text: "My Carrier My University",
    },
    {
      image: Alumini2,
      title: "Er Alumini 2 ",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      image: Alumini3,
      title: "Er Sachin ",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Our Alumni Our Pride </p>
        <h1 className="primary-heading1">Some Reputed Alumni</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
