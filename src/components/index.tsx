import { connect } from 'react-redux';
import App from './App';

import { fetchPostList } from '../store/Board/actions';
import { getPosts } from '../store/Board/selectors';

export default connect(
  state => ({
    /* selector */
    posts: getPosts(state),
  }),
  {
    /* actions */
    fetchPostList,
  }
)(App);