let ApiRequestStatus: "Pending" | "Error" | "Success" = "Pending";
ApiRequestStatus = "Success";
let airLineSeat: "aisle" | "window" | "middle" = "middle";
airLineSeat = "window";

const orders = ["12", "20", "28", "42"];
let currentOrder: string | undefined;

for (let i = 0; i < orders.length; i++) {
  if (orders[i] === "28") {
    currentOrder = orders[i];
    break;
  }
  currentOrder = "11";
}

console.log("Current Order: ", currentOrder);
