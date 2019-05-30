import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LatestPosts from './pages/LatestPosts';
import ViewPost from './pages/ViewPost';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={LatestPosts} />
      <Route path="/posts/:postId" component={ViewPost} />
    </Switch>
  );
}

export default App;
