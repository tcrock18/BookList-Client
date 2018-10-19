import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import{ getBooksQuery } from '../Queries/queries'

import BookDetails from './BookDetails'
// getBooksQuery is stored in props

class BookList extends Component {

  state = {
    selected: null
  }

  displayBooks = () => {
    let data = this.props.data;
    if(data.loading){
      return(<div>Loading books...</div>)
    } else {
      return data.books.map(book => {
        return(
          <li key={book.id} onClick={ (e) => { this.setState({ selected: book.id })}}>{ book.name }</li>
        )
      })
    }
  }

  render() {
    return(
      <div>
        <ul id="book-list">
        { this.displayBooks() }
        </ul>
        <BookDetails bookId={ this.state.selected }/>
      </div>
    )
  }
}

export default graphql(getBooksQuery)(BookList);
