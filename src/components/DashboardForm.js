import React from 'react';
import '../components/css/DashboardForm.css';

/**
* @author
* @function DashboardForm
**/

const DashboardForm = (props) => {
  return (
    <div className="dashboardFormContainer">
      <div className="dashboardFormHeader">
        <h1> Mentees </h1>
      </div>
      <div className="dashboardFormPartition">
      </div>
      <div className="dashboardFormBody">
        <span>
          You don't have any mentees yet.
        <a href="#" alt="link to google form" className="dashboardFormLink"> Take the matching survey </a>
        to get matched with your mentees!
      </span>
      </div>
    </div>
  )

}

export default DashboardForm