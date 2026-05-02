import axios from "axios";
import type { AxiosResponse } from "axios";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

// const getJokes = () => {
//   try {
//     axios
//       .get(
//         "https://api.freeapi.app/api/v1/public/randomjokes?limit=10&query=science&inc=categories%252Cid%252Ccontent&page=1",
//       )
//       .then((res) => console.log(res.data.data));
//   } catch (error) {
//     console.log(error);
//   }
// };

// getJokes();

const fetchData = async () => {
  try {
    const response: AxiosResponse<Todo> = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1",
    );

    console.log("Todo", response.data);
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.log("Axios Error: ", error.message);

      if (error.response) {
        console.log("Status Code: ", error.response.status);
        console.log("Data: ", error.response.data);
      }
    }
  }
};

fetchData();
