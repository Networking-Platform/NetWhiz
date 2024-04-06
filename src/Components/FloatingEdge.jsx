import { useCallback } from "react";
import {
  useStore,
  getStraightPath,
  EdgeLabelRenderer,
  getBezierPath,
  getSmoothStepPath,
  getSimpleBezierPath,
} from "reactflow";

import { getEdgeParams } from "./utils.js";

function getSpecialPath(sourceX, sourceY, targetX, targetY, offset) {
  const centerX = (sourceX + targetX) / 2;
  const centerY = (sourceY + targetY) / 2;
  const path = `M ${sourceX} ${sourceY} Q ${centerX} ${
    centerY + offset
  } ${targetX} ${targetY}`;
  console.log(centerX);
  console.log(centerY);
  return { path: path, labelX: centerX, labelY: centerY + offset };
}

function FloatingEdge(props) {
  console.log(props);
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
  console.log(sourceNode);
  console.log(targetNode);

  if (!sourceNode || !targetNode) {
    return null;
  }
  //   console.log(source);
  //   console.log(target);
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
              {props.data.map((option) => {
                return <option>{option}</option>;
              })}
            </select>

            {/* {props.source.substring(0, 8) === "lesson1" && (
              <select className="selectlabel">
                <option>None</option>
                <option>Available</option>
                <option>Else</option>
              </select>
            )} */}

            {/* <input className="edgeinput"></input> */}
          </div>
        </EdgeLabelRenderer>
      </>
    );
  }

  const { sx, sy, tx, ty } = getEdgeParams(sourceNode, targetNode);
  console.log(getEdgeParams(sourceNode, targetNode));

  //   const [labelX, labelY] = getStraightPath({
  //     sourceX: sx,
  //     sourceY: sy,
  //     targetX: tx,
  //     targetY: ty,
  //   });

  //   const radiusX =
  //     Math.abs(sourceNode.position.x - targetNode.position.x) * 0.001;
  //   const radiusY =
  //     Math.abs(sourceNode.position.y - targetNode.position.y) * 0.001;
  //   const edgePath = `M ${sx} ${sy} A ${radiusX} ${radiusY} 0 1 0 ${tx} ${ty}`;
  const special = getSpecialPath(sx, sy, tx, ty, sx < tx ? 50 : -50);
  //   console.log(labelX);
  //   console.log(labelY);
  // console.log(props.source.substring(0, 8));

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
          <select>
            {props.data.map((option) => {
              return <option>{option}</option>;
            })}
          </select>
          {/* <input className="edgeinput"></input> */}
        </div>
      </EdgeLabelRenderer>
    </>
  );
}

export default FloatingEdge;
