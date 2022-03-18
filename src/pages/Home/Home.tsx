import { Link } from 'react-router-dom';
import { useTreeState } from '../../state/TreeState';

export function Home() {
  const { tree } = useTreeState();

  return (
    <div>
      {tree.hello && <Link to={'/hello'}>Hello</Link>}
      {tree.world && <Link to={'/world'}>World</Link>}
    </div>
  )
}
