import { useCallback, useState } from "react";
import {
  useStore,
  getStraightPath,
  EdgeLabelRenderer,
  getBezierPath,
  getSmoothStepPath,
  getSimpleBezierPath,
  useReactFlow,
} from "reactflow";

import { getEdgeParams } from "./utils.js";

function getSpecialPath(sourceX, sourceY, targetX, targetY, offset) {
  const centerX = (sourceX + targetX) / 2;
  const centerY = (sourceY + targetY) / 2;
  const path = `M ${sourceX} ${sourceY} Q ${centerX} ${
    centerY + offset
  } ${targetX} ${targetY}`;
  return { path: path, labelX: centerX, labelY: centerY + offset };
}

function FloatingEdge(props) {
  const { setEdges } = useReactFlow();
  const [selectedOption, setSelectedOption] = useState("None");
  const sourceNode = useStore(
    useCallback(
      (store) => store.nodeInternals.get(props.source),
      [props.source]
    )
  );
  const targetNode = useStore(
    useCallback(
      (store) => store.nodeInternals.get(props.target),
      [props.target]
    )
  );

  if (!sourceNode || !targetNode) {
    return null;
  }

  if (targetNode === sourceNode) {
    const radiusX = sourceNode.width * 0.4;
    const radiusY = sourceNode.height;
    const edgePath = `M ${sourceNode.position.x + 0.5 * sourceNode.width} ${
      sourceNode.position.y + sourceNode.height
    } A ${radiusX} ${radiusY} 0 1 0 ${
      sourceNode.position.x + 0.5 * sourceNode.width
    } ${sourceNode.position.y}`;
    const labelX = sourceNode.position.x + 1.4 * sourceNode.width;
    const labelY =
      (sourceNode.position.y + sourceNode.height + sourceNode.position.y) / 2;
    return (
      <>
        <path
          id={props.id}
          className="react-flow__edge-path"
          d={edgePath}
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
            <select>
              {props.data.options.map((option) => {
                return <option>{option}</option>;
              })}
            </select>
          </div>
        </EdgeLabelRenderer>
      </>
    );
  }

  const { sx, sy, tx, ty } = getEdgeParams(sourceNode, targetNode);

  const special = getSpecialPath(sx, sy, tx, ty, sx < tx ? 50 : -50);
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setEdges((es) => {
      return es.map((edge) =>
        edge.id === props.id
          ? {
              ...edge,
              data: {
                options: props.data.options,
                selectedOption: event.target.value,
              },
            }
          : edge
      );
    });
  };
  return (
    <>
      <path
        id={props.id}
        className="react-flow__edge-path"
        d={special.path}
        markerEnd={props.markerEnd}
        style={props.style}
      />
      <EdgeLabelRenderer>
        <div
          style={{
            position: "absolute",
            transform: `translate(-50%, -50%) translate(${special.labelX}px,${special.labelY}px)`,
            fontSize: 12,
            // everything inside EdgeLabelRenderer has no pointer events by default
            // if you have an interactive element, set pointer-events: all
            pointerEvents: "all",
          }}
          className="nodrag nopan"
        >
          <select value={selectedOption} onChange={handleOptionChange}>
            {props.data.options.map((option, id) => {
              return <option key={id}>{option}</option>;
            })}
          </select>
          {/* <input className="edgeinput"></input> */}
        </div>
      </EdgeLabelRenderer>
    </>
  );
}

export default FloatingEdge;
