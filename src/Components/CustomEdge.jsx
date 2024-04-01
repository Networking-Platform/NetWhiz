import React, { useState } from "react";
import {
  BaseEdge,
  EdgeLabelRenderer,
  getBezierPath,
  useReactFlow,
} from "reactflow"

import "../Styles/CustomEdge.css";

const onEdgeClick = (evt, id) => {
  evt.stopPropagation();
  alert(`remove ${id}`);
};

export default function CustomEdge(props) {
  // if (props.source === props.target) {
  //   return <SelfConnecting {...props} />;
  // }
  //   const { setEdges } = useReactFlow();
  const [edgePath, labelX, labelY] = getBezierPath(props);
  const [write, setWrite] = useState(false);
  function onEdgeClick() {
    setWrite(true);
    console.log("ERROR");
  }

  //   const onEdgeClick = () => {
  //     setEdges((edges) => edges.filter((edge) => edge.id !== id));
  //   };

  return (
    <>
      <BaseEdge
        path={edgePath}
        markerEnd={props.markerEnd}
        style={props.style}
      />
      <EdgeLabelRenderer>
        <div
          style={{
            position: "absolute",
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            fontSize: 12,
            // everything inside EdgeLabelRenderer has no pointer events by default
            // if you have an interactive element, set pointer-events: all
            pointerEvents: "all",
          }}
          className="nodrag nopan"
        >
          {write && <input></input>}
          {write && "ERROR"}
          <select>
            <option>None</option>
            <option>OK</option>
            <option>ERROR</option>
          </select>
        </div>
      </EdgeLabelRenderer>
    </>
  );
}
function SelfConnecting(props) {
  // we are using the default bezier edge when source and target ids are different
  const [write, setWrite] = useState(false);
  const { sourceX, sourceY, targetX, targetY, id, markerEnd } = props;
  const radiusX = (sourceX - targetX) * 0.6;
  const radiusY = 50;
  const edgePath = `M ${sourceX - 5} ${sourceY} A ${radiusX} ${radiusY} 0 1 0 ${targetX + 2
    } ${targetY}`;
  const labelX = (targetX - sourceX) / 2 + sourceX;
  const labelY = (targetY - sourceY) / 2 + sourceY - 80;

  return (
    <>
      <BaseEdge path={edgePath} markerEnd={markerEnd} />
      <EdgeLabelRenderer>
        <div
          style={{
            position: "absolute",
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            fontSize: 12,
            // everything inside EdgeLabelRenderer has no pointer events by default
            // if you have an interactive element, set pointer-events: all
            pointerEvents: "all",
          }}
          className="nodrag nopan"
        >
          {write && <input></input>}
          {write && "ERROR"}
          <select>
            <option>None</option>
            <option>OK</option>
            <option>ERROR</option>
          </select>
        </div>
      </EdgeLabelRenderer>
    </>
  );
}
