import React from "react";
import Typical from "react-typical";
import "./Profile.css";
export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://web.facebook.com/Ingga.Jingga272">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.instagram.com/inggaindra272/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/inggaindra272/">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fa fa-github"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Indra Ali</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Front-End Dev",
                    1000,
                    "React Dev",
                    1000,
                    "Ionic Dev",
                    1000,
                    "PHP Dev",
                    1000,
                    "Laravel Dev",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building Web with front-end Operations
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"> Hire Me </button>
            <a
              href="https://drive.google.com/file/d/1Y0NQefxcM9qL3E9dWlnUoWv-e7Kv6982/view?usp=sharing"
              download="CV Indra Ali"
            >
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
