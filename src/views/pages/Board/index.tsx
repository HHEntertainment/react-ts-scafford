import { connect } from 'react-redux';

import { fetchPostList } from 'store/Board/actions';
import { getPosts } from 'store/Board/selectors';
import Board from './Board';

export default connect(
  (state) => ({
    /* selector */
    posts: getPosts(state),
  }),
  {
    /* actions */
    fetchPostList,
  }
)(Board);
