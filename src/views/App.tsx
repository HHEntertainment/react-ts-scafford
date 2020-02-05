import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Action } from 'store';
import { Post } from 'models/Post';

import Board from 'views/pages/Board';

type Props = {
  fetchPostList: Action,
  posts: [Post],
}

export default (props: Props) => {
  return (
    <BrowserRouter>
      <Route path="/" component={Board} />
    </BrowserRouter>
  )
}