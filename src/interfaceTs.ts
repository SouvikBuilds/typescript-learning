// interface and types

type teaRecipe = {
  water: number;
  milk: number;
};

class Chai implements teaRecipe {
  water = 100;
  milk = 50;
}

interface CupSize {
  size: "small" | "medium" | "large";
}

class OrderTea implements CupSize {
  size: "small" | "medium" | "large" = "large";
}

// another example

// type Response = { ok: true } | { ok: false };
// class myResponse implements Response {
//   ok: boolean = true;
// }
// This gives error, we have to declare interface.

interface Response {
  ok: boolean;
}

class myResponse implements Response {
  ok: boolean = true;
}
