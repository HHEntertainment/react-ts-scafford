import { connect } from 'react-redux';

import { fetchPostList } from '../store/Board/actions';
import { getPosts } from '../store/Board/selectors';
import App from './App';

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