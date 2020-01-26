import * as React from 'react';
import { AppWrapper } from './styled';

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