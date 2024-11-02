import React from "react";
import "./Notifications.css";
import { buttonClicked, getLatestNotification } from "./utils.js";

const Notifications = () => {
  return (
    <>
      <div className="Notifications">
        <p style={{ display: "inline" }}>Here is the list of notifications</p>
        <button
          style={{ float: "right", display: "inline" }}
          aria-label={"Close"}
          onClick={buttonClicked}
        >
          <img src="close-icon.png" alt="" />X
        </button>

        <ul>
          <li data-priority="default">New course available</li>
          <li data-priority="urgent">New resume available</li>

          <li
            dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
            data-priority="urgent"
          ></li>
        </ul>
      </div>
    </>
  );
};
export default Notifications;
