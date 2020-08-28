import React from 'react';
import ReactDom from 'react-dom';

// JSX Rules
// return single element
// div / section / article or Fragment
// use camelCase for html attribute
// className instead of class
// close every element
// formatting

function Greeting() {
  return (
    <div>
      <h1>hello world</h1>
    </div>
  );
}

ReactDom.render(<Greeting />, document.getElementById('root'));
