import React, { Component } from "react";
import API from "../utils/API";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import Wrapper from "../components/Wrapper";
import { Container} from "../components/Grid";
import Form from "../components/Form"; 

class Search extends Component {
    state = {
      books: [],
      search: "",
    };
    handleInputChange = (event) => {
      const { name, value } = event.target;
      this.setState({
        [name]: value,
      });
    };
    handleFormSubmit = (event) => {
      event.preventDefault();
      API.getBooks(this.state.search)
        .then(({ data }) =>
          this.setState({ books: data }, () => console.log(this.state.books))
        )
        .catch((err) => console.log(err));
    };
    saveBook = (index) => {
      console.log(this.state.books[index]);
      const savingBook = {
        title: this.state.books[index].volumeInfo.title,
        authors: this.state.books[index].volumeInfo.authors,
        description: this.state.books[index].volumeInfo.description,
        image: this.state.books[index].volumeInfo.imageLinks.thumbnail,
        link: this.state.books[index].volumeInfo.infoLink,
      };
      API.saveBook(savingBook)
        .then((res) => {
          console.log("result", res);
          this.state.books.splice(index, 1);
          this.setState({ books: this.state.books });
        })
        .catch((err) => {
          console.log("Book doesn't exist!!!", err);
        });
    };
    render() {
      return (
        <div>
          <Jumbotron>
            <Nav />
            <Form
              value={this.state.search}
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
            />
          </Jumbotron>
          <Wrapper>
            <div style={{ padding: "25px" }}>
              {this.state.books.map((book) => (
                <Container
                  sender="Search"
                  title={book.volumeInfo.title}
                  authors={book.volumeInfo.authors}
                  description={book.volumeInfo.description}
                  image={book.volumeInfo.imageLinks.thumbnail}
                  link={book.volumeInfo.infoLink}
                  saveBook={this.saveBook}
                ></Container>
              ))}
            </div>
          </Wrapper>
        </div>
      );
    }
  }
  export default Search;