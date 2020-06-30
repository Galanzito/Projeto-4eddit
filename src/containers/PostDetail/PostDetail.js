import React from 'react';
import PostCard from './PostCard'
import { connect } from 'react-redux'
import { push } from 'connected-react-router';
import { routes } from '../Router'


class PostDetail extends React.Component {

  componentDidMount() {
    if (!this.props.post || !this.props.post.id) {
      this.props.goToFeed()
    }
  }

  render() {
    return (
        <PostCard
          post={this.props.post}
        />
    );
  }
}

const mapStateToProps = (state) => ({
  post: state.allPosts.currentPost,
})

const mapDispatchToProps = (dispatch) => ({
  goToFeed: () => dispatch(push(routes.postFeed)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)