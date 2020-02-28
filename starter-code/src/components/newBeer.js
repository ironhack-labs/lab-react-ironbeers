import React from "react";

const allBeers = () => {
  const placesWhereIWorked = [
    {
      name: "Cool company",
      city: "Barcelona",
      country: "Spain",
      jobTitle: "Specialist for cool things",
      jobDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      jobStarted: "2017",
      jobEnded: ""
    },
    {
      name: "Amazing company",
      city: "Madrid",
      country: "Spain",
      jobTitle: "Junior for cool things",
      jobDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      jobStarted: "2015",
      jobEnded: "2017"
    },
    {
      name: "Cool company",
      city: "Amsterdam",
      country: "Netherlands",
      jobTitle: "Associate Super Intern",
      jobDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      jobStarted: "2013",
      jobEnded: "2015"
    }
  ];

  const checkJobEnded = end => {
    let endYear;
    if (end === "") {
      endYear = "current";
    } else {
      endYear = end;
    }
    return endYear;
  };

  return (
    <div className="">
      <h2>Work Experience:</h2>
      {placesWhereIWorked.map((eachPlace, index) => {
        return (
          <div className="experience-content" key={index}>
            <h3>{eachPlace.name}</h3>
            <p>
              {eachPlace.city}, {eachPlace.country}
            </p>
            <h4>{eachPlace.jobTitle}</h4>
            <p>{eachPlace.jobDescription}</p>
            <p>
              {eachPlace.jobStarted} - {checkJobEnded(eachPlace.jobEnded)}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default allBeers;
