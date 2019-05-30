import React, {Component} from 'react';
// import { connect } from 'react-redux';
// import Post from './Post';
// import { selectPost } from "../../store/slices/post/selectors";
// import { fetchPostThunk } from "../../store/slices/post/actions";

class PostContainer extends Component {
  // componentDidMount() {
  //   const { fetchPostThunk } = this.props;
  //   fetchPostThunk()
  // }

  handleClick = async () => {
    const result = await fetch('https://simple-blog-api.crew.red/posts/20?_embed=comments');
    const data = await result.json();
    console.log(data);
  };

  render() {
    // const { post } = this.props;
    // const hasPost = post.length > 0;

    return (
      <div>
        <button onClick={this.handleClick}>click me</button>
        {/*{hasPost && <Post />}*/}
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   post: selectPost(state)
// });
//
// const mapDispatchToProps = {
//   fetchPostThunk,
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);

export default PostContainer;