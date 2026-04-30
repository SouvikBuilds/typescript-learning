let response: any = "42"; // forceful type assertion

let numericLength: number = (response as string).length; // forceful type assertion

// another example :

type Book = {
  book: string;
  pageCount: number;
};

let bookString = '{"book":"Art of war","pageCount":200}';
let bookObject = JSON.parse(bookString) as Book;

console.log(bookObject.book, bookObject.pageCount);

// const inputElement = document.getElementById("username") as HTMLInputElement;

// try catch in typescript

try {
  console.log("Hello");
} catch (error) {
  if (error instanceof Error) {
    console.log("Error: ", error.message);
  }
}

// type never

type Role = "admin" | "user" | "superadmin";

const redirectBasedOnRole = (role: Role) => {
  if (role === "admin") {
    return `Redirected to admin dashboard`;
  } else if (role === "user") {
    return `Redirected to user dashboard`;
  } else if (role === "superadmin") {
    return `Redirected to super admin dashboard`;
  }
  role;
};

console.log(redirectBasedOnRole("user"));
console.log(redirectBasedOnRole("admin"));
console.log(redirectBasedOnRole("superadmin"));
