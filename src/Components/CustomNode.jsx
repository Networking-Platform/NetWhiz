import React, { memo, useState } from "react";
import { Handle, Position, useStore } from "reactflow";
import "../Styles/CustomNode.css";
import "../Styles/Options.css";

/// using javascript so it does not have enum :(
const ClassNames = {
  "Client send request": "clientColorBlock",
  "Server receive and process": "serverColorBlock",
  "Server respond fail": "serverFailColorBlock",
  "Server respond data": "serverDataBlock",
  "Caller dial recipient number": "clientColorBlock",
  "Recipient picks up": "serverColorBlock",
  "One person speaks": "serverFailColorBlock",
  "other listens and acknowledges": "serverDataBlock",
  "One of them hang up": "otherBlock",
};
const connectionNodeIdSelector = (state) => state.connectionNodeId;
export default memo(({ data, isConnectable, id }) => {
  let mainblockClassName = "mainblock"; // Default class
  const node_info = JSON.parse(data.label);
  const [isEditing, setEditing] = useState(false);

  const handleEditClick = () => {
    setEditing((isEditing) => !isEditing);
  };

  const connectionNodeId = useStore(connectionNodeIdSelector);

  const isConnecting = !!connectionNodeId;
  return (
    <div className="customNode">
      <div
        className={mainblockClassName}
        style={{ background: node_info.color }}
      >
        <button className="editbutton" onClick={handleEditClick}>
          Edit
        </button>
        {node_info.label}
      </div>

      {!isConnecting && (
        <Handle
          className="customHandle"
          position={Position.Right}
          type="source"
        />
      )}

      <Handle
        className="customHandle"
        position={Position.Left}
        type="target"
        isConnectableStart={false}
      />
      {/**I might add the edit button back */}
      {/* {isEditing && data.label == "Customer places order" && (
        <div className="detailview">
          <Options_one />
          <Options_three />
          <Options_four />
          <Options_five />
        </div>
      )}
      {isEditing &&
        (data.label == "Server informs customer not available" ||
          data.label == "Server serves the dish") && (
          <div className="detailview">
            <Options_two />
          </div>
        )} */}
    </div>
  );
});

// http methods
function Options_one() {
  const [addressDropdownValue, setAddressDropdownValue] = useState("");

  return (
    <div className="options">
      <div className="container">
        <div className="dropdown-box">
          <div className="dropdown-item">
            <p className="description">HTTP Methods</p>
            <select
              value={addressDropdownValue}
              onChange={(e) => setAddressDropdownValue(e.target.value)}
            >
              <option key="get" value="get">
                get
              </option>
              <option key="post" value="post">
                post
              </option>
              <option key="delete" value="delete">
                delete
              </option>
              <option key="put" value="put">
                put
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

// error options
function Options_two() {
  const [addressDropdownValue, setAddressDropdownValue] = useState("");

  return (
    <div className="options">
      <div className="container">
        <div className="dropdown-box">
          <div className="dropdown-item">
            <p className="description">Responding Code</p>
            <select
              value={addressDropdownValue}
              onChange={(e) => setAddressDropdownValue(e.target.value)}
            >
              <option key="200" value="200">
                200
              </option>
              <option key="400" value="400">
                400
              </option>
              <option key="500" value="500">
                500
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

/// path options
function Options_three() {
  const [addressDropdownValue, setAddressDropdownValue] = useState("");

  return (
    <div className="options">
      <div className="container">
        <div className="dropdown-box">
          <div className="dropdown-item">
            <p className="description"> Host Path3e</p>
            <select
              value={addressDropdownValue}
              onChange={(e) => setAddressDropdownValue(e.target.value)}
            ></select>
          </div>
        </div>
      </div>
    </div>
  );
}

// encoding options
function Options_four() {
  const [addressDropdownValue, setAddressDropdownValue] = useState("");

  return (
    <div className="options">
      <div className="container">
        <div className="dropdown-box">
          <div className="dropdown-item">
            <p className="description">Accept Encoding</p>
            <select
              value={addressDropdownValue}
              onChange={(e) => setAddressDropdownValue(e.target.value)}
            >
              <option key="gzip" value="gzip">
                gzip
              </option>
              <option key="deflate" value="deflate">
                deflate
              </option>
              <option key="compress" value="compress">
                compress
              </option>
              <option key="identity" value="identity">
                identity
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

// User agent options
function Options_five() {
  const [addressDropdownValue, setAddressDropdownValue] = useState("");

  return (
    <div className="options">
      <div className="container">
        <div className="dropdown-box">
          <div className="dropdown-item">
            <p className="description">Accept Encoding</p>
            <select
              value={addressDropdownValue}
              onChange={(e) => setAddressDropdownValue(e.target.value)}
            >
              <option key="Mozilla" value="Mozilla">
                Mozilla
              </option>
              <option key="Chrome" value="Chrome">
                Chrome
              </option>
              <option key="Safari" value="Safari">
                Safari
              </option>
              <option key="SHEESH" value="SHEESH">
                SHEESH
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
