interface Chai {
  flavour: string;
  readonly price: number;
}

function makeChai(chai: Chai) {
  return `this is ${chai.flavour} chai and price is ${chai.price}`;
}

console.log(makeChai({ flavour: "masala", price: 10 }));

interface DiscountCalculator {
  (price: number): number;
}

const apply50: DiscountCalculator = (p) => p * 0.5;
// console.log(typeof apply50);
console.log(apply50(100));

interface TeaMachine {
  start(): void;
  end(): void;
}
const machine: TeaMachine = {
  start: () => console.log("Machine Started"),
  end: () => console.log("Machine Ended"),
};
machine.start();
machine.end();

// interface signature

interface ChaiRatings {
  [flavour: string]: number;
}

const ratings: ChaiRatings = {
  "Masala Chai": 5,
  "Ginger Tea": 4.5,
};

console.log(ratings);
