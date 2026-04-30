type chai = {
  name: string;
  price: number;
  ingredients: string[];
};

const MasalaTea: chai = {
  name: "Masala Chai",
  price: 20,
  ingredients: ["water", "Tea Leaves", "masala", "milk", "sugar"],
};

console.log(MasalaTea);

function updateChai(updates: Partial<chai>) {
  return `Updating Chai With: ${updates}`;
}

console.log(updateChai({ price: 25 }));

// pick property

type car = {
  name: string;
  price: number;
  isAvailable: boolean;
  color: string;
};

type BasicCarinfo = Pick<car, "name" | "price" | "isAvailable">;

const carInfo: BasicCarinfo = {
  name: "BMW",
  price: 1000000,
  isAvailable: true,
};

console.log(carInfo);

// Omit Property
type NewCarInfo = Omit<car, "color">;
const newCar: NewCarInfo = {
  name: "Audi",
  price: 2000000,
  isAvailable: false,
};
console.log(newCar);
