import { Link, useParams } from "react-router-dom";

import "reactflow/dist/style.css";
import "../Styles/Navigation.css";
import "../Styles/mainDrag&Drop.css";
import "../Styles/nodeBottomBar.css";
import "../Styles/menuBar.css";
import FlowChartTemplate from "./FlowChartTemplate";
import SideBarTemplate from "./SideBarTemplate";
import CustomNode from "../Components/CustomNode";
import Navigation from "./utils/Navigation";
import FloatingEdge from "./FloatingEdge";
import CustomConnectionLine from "./CustomConnectionLine";

// interface Props {
//   aboutUsHandler: () => void;
//   contactHandler: () => void;
//   FAQHandler: () => void;
//   backToHomeHandler: () => void;
//   ProfileHandler: () => void;
//   ProgressHandler: () => void;
// }

export default function LessonTemplate({
  backToHomeHandler,
  aboutUsHandler,
  contactHandler,
  FAQHandler,
  ProfileHandler,
  ProgressHandler,
}) {
  const { id } = useParams();
  const lesson_file = require("../Lesson/" + id + ".json");
  const answer = require("../Images/" + id + "_answer.png");
  console.log(lesson_file);

  return (
    <div className="outercontainer">
      <div className="navigation-container ">
        <button id="title" onClick={backToHomeHandler}>
          Website.com
        </button>
        <Navigation
          username="Kelvin"
          redirects={[
            { page_name: "Home", page_handler: backToHomeHandler },
            { page_name: "Progress", page_handler: ProgressHandler },
          ]}
        />
      </div>
      <div className="innercontainer">
        <h2>{lesson_file.lesson}</h2>
        <div className="instruction">
          {lesson_file.analogy.map((paragraph) => {
            return <p>{paragraph}</p>;
          })}
        </div>
        <div className="panel">
          Game Challenge
          <button className="runbutton">Run</button>
          <button className="helpbutton">Help</button>
          <button className="savebutton">Save</button>
        </div>
        <FlowChartTemplate
          lesson={lesson_file.lesson}
          options={lesson_file.options}
        />
        <SideBarTemplate nodes={lesson_file.nodes} />
        <div className="explannation">
          <h2>The explannation for the game challenge</h2>
          <p>{lesson_file.explannation}</p>
          <p>Following is the example answer for the challenge.</p>
          <img
            className="imagecontainer"
            src={answer}
            alt="Description of the image"
          />

          <div className="instruction">
            <h2>Actual Logic</h2>
            <p>
              {" "}
              {lesson_file.actual_logic.map((paragraph) => {
                return <p>{paragraph}</p>;
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
