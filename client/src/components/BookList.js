import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBooksQuery } from '../queries/queries';

class BookList extends Component {
  
    displyBooks(){
      let data = this.props.data;
      if(data.loading){
        return (<div> Loading Books...!</div>)
      }
      else{
        return data.books.map(book => {
          return (
            <li key={book.id}>{book.name}</li>
          );
        })
      }
    }
  render() {
    return (
      <div >
        <ul id="book-list">
          {this.displyBooks()}
        </ul>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
