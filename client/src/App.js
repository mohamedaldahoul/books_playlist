import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from 'react-apollo';

//components
import BookList from './components/BookList';

const client = new ApolloClient({
  uri: "https://localhost:4000/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <h1>Books List</h1>
          <BookList />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
