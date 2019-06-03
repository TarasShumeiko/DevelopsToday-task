import React, {Component} from 'react';
import Post from './Post';
import { connect } from 'react-redux';
import { fetchPostThunk } from '../../store/slices/post/actions';
import { selectPost } from '../../store/slices/post/selectors';

class PostContainer extends Component {
  componentDidMount() {
    const postId = this.props.match.params.postId;
    this.props.getPost(postId);
  }

  render() {
    const { post } = this.props;
    const hasPost = Object.keys(post).length > 0;

    return (
      <div>
        {hasPost && <Post post={post} />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  post: selectPost(state)
});

const mapDispatchToProps = (dispatch) => ({
  getPost: (id) => dispatch(fetchPostThunk(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);