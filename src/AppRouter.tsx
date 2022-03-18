import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { World } from './pages/World/World';
import { Hello } from './pages/Hello/Hello';
import { Home } from './pages/Home/Home';
import { useTreeState } from './state/TreeState';
import { ChangeEvent, useState } from 'react';

function AppRouter() {
  const { tree, setTree } = useTreeState();

  const [stringTree, setStringTree] = useState<string>(JSON.stringify(tree));

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setStringTree(event.target.value);
  }

  function submit() {
    setTree(JSON.parse(stringTree));
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        {tree.hello && <Route path={'/hello'} element={<Hello />} /> }
        {tree.world && <Route path={'/world'} element={<World />} /> }
      </Routes>
      <textarea value={stringTree} onChange={handleChange}></textarea>
      <button onClick={submit}>Submit</button>
    </BrowserRouter>
  );
}

export default AppRouter;
