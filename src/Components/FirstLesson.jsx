import React, { useCallback, useState, useRef } from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from "reactflow";

import "reactflow/dist/style.css";
import '../Styles/Navigation.css'
import "../Styles/mainDrag&Drop.css";
import "../Styles/nodeBottomBar.css";
import "../Styles/menuBar.css";
import '../Styles/Navigation.css'
import BottomBar from "./nodesBottomBar";
import CustomNode from "../Components/CustomNode";
import CustomEdge from "../Components/CustomEdge";

interface Props {
  aboutUsHandler: () => void;
  contactHandler: () => void;
  FAQHandler: () => void;
  backToHomeHandler: () => void;
  ProfileHandler: () => void;
}

let id = 0;
const getId = () => `dndnode_${id++}`;
const nodeTypes = {
  customNode: CustomNode,
};
const edgeTypes = {
  customEdge: CustomEdge,
};
const initialNodes = [
  {
    id: "begin",
    position: { x: 100, y: 200 },
    data: { label: "begin" },
    sourcePosition: "right",
    targetPosition: "left",
  },
  {
    id: "end",
    position: { x: 1000, y: 200 },
    data: { label: "end" },
    sourcePosition: "right",
    targetPosition: "left",
  },
];
const initialEdges = [];

export default function App({ backToHomeHandler, aboutUsHandler, contactHandler, FAQHandler, ProfileHandler }:Props) {
  return (
    <div className="outercontainer">
      <div className="purple-menu-bar">  
        {/* Content of the menu bar */}
        {/* For example: */}
        <ul>
          <button id="title" onClick={backToHomeHandler}>Website.com</button>
           <button className="infoButtons">Courses</button>
          <button className="infoButtons" onClick={aboutUsHandler}>About us</button>
          <button className="infoButtons" onClick={contactHandler}>Contact</button>
          <button className="infoButtons" onClick={FAQHandler}>FAQ</button>
          <button id="profileButtom" onClick={ProfileHandler}>Kelvin</button>
        </ul>
      </div>
      <div className="innercontainer">
        <h2>1.1 Introduction of the Computer Networking</h2>
        <div className="instruction">
          HTTP protocol Web browsers work in a similar way to restaurants. When
          you navigate to a website in your browser, your browser (the client)
          will communicate with a web server to retrieve the requested website.
          <br />
          The HTTP protocol deals with requests as follows: <br />
          (i) The client sends a request to the server. <br />
          (ii) The server receives and processes the request. <br />
          (iii) If something goes wrong, the server will respond with a failed
          status code. Otherwise, the server will respond with the desired
          information. We have provided you with the code for the web server
          already. All you have to do is implement the HTTP protocol logic to
          generate a working website.
        </div>
        <div className="panel">
          Game Challenge
          <button className="runbutton">Run</button>
          <button className="helpbutton">Help</button>
          <button className="savebutton">Save</button>
        </div>
        <Flowchart />
        <BottomBar />
      </div>
    </div>
  );
}

function Flowchart() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const reactFlowWrapper = useRef(null);

  const onConnect = useCallback(
    (connection) => {
      const edge = { ...connection, type: "customEdge" };
      setEdges((eds) => addEdge(edge, eds));
    },
    [setEdges]
  );
  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const label = event.dataTransfer.getData("application/reactflow");

      // check if the dropped element is valid
      if (typeof label === "undefined" || !label) {
        return;
      }

      // reactFlowInstance.project was renamed to reactFlowInstance.screenToFlowPosition
      // and you don't need to subtract the reactFlowBounds.left/top anymore
      // details: https://reactflow.dev/whats-new/2023-11-10
      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });
      const newNode = {
        id: getId(),
        position,
        type: "customNode",
        data: { label: label },
        sourcePosition: "right",
        targetPosition: "left",
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );
  return (
    <div className="flowcontainer" ref={reactFlowWrapper}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        // nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onInit={setReactFlowInstance}
        onDrop={onDrop}
        onDragOver={onDragOver}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}
