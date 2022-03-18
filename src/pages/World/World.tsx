import { Link } from 'react-router-dom';
import { Cat, CatFeatures } from '../../components/Cat/Cat';
import { Dog, DogFeatures } from '../../components/Dog/Dog';
import { useTreeState } from '../../state/TreeState';

export type WorldComponents = {
  cat?: CatFeatures,
  dog?: DogFeatures,
}

export function World() {
  const { tree } = useTreeState();

  return (
    <div>
      <Link to={'/'}>Home</Link>
      {tree.world?.dog && <Dog features={tree.world.dog}></Dog>}
      {tree.world?.cat && <Cat features={tree.world.cat}></Cat>}
    </div>
  )
}
