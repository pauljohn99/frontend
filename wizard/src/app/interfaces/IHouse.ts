export interface Heads {
  id: string;
  firstName: string;
  lastName: string;
}

export interface Trait {
  id: string;
  name: string;
}

export interface IHouse {
  id: string;
  name: string;
  houseColours: string;
  founder: string;
  animal: string;
  element: string;
  ghost: string;
  commonRoom: string;
  heads: Heads[];
  traits: Trait[];
}
