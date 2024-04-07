import React, { memo, useState } from "react";
import { Handle, Position } from "reactflow";
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
  "One of them hang up": "otherBlock"
};

export default memo(({ data, isConnectable }) => {
const [isEditing, setEditing] = useState(false);

const handleEditClick = () => {
  setEditing((isEditing) => !isEditing);
};

let mainblockClassName = "mainblock " + ClassNames[data.label];

return (
  <div className="customNode">
    <Handle
      type="target"
      position={Position.Left}
      id="a"
      style={{ background: "#555" }}
      onConnect={(params) => console.log("handle onConnect", params)}
      isConnectable={isConnectable}
    />

    <div className={mainblockClassName}>
      <button className="editbutton" onClick={handleEditClick}>
        Edit
      </button>
      {data.label}
    </div>

    <Handle
      type="source"
      position={Position.Right}
      id="b"
      style={{ background: "#555" }}
      isConnectable={isConnectable}
    />
    <Handle
      type="target"
      position={Position.Top}
      id="c"
      style={{ background: "#555" }}
      isConnectable={isConnectable}
    />
    <Handle
      type="source"
      position={Position.Bottom}
      id="d"
      style={{ background: "#555" }}
      isConnectable={isConnectable}
    />
    {isEditing && data.label == "Client send request" && (
      <div className="detailview">
        <Options_one />
        <Options_three />
        <Options_four />
        <Options_five />
      </div>
    )}
    {isEditing &&
      (data.label == "Server respond fail" ||
        data.label == "Server respond data") && (
        <div className="detailview">
          <Options_two />
        </div>
      )}
    {/* <Handle
        type="source"
        position={Position.Right}
        id="b"
        style={{ bottom: 10, top: "auto", background: "#555" }}
        isConnectable={isConnectable}
      /> */}
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
