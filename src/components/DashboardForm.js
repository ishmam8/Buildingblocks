import React from "react";
import "../components/css/DashboardForm.css";

export default function DashboardForm() {
  return (
    <div className="dashboardFormContainer">
      <div className="dashboardFormHeader">Mentees</div>
      <div className="dashboardFormBody">
        <span>
          You don't have any mentees yet. {" "}
          <a href="#" alt="googleForm" className="dashboardFormLink">
            Take the matching survey
          </a>{" "}
          to get matched with your mentees!
        </span>
      </div>
    </div>
  );
}
