import React from 'react'
import MindMap from '../react-mindmap'
import { nodes, subnodes, connections } from '../parsed-map/data.json'

export function ScratchPad() {
  return(
    <MindMap
      connections={connections}
      nodes={nodes}
      subnodes={subnodes}
      editable={true}
    />
  );
}
