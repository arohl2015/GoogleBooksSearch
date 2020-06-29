import React from "react";

function Buttons(props) {
  const renderButton = () => {
    if (props.sender === "Search") {
      return (
        <button
          type="button"
          className="btn btn-secondary"
          onClick={props.saveBook}
        >
          Save Book
        </button>
      );
    } else {
      return (
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => props.deleteBook(props.id)}
        >
          Delete Book
        </button>
      );
    }
  };

  return (
    <div className="card shadow" style={{ marginBottom: "35px" }}>
      <div className="card-body">
        <div className="row">
          <div className="col">
            <h1>{props.title}</h1>

            <p>{props.authors ? props.authors.join(", ") : "NA"}</p>
          </div>
          <div className="col">
            <button
              className="btn btn-secondary"
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
              style={{ width: "250px", height: "250px" }}
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