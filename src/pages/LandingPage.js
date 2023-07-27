import React, { useState, useRef, useEffect } from "react";
import "./Landingpage.css";
import ScrollingText from "../components/ScrollingText";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const navigateToButtonClikedPage = () => {
    navigate("/home");
  };
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  

  return (
    <div className="landing-page-main-div-1">
      <header className="landing-page-child-header">
        <ScrollingText speed={20} />
        <div className="landing-page-header-logo-1">
          <img className="landing-page-logo-1" alt="" src="/logo.png" />
        </div>
        <hr class="horizontal-line" />
      </header>
      <div className="landing-page-container">
        <button
          className="landing-page-button-big-1"
          onClick={navigateToButtonClikedPage}
          autoFocus
        >
          <span>Press To Enter Shroomlist</span>
        </button>
        <button
          className="landing-page-menu-button"
          onClick={handleOpenModal}
          autoFocus
        >
          <span>MENU</span>
        </button>

        <div className="landing-page-hero-image">
          <img src="landing-page-big-banner.png" alt="" />
        </div>

        {showModal && (
          <div className="landing-page-menu-button-clicked">
            <button
              className="menu-button-pop-up-xoss"
              onClick={handleCloseModal}
              autoFocus
            />
            <button className="pop-up-rectangle-button-menu-button-1" autoFocus>
              <span className="home">HOME</span>
            </button>
            <button className="pop-up-rectangle-button-menu-button-2" autoFocus>
              <span className="About-us">ABOUT US</span>
            </button>
            <button className="pop-up-rectangle-button-menu-button-3" autoFocus>
              <span className="shroomieverse">SHROOMIEVERSE</span>
            </button>
            <button className="pop-up-rectangle-button-menu-button-4" autoFocus>
              <span className="mint">MINT</span>
            </button>
            <button className="pop-up-rectangle-button-menu-button-5" autoFocus>
              <span className="roadmap">ROADMAP</span>
            </button>
            <button className="pop-up-rectangle-button-menu-button-6" autoFocus>
              <span className="bridge">BRIDGE</span>
            </button>
            <a className="terms-of-use">{`TERMS OF USE `}</a>
            <a className="privacy-policy">{`PRIVACY POLICY`}</a>
            <a className="ip-rights">IP RIGHTS</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
