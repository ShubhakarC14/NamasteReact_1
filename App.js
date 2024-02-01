import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", { id: "heading" }, "Namasthe React");
// console.log(heading);
// react element
// {} we can run any thing of javascipt inside{}
const element = <span>React Element</span>;
const Title = () => (
  <h1 className="head" tabIndex="0">
    Namaste React using JSX
    {element}
  </h1>
);
const title = <h2>Hello World !!!!...</h2>;
const num = 10;
//react component
const Heading1 = <h1 className="heading">Namaste react component</h1>;
// console.log(heading);
// heading and jsxHeading is one at the same
// componenet composition
const HeadingComponent = () => (
  <div id="container">
    <Title></Title>
    <h3>{num * 110}</h3>
    {element}
    <Title />
    {Title()}
    {title}

    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);

//JSX (transpiled before it reaches the JS) - PARCEL - Bable

// JSX => React.createElement => ReactElement - JS Object => HTMLelement(render)
