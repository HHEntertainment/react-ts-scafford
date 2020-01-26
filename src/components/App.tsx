import * as React from 'react';
import { AppWrapper } from './styled';
import { Action } from '../store'
import { Post } from '../store/Board'

type Props = {
  fetchPostList: Action,
  posts: [Post],
}

export default (props: Props) => {
  return (
    <AppWrapper>
      React with typescript Scafford Project
    </AppWrapper>
  )
}