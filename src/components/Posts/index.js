import React, {Component} from 'react';
import Posts from './Posts';
import { connect } from 'react-redux';
import { fetchPostsThunk } from '../../store/slices/posts/actions';
import { selectPosts } from '../../store/slices/posts/selectors';

class PostsContainer extends Component {
  componentDidMount() {
    const { fetchPostsThunk } = this.props;
    fetchPostsThunk();
  }

  render() {
    const { posts } = this.props;
    const hasPosts = posts.length > 0;

    return (
      <div>
        {hasPosts && <Posts posts={posts} />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: selectPosts(state)
});

const mapDispatchToProps = {
  fetchPostsThunk
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);