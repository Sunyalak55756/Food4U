import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import RouteRoot from './route/routeRoot'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <RouteRoot />
    </Router>
  );
}

export default App;
