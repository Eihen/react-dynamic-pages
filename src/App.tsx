import './App.css';
import { TreeProvider } from './state/TreeState';
import AppRouter from './AppRouter';

function App() {
  return (
    <TreeProvider>
      <AppRouter />
    </TreeProvider>
  );
}

export default App;
