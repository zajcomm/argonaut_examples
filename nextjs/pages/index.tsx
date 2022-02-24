import type { NextPage } from "next";
import { GetStaticProps } from "next";
import Link from "next/link";
import ITodo from "../types/todo";

interface IProps {
  todos: ITodo[];
}

const Home: NextPage<IProps> = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            <Link href={`/${todo.id}`}>
              <a>{todo.title}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();

  return {
    props: {
      todos: data,
    },
  };
};

export default Home;
