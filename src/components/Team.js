import React from "react";

import { Redirect, Link } from "react-router-dom";

//Team Member Data
import { TeamData } from "../helpers/TeamData";
import { PastTeamData } from "../helpers/PastTeamData";

//Style imports
import "./css/Team.css";

// Component imports
import Navbar from "./Navbar";
import Footer from "./Footer";
import MemberCard from "./MemberCard";
import PastMemberCard from "./PastMemberCard";

function Team() {
  return (
    <>
      <div className="teamHeader">
        <h1>Our Team</h1>
      </div>
      <div className="teamContainer">
        <div className="teamContainerData">
          {TeamData.map((member, key) => {
            return (
              <MemberCard
                key={key}
                name={member.name}
                designation={member.designation}
                subheading={member.subheading}
                description={member.description}
                linkedin={member.linkedin}
                twitter={member.twitter}
                instagram={member.instagram}
                image={member.img}
              />
            );
          })}
        </div>
      </div>
      <div className="pastTeamContainer">
        <h1>Past Team Members</h1>
        <div className="teamContainerData">
          {PastTeamData.map((member, key) => {
            return (
              <PastMemberCard
                key={key}
                name={member.name}
                designation={member.designation}
                subheading={member.subheading}
                image={member.img}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Team;
