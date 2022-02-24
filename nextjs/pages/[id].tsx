import type { GetStaticPaths, NextPage } from "next";
import { GetStaticProps } from "next";
import ITodo from "../types/todo";

interface IProps {
  todo: ITodo;
}

const Home: NextPage<IProps> = ({ todo }) => {
  return <div>{todo.title}</div>;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${context.params?.id}`
  );
  const data = await response.json();

  return {
    props: {
      todo: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  const todoIds = data.map((todo: ITodo) => ({
    params: {
      id: todo.id.toString(),
    },
  }));

  return {
    paths: todoIds,
    fallback: true,
  };
};

export default Home;
