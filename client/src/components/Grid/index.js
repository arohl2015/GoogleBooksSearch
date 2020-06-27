import React from "react";
// import booksController from "/../../controllers/booksController";

// Exporting the Container, Row, and Col components from this file

// This Container component allows us to use a bootstrap container without worrying about class names
export function Container( props ) {
    console.log(props)
    return ( <div>
<h2> title: {props.title} </h2>
<h2> authors: {props.authors} </h2>
<h2> description: {props.description} </h2>
<h2> link: {props.link} </h2>
</div>
    )
    
//   return <div className={`container${props.fluid ? "-fluid" : ""}`}>{props.children}</div>;
}

// This Row component lets us use a bootstrap row without having to think about class names
export function Row({ fluid, children }) {
  return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
}

// This Col component lets us size bootstrap columns with less syntax
// e.g. <Col size="md-12"> instead of <div className="col-md-12">
export function Col({ size, children }) {
  return (
    <div
      className={size
        .split(" ")
        .map(size => "col-" + size)
        .join(" ")}
    >
      {children}
    </div>
  );
}