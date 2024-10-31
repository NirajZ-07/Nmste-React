

// const heading = React.createElement("h1",
//      {id :  "heading", xyz : "abc"},
//       "Hello world from React"
//     );


// console.log(heading);     //return an object

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

{/* <div id="parent">
  <div id="child">
    <h1>heading</h1>
  </div>
</div> */}

const parent = React.createElement(
  "div",
  {id : "parent"},
  [
    React.createElement(
      "div", {id : "child"},
      [React.createElement("h1", {}, "heading h1"),
        React.createElement("h2", {}, "heading h2"),
      ]  ),
      React.createElement(
        "div", {id : "child"},
        [React.createElement("h1", {}, "heading h1"),
          React.createElement("h2", {}, "heading h2"),
        ]  ),
  ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(parent);

root.render(parent);
