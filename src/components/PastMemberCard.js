import React from "react";
import "./css/PastMemberCard.css";

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
    <div className="pastMemberCardContainer">
      <div className="pastMemberCardTop">
        <div className="pastMemberCardImage">
          <img src={image} alt={name} />
        </div>
        <div className="pastMemberCardDetails">
          <h3 className="pastMemberCardName">{name}</h3>
          <h3 className="pastMemberCardDesignation">{designation}</h3>
          <h4 className="pastMemberCardSubheading">{subheading}</h4>
        </div>
      </div>
    </div>
  );
}

export default MemberCard;
