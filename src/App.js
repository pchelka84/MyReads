import React from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import MainPage from "./MainPage";
import SearchPage from "./SearchPage";

class BooksApp extends React.Component {
  state = {
    books: []
  };

  render() {
    return (
      <div className="app">
        <MainPage />
      </div>
    );
  }
}

export default BooksApp;
