import React from "react";
import imageInteractive from "../body/image-interactive.jpg";
import { ImagesGrid } from "../ImagesGrid/ImagesGrid";
import "./Body.scss";
function BodyDesktop() {
  return (
    <>
      <div className="figure-section-continer">
        <figure className="figure-section-continer__figure-body">
          <img src={imageInteractive} alt="interactive-image" />
        </figure>
        <section className="figure-section-continer__section-body">
          <h1>THE LEADER IN INTERACTIVE VR</h1>
          <p>
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for same of the best companies around the globe.
            Our award-winnig creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </section>
      </div>

      <div className="mid-body">
        <h1>OUR CREATIONS</h1>
        <button>SEE ALL</button>
      </div>
      <ImagesGrid />
    </>
  );
}


export default BodyDesktop;
