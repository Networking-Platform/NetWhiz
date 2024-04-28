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
import "../Styles/mainDrag&Drop.css";
import "../Styles/nodeBottomBar.css";
import "../Styles/menuBar.css";
import '../Styles/Navigation.css'
import CustomNode from "../Components/CustomNode";
import CustomEdge2 from "../Components/CustomEdge2";
import Navigation from './utils/Navigation';

interface Props {
  aboutUsHandler: () => void;
  contactHandler: () => void;
  FAQHandler: () => void;
  backToHomeHandler: () => void;
  ProfileHandler: () => void;
  ProgressHandler: () => void;
}


let id = 0;
const getId = () => `dndnode_${id++}`;
const nodeTypes = {
  customNode: CustomNode,
};
const edgeTypes = {
  customEdge: CustomEdge2,
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
// const nodeTypes = {
//   client: MyCustomNode,
// };
export default function SecondLesson({ backToHomeHandler,aboutUsHandler, contactHandler, FAQHandler, ProfileHandler, ProgressHandler }:Props) {
  return (
    <div className="outercontainer">
      <div className="navigation-container ">  
          <button id="title" onClick={backToHomeHandler}>Website.com</button>
          <Navigation 
              username="Kelvin"
              redirects={
              [
                { page_name: 'Home', page_handler: backToHomeHandler },
                { page_name: 'Progress', page_handler: ProgressHandler }
              ]} 
            />
      </div>
      <div className="innercontainer">
        <h2>1.2 TCP</h2>
        <div className="instruction">
          Oops! It looks like the restaurant telephone broke! Since you are too
          broke to hire someone, you have to fix it yourself. On further
          examination, it looks like the telephone is unable to make calls. So,
          you must reprogram the telephone to make and take calls again. To do
          that, you must learn how phone calls work: <br /> (i) The caller must dial the
          recipient's number and wait for them to pick up, which will establish
          a direct line of communication between them.<br /> (ii) When one person
          speaks, the other listens and acknowledges their understanding by
          responding.<br /> (iii) If someone is speaking too quickly, or they cut off
          due to network issues or background noises, the other will ask them to
          repeat themselves.<br /> (iv) When both parties are done talking, they will
          agree to hang up.
        </div>
        <div className="panel">
          Game Challenge
          <button className="runbutton">Run</button>
          <button className="helpbutton">Help</button>
          <button className="savebutton">Save</button>
        </div>
        <Flowchart />
        <SideBar2 />
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

function SideBar2() {
  const onDragStart = (event, label) => {
    event.dataTransfer.setData("application/reactflow", label);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div className="sidebar">
      <div className="description">
        Select suitable nodes and drag them to the pane on the right
      </div>
      <div
        className="dndnode input"
        onDragStart={(event) =>
          onDragStart(event, "Caller dial recipient number")
        }
        draggable
      >
        Caller dial recipient number
      </div>
      <div
        className="dndnode serverblock"
        onDragStart={(event) => onDragStart(event, "Recipient picks up")}
        draggable
      >
        Recipient picks up
      </div>
      <div
        className="dndnode output"
        onDragStart={(event) => onDragStart(event, "One person speaks")}
        draggable
      >
        One person speaks
      </div>
      <div
        className="dndnode datablock"
        onDragStart={(event) =>
          onDragStart(event, "other listens and acknowledges")
        }
        draggable
      >
        other listens and acknowledges
      </div>
      <div
        className="dndnode otherblock"
        onDragStart={(event) => onDragStart(event, "One of them hang up")}
        draggable
      >
        One of them hang up
      </div>
    </div>
  );
}
