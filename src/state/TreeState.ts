import React, { useState } from 'react';
import constate from 'constate';
import { getTree } from '../data/tree';
import { Pages } from '../pages';

const tree = getTree();

const useTreeContext = () => {
  const [treeState, setTree] = useState<Pages>(tree);

  return {
    tree: treeState,
    setTree,
  }
}

export const [
  TreeProvider,
  useTreeState,
] = constate(useTreeContext);
