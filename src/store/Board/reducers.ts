import { flow, set } from 'lodash/fp';

import {
  FETCH_POST_LIST,
  FETCH_POST_LIST_SUCCESS,
  FETCH_POST_LIST_FAILED,
} from './actionTypes';

export default {
  [FETCH_POST_LIST]: state => set('isFetchPostListRequested', true)(state),
  [FETCH_POST_LIST_SUCCESS]: (state, { posts }) => flow(set('isFetchPostListRequested', false), set('posts', posts))(state),
  [FETCH_POST_LIST_FAILED]: state => set('isFetchPostListRequested', false)(state),
};
