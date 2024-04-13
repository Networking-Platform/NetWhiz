import React from "react";
import "../Styles/nodeBottomBar.css";
function SideBarTemplate(props) {
  const onDragStart = (event, node) => {
    event.dataTransfer.setData("application/reactflow", JSON.stringify(node));

    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div className="sidebar">
      <div className="description">
        Select suitable nodes and drag them to the pane on the right
      </div>
      {props.nodes.map((node, i) => {
        return (
          <div
            style={{ background: node.color }}
            className="dndnode"
            onDragStart={(event) => onDragStart(event, node)}
            draggable
            key={i}
          >
            {node.label}
          </div>
        );
      })}
    </div>
  );
}

export default SideBarTemplate;
