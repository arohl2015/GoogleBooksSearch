import React, { Component } from "react";
import API from "../utils/API";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import Wrapper from "../components/Wrapper";
// import { Container} from "../components/Grid";
import Buttons from "../components/Buttons";

class Saved extends Component {
  state = {
    savedBooks: [],
  };
  componentDidMount() {
    API.getBooks()
      .then(res => {
        this.setState({ savedBooks: res.data })
        console.log(this.state.savedBooks.data)
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
        <Jumbotron>
          <Nav />
        </Jumbotron>
        <Wrapper>
          <div style={{ padding: "25px" }}>
           {this.state.savedBooks.map((book) => (
              <Buttons
                sender="Saved"
                title={book.title}
                authors={book.authors}
                description={book.description}
                // image={book.imageLinks.thumbnail}
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