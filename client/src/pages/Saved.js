import React, { Component } from "react";
import API from "../utils/API";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import Wrapper from "../components/Wrapper";
import { Container} from "../components/Grid";
class Saved extends Component {
  state = {
    savedBooks: [],
  };
  componentDidMount() {
    API.getGoogleSearchBooks()
      .then(({ data }) => {
        this.setState({ savedBooks: data })
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
        <Jumbotron>
          <Nav />
        </Jumbotron>
        <Wrapper>
          <div style={{ padding: "25px" }}>
           {/* {this.state.savedBooks.items.map((book) => (
              <Container
                sender="Saved"
                title={book.title}
                authors={book.authors}
                description={book.description}
                image={book.image}
                link={book.infoLink}
                deleteBook={this.deleteBook}
              ></Container>
            ))} */}
          </div>
        </Wrapper>
      </div>
    );
  }
}
export default Saved;