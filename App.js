
// <div id="parent">
//     <div id="child">
//         <h1>I'm an h1 tag</h1>
//         <h2>I'm an h2 tag</h2>
//     </div>
// </div>

// import React from "react";
// import ReactDOM from "react-dom/client";

// const parent = React.createElement(
//     "div", 
//     {id: "parent"},
//     React.createElement(
//         "div",
//         {id: "child"},[
//         React.createElement("h1", {}, "This is react learning "),
//         React.createElement("h2", {}, "I'm an h2 tag")
//     ])
// );

// console.log(parent);


// const heading = React.createElement("h1", {id: "heading"}, "Hello World from React!");

// console.log(heading); // object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// root.render(parent);

// ReactDOM.render(<h1>Hello, Every one I am starting react</h1>, document.getElementById("root"));
// ReactDOM.render(<p>Hi, my name is Bob!</p>, document.getElementById("root"));
// ReactDOM.render(
//     <ul><li>Home</li><li>Project</li><li>Contact</li></ul>,
//     document.getElementById("root")
// );

/*
 Challenge - recreate the above line of code in vanilla JS by creating and appending an h1 to
 our div#root (without using innerHTML).

 - Create a new h1 element 
 - Give it some textContent 
 - Give it a class name of "header"
 - append it as a child of the div#root

*/

// const h1 = document.createElement("h1");
// h1.textContent = "This is an imperative way to program";
// h1.className = "header";
// document.getElementById("root").append(h1);

//JSX
const page = (
    <div>
        <h1 className="header">this is JSX</h1>
        <p>this is a paragraph</p>
    </div>
);
console.log(page);

ReactDOM.render(
    page,
    document.getElementById("root")
)
 