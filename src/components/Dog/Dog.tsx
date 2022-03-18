export type DogFeatures = {
  bark?: boolean,
  guard?: boolean,
  fetch?: boolean,
}

export function Dog({ features }: { features: DogFeatures }) {
  return (
    <div>
      <h1>Dog</h1>
      <span>I'm a dog</span>
      {features.bark && <span>I can bark</span>}
      {features.fetch && <span>I can fetch</span>}
      {features.guard && <span>I can guard your house</span>}
    </div>
  );
}
