import React from 'react';
import { connect } from 'react-redux';

import FormComponent from './components/form/form.component';
import Result from './components/result/result.component';
import './App.css';

const App = ({ showResult }) => {
  return (
    <div className="App" style={{ margin: '1rem 0' }}>
      <h3>ABC Engine</h3>
      {showResult ? <Result /> : <FormComponent />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  showResult: state.showResult,
});

export default connect(mapStateToProps)(App);
