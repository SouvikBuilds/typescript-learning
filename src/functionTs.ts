type chaiOrder = {
  type: string;
  cups: number;
};

function makeChai(chai: chaiOrder) {
  return `Making ${chai.cups} cups of ${chai.type} `;
}

// console.log(makeChai({ type: "Masala Chai", cups: 3 }));

function getChaiPrice(): number {
  return 15;
}

// console.log(getChaiPrice());

interface createChai {
  type: string;
  sugar: number;
  isHot: boolean;
  size: "small" | "medium" | "large";
  cups: number;
  price: number;
}

const createChai = (chai: createChai) => {
  return {
    type: chai.type,
    sugar: chai.sugar,
    isHot: chai.isHot,
    size: chai.size,
    cups: chai.cups,
    price: chai.price,
  };
};

console.log(
  "Order Created: ",
  createChai({
    type: "Masala Chai",
    sugar: 2,
    isHot: true,
    size: "medium",
    cups: 2,
    price: 15,
  }),
);
