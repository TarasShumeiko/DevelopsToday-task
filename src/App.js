import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Posts from './components/Posts';
import Post from './components/Post';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Posts} />
      <Route path="/posts/:postId" component={Post} />
    </Switch>
  );
}

export default App;