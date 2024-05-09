import { Link, useParams } from "react-router-dom";

import "reactflow/dist/style.css";
import "../Styles/Navigation.css";
import "../Styles/mainDrag&Drop.css";
import "../Styles/nodeBottomBar.css";
import FlowChartTemplate from "./FlowChartTemplate";
import SideBarTemplate from "./SideBarTemplate";
import CustomNode from "../Components/CustomNode";
import Navigation from "./utils/Navigation";
import FloatingEdge from "./FloatingEdge";
import CustomConnectionLine from "./CustomConnectionLine";
import { useState } from "react";
import LessonNavigation from "./utils/LessonNavigation";

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
  const [solution, setSolution] = useState();
  const [result, setResult] = useState("closed");
  const [showAnswer, setShowAnswer] = useState(false);
  function solutionHandler(value) {
    setSolution(value);
  }
  const closeModal = () => setResult("closed");
  function runHandler() {
    const nodes = solution.nodes.map((node) => {
      if (node.id === "begin" || node.id === "end") {
        return node.id;
      } else {
        return node.id.substring(0, node.id.length - 2);
      }
    });
    const edges = solution.edges.map((edge) => {
      const source =
        edge.source === "begin" || edge.source === "end"
          ? edge.source
          : edge.source.substring(0, edge.source.length - 2);
      const target =
        edge.target === "begin" || edge.target === "end"
          ? edge.target
          : edge.target.substring(0, edge.target.length - 2);
      return {
        source: source,
        target: target,
        option: edge.data.selectedOption,
      };
    });

    //compare solution with answer
    const user_nodes = nodes.slice().sort();
    const actual_nodes = lesson_file.solutions.nodes.slice().sort();

    const user_edges = edges.slice().sort((a, b) => {
      const stringA = JSON.stringify(a);
      const stringB = JSON.stringify(b);
      if (stringA < stringB) return -1;
      if (stringA > stringB) return 1;
      return 0;
    });
    const actual_edges = lesson_file.solutions.edges.slice().sort((a, b) => {
      const stringA = JSON.stringify(a);
      const stringB = JSON.stringify(b);
      if (stringA < stringB) return -1;
      if (stringA > stringB) return 1;
      return 0;
    });
    console.log(JSON.stringify(user_edges) === JSON.stringify(actual_edges));
    const isCorrect =
      JSON.stringify(user_nodes) === JSON.stringify(actual_nodes) &&
      JSON.stringify(user_edges) === JSON.stringify(actual_edges);
    if (isCorrect) {
      setResult("correct");
    } else {
      setResult("wrong");
    }
    // const converted_solution = {}
    // solution
  }
  function showHandler() {
    setShowAnswer((answer) => !answer);
  }
  return (
    <div id="outercontainer">
      <Modal
        result={result}
        onClose={closeModal}
        lessonfile={lesson_file}
      ></Modal>
      <LessonNavigation
        username="Kelvin"
        redirects={[
          { page_name: "Home", page_handler: backToHomeHandler },
          { page_name: "Progress", page_handler: ProgressHandler },
          { page_name: lesson_file.lesson, page_handler: () => {} },
        ]}
      />
      <div className="innercontainer">
        <h2>{lesson_file.lesson}</h2>
        <div className="instruction">
          {lesson_file.analogy.map((paragraph, index) => {
            return <p key={index}>{paragraph}</p>;
          })}
        </div>
        <div className="panel">
          Game Challenge
          <button className="runbutton" onClick={runHandler}>
            Run
          </button>
          <button className="helpbutton">Help</button>
          <button className="savebutton">Save</button>
        </div>
        <FlowChartTemplate
          lesson={lesson_file.lesson}
          options={lesson_file.options}
          onSolutionChange={solutionHandler}
        />
        <SideBarTemplate nodes={lesson_file.nodes} />
        <div className="explannation">
          <div className="explannation-header">
            <h2>The explannation for the game challenge</h2>
            <button onClick={showHandler}>show solution</button>
          </div>
          {showAnswer && (
            <div>
              <p>{lesson_file.explannation}</p>
              <p>Following is the example answer for the challenge.</p>
              <img
                className="imagecontainer"
                src={answer}
                alt="Description of the image"
              />
            </div>
          )}

          <div className="instruction">
            <h2>Actual Logic</h2>
            {lesson_file.actual_logic.map((paragraph, index) => {
              return <p key={index}>{paragraph}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

const Modal = (props) => {
  if (props.result === "closed") return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={props.onClose}>
          Close
        </button>

        {props.result === "correct" ? (
          <div className="content">
            {" "}
            <h2>Congratulations!!!</h2>
            <p>
              You successfully pass this task, now you know the idea of{" "}
              {props.lessonfile.lesson}
            </p>
          </div>
        ) : (
          <div className="content">
            {" "}
            <h2>Incorrect Answer</h2>
            <p>Your answer is incorrect. Please review and try again.</p>
          </div>
        )}
      </div>
    </div>
  );
};
