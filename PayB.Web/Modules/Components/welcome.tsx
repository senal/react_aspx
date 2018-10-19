import * as React from 'react';
import * as ReactDOM from 'react-dom';

export class Welcome extends React.Component {
    render() {
        return <h1>Welcome to my react world</h1>;
    }
};

ReactDOM.render(<Welcome />, document.getElementById("welcome"));

  
