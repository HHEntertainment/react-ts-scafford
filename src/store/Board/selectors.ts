import { createSelector } from 'reselect';
import { get } from 'lodash/fp';

const getBoardState = get('Board');

export const getPosts = createSelector(getBoardState, get('currentPagePosts'));
