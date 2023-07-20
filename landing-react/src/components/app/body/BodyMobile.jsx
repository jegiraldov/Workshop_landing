import React from "react";
import imageInteractive from "../body/image-interactive.jpg";
import { ImagesMobile } from "../ImagesGrid/ImagesGrid";
import "./Body.scss";
function BodyMobile() {
  return (
    <>
        <div className="figure-section-conteiner-mobile">
            <figure className="figure-section-conteiner-mobile__figure-body">
            <img src={imageInteractive} alt="interactive-image" />
            </figure>
            <section className="figure-section-conteiner-mobile__section-body">
            <h1>THE LEADER IN INTERACTIVE VR</h1>
            <p>
                Founded in 2011, Loopstudios has been producing world-class virtual
                reality projects for same of the best companies around the globe.
                Our award-winnig creations have transformed businesses through
                digital experiences that bind to their brand.
            </p>
            </section>
        </div>
        <h1 className="our-creations">OUR CREATIONS</h1>
        <div className="images-mobile">
            <ImagesMobile />
        </div>
        <div className="see-all">
            <button>SEE ALL</button>
        </div>
        
    </>
  );
}

export default BodyMobile;
