import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import client from "./apolloClient";

import Home from "./components/Home";
import Detail from "./components/Detail";

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <main>
            <Route path="/" component={Home} exact />
            <Route path="/details/:movieId" component={Detail} />
          </main>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
