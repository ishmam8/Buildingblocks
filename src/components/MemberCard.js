import React from "react";
import "./css/MemberCard.css";

// Image imports
import linkedinIcon from "../images/icons/linkedin.svg";
import instagramIcon from "../images/icons/instagram.svg";
import twitterIcon from "../images/icons/twitter.svg";

function MemberCard({
  name,
  designation,
  subheading,
  description,
  linkedin,
  instagram,
  twitter,
  image,
}) {
  return (
    <div className="memberCardContainer">
      <div className="memberCardTop">
        <div className="memberCardImage">
          <img src={image} alt={name} />
        </div>
        <div className="memberCardDetails">
          <h3 className="memberCardName">{name}</h3>
          <h3 className="memberCardDesignation">{designation}</h3>
          <h4 className="memberCardSubheading">{subheading}</h4>
        </div>
      </div>

      <div className="memberCardMiddle">{description}</div>

      <div className="memberCardBottom">
        <a href={linkedin} target="_blank">
          <img src={linkedinIcon}></img>
        </a>
        <a href={instagram} target="_blank">
          <img src={instagramIcon}></img>
        </a>
        <a href={twitter} target="_blank">
          <img src={twitterIcon}></img>
        </a>
      </div>
    </div>
  );
}

export default MemberCard;
