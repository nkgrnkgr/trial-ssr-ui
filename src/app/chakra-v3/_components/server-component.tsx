import { Heading } from "@chakra-ui/react";

export async function ServerComponent() {
  const todo = await fetchTodo();
  return (
    <div>
      <Heading>this is server components</Heading>
      <pre>{JSON.stringify(todo, null, 2)}</pre>
    </div>
  );
}

const fetchTodo = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const json = await response.json();
  return json;
};
