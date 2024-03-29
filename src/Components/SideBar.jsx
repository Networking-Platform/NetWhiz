import React from "react";
import "../Styles/temp.css";
function SideBar() {
  const onDragStart = (event, label) => {
    event.dataTransfer.setData("application/reactflow", label);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div className="sidebar">
      <div className="description">
        Select suitable nodes and drag them to the pane  on the right
      </div>
      <div
        className="dndnode input"
        onDragStart={(event) => onDragStart(event, "Client send request")}
        draggable
      >
        Client send request
      </div>
      <div
        className="dndnode serverblock"
        onDragStart={(event) =>
          onDragStart(event, "Server receive and process")
        }
        draggable
      >
        Server receive and process
      </div>
      <div
        className="dndnode output"
        onDragStart={(event) => onDragStart(event, "Server respond fail")}
        draggable
      >
        Server respond fail
      </div>
      <div
        className="dndnode datablock"
        onDragStart={(event) => onDragStart(event, "Server respond data")}
        draggable
      >
        Server respond data
      </div>
    </div>
  );
}

export default SideBar;
