import { flow } from 'lodash/fp';
import boardInitializer from './Board/initializer';

export default flow(
  boardInitializer,
);