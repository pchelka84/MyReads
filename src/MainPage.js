import React, { Component } from "react";
import BookShelf from "./BookShelf";
import { Link } from "react-router-dom";

class MainPage extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
              shelfName="Currently Reading"
              books={this.props.books.filter(
                book => book.shelf === "currentlyReading"
              )}
              moveShelf={this.props.moveShelf}
              currentShelf="currentlyReading"
            />
            <BookShelf
              shelfName="Want to Read"
              books={this.props.books.filter(
                book => book.shelf === "wantToRead"
              )}
              moveShelf={this.props.moveShelf}
              currentShelf="wantToRead"
            />
            <BookShelf
              shelfName="Read"
              books={this.props.books.filter(book => book.shelf === "read")}
              moveShelf={this.props.moveShelf}
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
