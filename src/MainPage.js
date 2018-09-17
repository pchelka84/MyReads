import React, { Component } from "react";
import BookShelf from "./BookShelf";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class MainPage extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    moveShelf: PropTypes.func.isRequired
  };

  render() {
    const { books, moveShelf } = this.props;

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
              shelfName="Currently Reading"
              books={books.filter(book => book.shelf === "currentlyReading")}
              moveShelf={moveShelf}
              currentShelf="currentlyReading"
            />
            <BookShelf
              shelfName="Want to Read"
              books={books.filter(book => book.shelf === "wantToRead")}
              moveShelf={moveShelf}
              currentShelf="wantToRead"
            />
            <BookShelf
              shelfName="Read"
              books={books.filter(book => book.shelf === "read")}
              moveShelf={moveShelf}
              currentShelf="read"
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default MainPage;
