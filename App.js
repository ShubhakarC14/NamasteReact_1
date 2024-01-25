const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello world from React"
);
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { text: "one" }, "I am h1 Tag."),
    React.createElement("h2", { note: "one" }, "I am h2 Tag."),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { text: "two" }, "I am h1 Tag.2"),
    React.createElement("h2", { note: "two" }, "I am h2 Tag.2"),
  ]),
  React.createElement("div", { id: "child3" }, [
    React.createElement("h1", { text: "three" }, "I am h1 Tag.3"),
    React.createElement("h2", { note: "three" }, "I am h2 Tag.3"),
  ]),
]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
