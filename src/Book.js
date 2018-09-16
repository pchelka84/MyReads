import React, { Component } from "react";

function Book(props) {
  let displayThumbnail = props.book.imageLinks
    ? props.book.imageLinks.thumbnail
    : "";

  const { book } = props;

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
          <select
            onChange={event => props.moveShelf(book, event.target.value)}
            value={props.currentShelf}
          >
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
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
    </div>
  );
}

export default Book;
