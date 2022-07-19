import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

const App = () => {
  const course = 'Half Stack application development';

  /** @type {import("./Part").Parts} */
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ];

  return (
    <div>
      <Header course={course} />
      <Content content={parts} />
      <Footer content={parts} />
    </div>
  );
}

export default App