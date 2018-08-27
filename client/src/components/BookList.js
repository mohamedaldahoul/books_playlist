import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getBooksQuery = gql`
  {
    books{
      name
      id
    }
  }
`

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
