import React, { Component } from "react";

class Book extends Component {
  render() {
    let displayThumbnail = this.props.book.imageLinks
      ? this.props.book.imageLinks.thumbnail
      : "";

    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${displayThumbnail}")`
            }}
          />
          <div className="book-shelf-changer">
            <select>
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.autours}</div>
      </div>
    );
  }
}

export default Book;
