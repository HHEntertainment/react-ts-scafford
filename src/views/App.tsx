import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Board from 'views/pages/Board';

const App: React.FC = () => (
  <BrowserRouter>
    <Route path="/" component={Board} />
  </BrowserRouter>
);

export default App;
