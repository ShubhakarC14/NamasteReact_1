import React from "react";
import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div className="user-card">
      <h1>About</h1>
      <User name={"Shubhakar`(function component)`"} />
      <UserClass
        name={"Shubhakar"}
        email={"89shubhakar@gmail.com"}
        location={"Bangalore"}
      />
    </div>
  );
};

export default About;
