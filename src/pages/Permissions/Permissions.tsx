import { Link } from 'react-router-dom';
import { Cat } from '../../components/Cat/Cat';
import { Dog } from '../../components/Dog/Dog';
import { useTreeState } from '../../state/TreeState';

export function Hello() {
  const { tree } = useTreeState();

  return (
    <div>
      <Link to={'/'}>Home</Link>
      {tree.hello?.dog && <Dog features={tree.hello?.dog}></Dog>}
      {tree.hello?.cat && <Cat features={tree.hello?.cat}></Cat>}
    </div>
  );
}
