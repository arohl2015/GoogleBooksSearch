import React from "react";

function Buttons(props) {
  const renderButton = () => {
    if (props.sender === "Search") {
      return (
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => props.saveBook(props.index)}
        >
          Save Book
        </button>
      );
    } else {
      return (
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => props.deleteBook(props.index)}
        >
          Delete Book
        </button>
      );
    }
  };

  return (
    <div className="card shadow" style={{ marginBottom: "40px" }}>
      <div className="card-body">
        <div className="row">
          <div className="col">
            <h1>{props.title}</h1>

            <p>{props.authors ? props.authors.join(", ") : "NA"}</p>
          </div>
          <div className="col">
            <button
              className="btn btn-primary"
              onClick={() => window.open(props.link, "_blank")}
              type="button"
            >
              View
            </button>{" "}
            {renderButton()}
          </div>
          <div className="w-100"></div>
          <div className="col">
            <img
              style={{ width: "230px", height: "300px" }}
              src={props.image}
              alt="Book"
            ></img>
          </div>
          <div className="col">
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buttons;