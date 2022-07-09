import React, { useState, useCallback } from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

function Project(props) {
  var photos = require("../data.json").mas.find(
    (x) => x.id == props.match.params.id
  );
  var photosArr = photos.url.map((x) => {
    return {
      src: require("../Screenshots/" + x.src),
      width: x.width,
      height: x.height,
    };
  });
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-start elementP"
        style={{
          marginTop: "50px",
          marginBottom: "100px",
          flexWrap: "wrap-reverse",
        }}
      >
        <div className="imagephone" style={{ width: "400px", zIndex: "2" }}>
          <Gallery onClick={openLightbox} photos={photosArr} />

          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel currentIndex={currentImage} views={photosArr} />
              </Modal>
            ) : null}
          </ModalGateway>
        </div>
        <div
          className="d-flex justify-content-center flex-column"
          style={{
            marginBottom: "20px",
            width: "400px",
            alignSelf: "start",
            marginLeft: "30px",
            marginRight:"20px"
          }}
        >
          <div style={{ fontSize: "30px" }}>{photos.title}</div>
          <div style={{ fontSize: "15px" }}>{photos.date}</div>
          <br />
          <div style={{ fontSize: "20px" }}>{"Stack: " + photos.stack}</div>
          <div>{photos.longMessage}</div>
          <div
            className="d-flex align-items-center"
            style={{ marginTop: "20px" }}
          >
            <a href={photos.source} target="_blank">
              <img width="50px" src={require("../img/icons8-github-120.png")} />
            </a>
            {photos.publishLink.length > 0 && (
              <a
                target="_blank"
                style={{ marginLeft: "10px", marginTop: "2px" }}
                href={photos.publishLink}
              >
                <img
                  width="40px"
                  src={require("../img/pngfind.com-hover-icon-png-4333068.png")}
                />
              </a>
            )}{" "}
          </div>
        </div>
      </div>
    </>
  );
}
export default Project;
