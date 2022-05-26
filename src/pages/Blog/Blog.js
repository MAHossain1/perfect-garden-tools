import React from "react";

const Blog = () => {
  return (
    <div>
      <h1 className="text-primary my-10 text-3xl text-center">
        Welcome to Perfect Garden Tools Blog!!!
      </h1>
      <h2 className="text-x font-bold">
        1. How will you improve the performance of a React Application?
      </h2>
      <p>
        {" "}
        <b>Answer: </b>
        By following these steps I can improve the performance of a react app.
        <ul>
          <li>Use memo and PureComponent</li>
          <li>Avoid Anonymous Functions</li>
          <li>Avoid Object Literals</li>
          <li>Use React.lazy and React.Suspense</li>
          <li>Avoid Frequent Mounting/Unmounting</li>
        </ul>
      </p>
      <br />

      <h2 className="text-x font-bold">
        2. What are the different ways to manage a state in a React application?
      </h2>
      <p>
        {" "}
        <b>Answer: </b>
        The Four Kinds of React State to Manage Local state. Global state.
        Server state. URL state.
      </p>
      <br />

      <h2 className="text-x font-bold">
        3. How does prototypical inheritance work?
      </h2>
      <p>
        {" "}
        <b>Answer: </b>
        Prototype-based programming is a style of object-oriented programming in
        which behaviour reuse (known as inheritance) is performed via a process
        of reusing existing objects that serve as prototypes. This model can
        also be known as prototypal, prototype-oriented, classless, or
        instance-based programming.
      </p>
      <br />

      <h2 className="text-x font-bold">
        4. Why you do not set the state directly in React. htmlFor example, if
        you have const [products, setProducts] = useState([]). Why you do not
        set products = [...] instead, you use the setProducts
      </h2>
      <p>
        {" "}
        <b>Answer: </b>
        The reason is because setState uses Object.is equality by default to
        compare the old and the new values and tempItems === items even after
        you mutate one of the objects inside of it.
      </p>
      <br />

      <h2 className="text-x font-bold">
        5. What is a unit test? Why should write unit tests?
      </h2>
      <p>
        {" "}
        <b>Answer: </b>
        UNIT TESTING is a type of software testing where individual units or
        components of a software are tested. The purpose is to validate that
        each unit of the software code performs as expected. Unit Testing is
        done during the development (coding phase) of an application by the
        developers. Unit Tests isolate a section of code and verify its
        correctness. A unit may be an individual function, method, procedure,
        module, or object.
      </p>
      <br />
    </div>
  );
};

export default Blog;
