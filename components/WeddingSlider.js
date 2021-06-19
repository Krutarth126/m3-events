import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = () => {
  return (
    <>
      <div className="row">
        <div className="col-12 col-sm-6">
          <h2 className="mt-5">Wedding Planner</h2>
          <AutoplaySlider
            play={false}
            cancelOnInteraction={false} // should stop playing on user interaction
            interval={3000}
            style={{
              height: "50vh",
              width: "30vw",
              margin: "auto",
              border: "2px solid yellow",
              borderRadius: "10px",
            }}
          >
            <div data-src="https://i.ibb.co/fFTmGR4/Screenshot-102.png" />
            <div data-src="https://i.ibb.co/WxLb27B/Screenshot-103.png" />
            <div data-src="https://i.ibb.co/th4JfpR/Screenshot-104.png" />
          </AutoplaySlider>
        </div>
        <div className="col-12 col-sm-6">
          <h2 className="mt-5">Birthday Planner</h2>
          <AutoplaySlider
            play={false}
            cancelOnInteraction={false} // should stop playing on user interaction
            interval={3000}
            style={{
              height: "50vh",
              width: "30vw",
              margin: "auto",
              border: "2px solid yellow",
              borderRadius: "10px",
            }}
          >
            <div data-src="https://i.ibb.co/fFTmGR4/Screenshot-102.png" />
            <div data-src="https://i.ibb.co/WxLb27B/Screenshot-103.png" />
            <div data-src="https://i.ibb.co/th4JfpR/Screenshot-104.png" />
          </AutoplaySlider>
        </div>
        <div className="col-12 col-sm-6">
          <h2 className="mt-5">Surprise Planner</h2>
          <AutoplaySlider
            play={false}
            cancelOnInteraction={false} // should stop playing on user interaction
            interval={3000}
            style={{
              height: "50vh",
              width: "30vw",
              margin: "auto",
              border: "2px solid yellow",
              borderRadius: "10px",
            }}
          >
            <div data-src="https://i.ibb.co/fFTmGR4/Screenshot-102.png" />
            <div data-src="https://i.ibb.co/WxLb27B/Screenshot-103.png" />
            <div data-src="https://i.ibb.co/th4JfpR/Screenshot-104.png" />
          </AutoplaySlider>
        </div>
        <div className="col-12 col-sm-6">
          <h2 className="mt-5">Haldi decoration </h2>
          <AutoplaySlider
            play={false}
            cancelOnInteraction={false} // should stop playing on user interaction
            interval={3000}
            className="slider__div"
            style={{
              height: "50vh",
              width: "30vw",
              margin: "auto",
              border: "2px solid yellow",
              borderRadius: "10px",
            }}
          >
            <div data-src="https://i.ibb.co/fFTmGR4/Screenshot-102.png" />
            <div data-src="https://i.ibb.co/WxLb27B/Screenshot-103.png" />
            <div data-src="https://i.ibb.co/th4JfpR/Screenshot-104.png" />
          </AutoplaySlider>
        </div>
      </div>
    </>
  );
};

export default Slider;
