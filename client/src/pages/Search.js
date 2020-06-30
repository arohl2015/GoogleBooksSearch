import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import Wrapper from "../components/Wrapper";
// import { Container} from "../components/Grid";
import Form from "../components/Form"; 
import Buttons from "../components/Buttons";
import "./style.css";

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
    //   console.log(this.state);
      
    };
    handleFormSubmit = (event) => {
      event.preventDefault();
      console.log(this.state.search);
      API.getGoogleSearchBooks(this.state.search)
        .then( (data)  => {
            console.log(data);
            
            this.setState({ books: data.data }
                )
        })
          
        .catch((err) => console.log(err))
        };
    saveBook = (index) => {
      console.log(index)
      console.log(this.state.books)
      console.log(this.state.books[index]);
      const savingBook = {
        title: this.state.books[index].title,
        authors: this.state.books[index].authors,
        description: this.state.books[index].description,
        image: this.state.books[index].imageLinks.thumbnail,
        link: this.state.books[index].infoLink,
      };
      console.log(savingBook);
      
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
       
            <Form
              search={this.state.search}
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
            />
          </Jumbotron>
          {this.state.books.length ? 
          
          <Wrapper>
            <div style={{ padding: "25px" }}>
              {this.state.books.map((book, i) => (
                <Buttons
              
                key={book.title}
                sender="Search"
                  title={book.title}
                  authors={book.authors}
                  description={book.description}
                  image={book.imageLinks.thumbnail}
                  link={book.infoLink}
                  saveBook={() => this.saveBook(i)}
                  ></Buttons>
                  ))}
            </div>
          </Wrapper>
              : <h2>Search for a Book using the Search Bar above!</h2> }
        </div>
      );
    }
  }
  export default Search;