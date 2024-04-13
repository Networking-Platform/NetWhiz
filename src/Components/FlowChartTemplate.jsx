import React, { useCallback, useState, useRef } from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  MarkerType,
} from "reactflow";

import "reactflow/dist/style.css";
import "../Styles/Navigation.css";
import "../Styles/mainDrag&Drop.css";
import "../Styles/nodeBottomBar.css";
import "../Styles/menuBar.css";
import CustomNode from "../Components/CustomNode";
import FloatingEdge from "./FloatingEdge";
import CustomConnectionLine from "./CustomConnectionLine";

let id = 0;
const nodeTypes = {
  customNode: CustomNode,
};
const edgeTypes = {
  customEdge: FloatingEdge,
};
const connectionLineStyle = {
  strokeWidth: 3,
  stroke: "black",
};
const defaultEdgeOptions = {
  style: { strokeWidth: 3, stroke: "black" },
  type: "floating",
  markerEnd: {
    type: MarkerType.ArrowClosed,
    color: "black",
  },
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

export default function FlowChartTemplate(props) {
  const getId = () => `${props.lesson}_${id++}`;
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const reactFlowWrapper = useRef(null);

  const onConnect = useCallback(
    (connection) => {
      const edge = { ...connection, type: "customEdge", data: props.options };
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
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onInit={setReactFlowInstance}
        onDrop={onDrop}
        onDragOver={onDragOver}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        defaultEdgeOptions={defaultEdgeOptions}
        connectionLineComponent={CustomConnectionLine}
        connectionLineStyle={connectionLineStyle}
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}
