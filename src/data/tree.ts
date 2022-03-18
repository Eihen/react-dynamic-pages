import { Pages } from '../pages';

export function getTree(): Pages {
  return {
    hello: {
      dog: {
        bark: true,
        fetch: true,
        guard: true
      },
      cat: {
        meow: true,
        wake: true,
        climb: true
      }
    },
    world: {
      dog: {
        bark: true,
        fetch: true,
        guard: true
      },
      cat: {
        meow: true,
        wake: true,
        climb: true
      }
    }
  }
}
