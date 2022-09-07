import React from 'react';
import Layout from './layout/default';
import Overview from './views/Overview';
import Campaigns from './views/Campaigns';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/campaigns" element={<Campaigns />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;