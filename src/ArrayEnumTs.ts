type Chai = {
  name: string;
  price: number;
  rating: number;
};

const chaiFlavours: string[] = [
  "Masala Tea",
  "Adrak Tea",
  "Elaichi Tea",
  "Mint Tea",
  "Green Tea",
];
const chaiPrice: number[] = [10, 15, 20, 25, 30];

const rating: number[] = [4.5, 4.2, 4.8, 4.1, 4.9];

let menu: Chai[] = [];

for (let i = 0; i < 5; i++) {
  menu.push({
    name: chaiFlavours[i]!,
    price: chaiPrice[i]!,
    rating: rating[i]!,
  });
}

console.log(menu);

const table: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(table);

// tuple

const chai: [type: string, price: number, isHot: boolean] = [
  "Masala Tea",
  20,
  true,
];

console.log(chai);

// enum

enum chaiType {
  masala = "Masala",
  ginger = "Ginger",
  mint = "Mint",
  green = "Green",
  black = "Black",
}

const makeChai = (type: chaiType) => {
  console.log(`Making ${type} Chai`);
};

makeChai(chaiType.masala);
