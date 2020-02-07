import { Post } from './Post';

export type Board = {
  id: string;
  title: string;
  posts: [Post];
  isRequested?: boolean;
}
