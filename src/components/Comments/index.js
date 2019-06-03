import React, {Component} from 'react';
// import Comments from './Comments';
import { connect } from 'react-redux';
import { fetchCommentsThunk } from '../../store/slices/comments/actions';
import { selectComments } from '../../store/slices/comments/selectors';

class CommentsContainer extends Component {
  componentDidMount() {
    const postId = this.props.postId;
    this.props.getComments(postId);
  }

  render() {
    // const { postId } = this.props;
    // const hasComments = postId.length > 0;
    // console.log("PROPS IN COMMENTS", this.props.postId);

    return (
      <div>
        {/*{hasComments ? <span>Hi</span> : <span>no comments</span>}*/}
        Hello
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  comments: selectComments(state)
});

const mapDispatchToProps = (dispatch) => ({
  getComments: (id) => dispatch(fetchCommentsThunk(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);

// export default CommentsContainer;