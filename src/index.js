import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDfSl7y5IxoIDg_oPQcxsykhlrJky7ZwKg';

// Create a new component. This componenet should produce some HTML
const App = () => {
  return (
    <div>
    <SearchBar />
    </div>
  );
}

// Takes this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
