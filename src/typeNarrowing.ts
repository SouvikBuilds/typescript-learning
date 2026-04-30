function getChai(chai: string | number) {
  if (typeof chai === "string") {
    return `making ${chai.toLowerCase()} chai...`;
  }
  return `chai order ${chai.toFixed(2)}`;
}

function serveChai(msg?: string) {
  if (msg) {
    return `Serving ${msg}`;
  }
  return "Serving chai";
}

function orderChai(size: "small" | "medium" | "Large", chai: string) {
  if (size === "small") {
    return `Small Cutting ${chai}`;
  } else if (size === "medium") {
    return `medium Cutting ${chai}`;
  } else {
    return `large Cutting ${chai}`;
  }
}

// console.log(getChai("masala"));
// console.log(getChai(122));

// console.log(serveChai("Ginger Tea"));

// console.log(orderChai("small", "Masala Chai"));
// console.log(orderChai("Large", "Green Tea"));
// console.log(orderChai("medium", "Iced tea"));

class KulhadChai {
  serve() {
    return "Serving Kulhad Chai";
  }
}

class CuttingChai {
  serve() {
    return "Serving Cutting Chai";
  }
}
const chaiServe = (chai: KulhadChai | CuttingChai) => {
  if (chai instanceof KulhadChai) {
    console.log(chai.serve());
  } else {
    console.log(chai.serve());
  }
};

// chaiServe(new KulhadChai());
// chaiServe(new CuttingChai());

type chaiOrder = {
  type: string;
  sugar: number;
};

function isChaiOrder(obj: any): obj is chaiOrder {
  return (
    typeof obj === "object" &&
    obj !== "null" &&
    typeof obj.type === "string" &&
    typeof obj.sugar === "number"
  );
}

function handleOrder(chai: chaiOrder | string) {
  if (isChaiOrder(chai)) {
    return `serving ${chai.type} with ${chai.sugar} spoons of sugar.`;
  }
  return `serving custom ${chai}`;
}

// console.log(handleOrder({ type: "Kulhad Chai", sugar: 2 }));
// console.log(handleOrder("Masala Chai"));

type MasalaChai = {
  type: "Masala";
  spiceLevel: number;
};

type GingerTea = {
  type: "Ginger";
  sugar: number;
};

type GreenTea = {
  type: "Green";
  antioxidants: number;
};

type Chai = MasalaChai | GingerTea | GreenTea;

function prepareChai(chai: Chai) {
  switch (chai.type) {
    case "Masala":
      return `Preparing Masala Chai with ${chai.spiceLevel} spice level`;
    case "Ginger":
      return `Preparing Ginger Tea with ${chai.sugar} spoon of sugar`;
    case "Green":
      return `Preparing Green Tea with ${chai.antioxidants} antioxidants`;

    default:
      return `Preparing Custom Chai`;
  }
}

console.log(prepareChai({ type: "Masala", spiceLevel: 2 }));
console.log(prepareChai({ type: "Ginger", sugar: 2 }));
console.log(prepareChai({ type: "Green", antioxidants: 200 }));
