export type CatFeatures = {
  meow?: boolean;
  wake?: boolean;
  climb?: boolean;
};

export function Cat({ features }: { features: CatFeatures }) {
  return (
    <div>
      <h1>Cat</h1>
      <span>I'm a cat</span>
      {features.meow && <span>I can meow</span>}
      {features.wake && <span>I can wake you up</span>}
      {features.climb && <span>I can climb walls</span>}
    </div>
  );
}
