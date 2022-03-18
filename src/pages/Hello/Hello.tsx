import { Link } from 'react-router-dom';
import { Cat, CatFeatures } from '../../components/Cat/Cat';
import { Dog, DogFeatures } from '../../components/Dog/Dog';
import { useTreeState } from '../../state/TreeState';

export type HelloComponents = {
  cat?: CatFeatures;
  dog?: DogFeatures;
};

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
