import React from "react";
import "../Styles/nodeBottomBar.css";
function SideBarTemplate(props) {
  const onDragStart = (event, node) => {
    console.log(node);
    event.dataTransfer.setData("application/reactflow", JSON.stringify(node));
    // event.dataTransfer.setData("application/reactflow", color);
    //set the color

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
      {/* <div
        className="dndnode input"
        onDragStart={(event) => onDragStart(event, "Customer places order")}
        draggable
      >
        Customer places order
      </div>
      <div
        className="dndnode serverblock"
        onDragStart={(event) =>
          onDragStart(event, "Server sends the order to the kitchen")
        }
        draggable
      >
        Server sends the order to the kitchen
      </div>
      <div
        className="dndnode output"
        onDragStart={(event) =>
          onDragStart(event, "Server informs customer not available")
        }
        draggable
      >
        Server informs customer not available
      </div>
      <div
        className="dndnode datablock"
        onDragStart={(event) => onDragStart(event, "Server serves the dish")}
        draggable
      >
        Server serves the dish
      </div> */}
    </div>
  );
}

export default SideBarTemplate;
