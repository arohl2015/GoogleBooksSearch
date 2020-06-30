import React, { Component } from "react";
import API from "../utils/API";

import Jumbotron from "../components/Jumbotron";
import Wrapper from "../components/Wrapper";
import Buttons from "../components/Buttons";
import "./style.css";

class Saved extends Component {
  state = {
    savedBooks: [],
  };
  componentDidMount() {
    API.getBooks()
      .then(res => {
        this.setState({ savedBooks: res.data })
        console.log(this.state.savedBooks)
      })
      .catch((err) => console.log(err));
  }
 
  deleteBook = (index) => {
    API.deleteBook(index)
      .then((res) => {
        console.log(res);
        this.componentDidMount();
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div>
             {/* <Nav/> */}
        <Jumbotron/>
        <Wrapper>
          <div style={{ padding: "25px" }}>
           {this.state.savedBooks.map((book) => (
              <Buttons
                key={book.title}
                sender="Saved"
                title={book.title}
                authors={book.authors}
                description={book.description}
                id = {book._id}
                image={book.image}
                link={book.infoLink}
                deleteBook={this.deleteBook}
              ></Buttons>
            ))}
          </div>
        </Wrapper>
      </div>
    );
  }
}
export default Saved;