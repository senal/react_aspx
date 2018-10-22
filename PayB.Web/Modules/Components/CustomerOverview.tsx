import * as React from 'react';
import * as ReactDOM from 'react-dom';

export class CustomerOverview extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <h1></h1>;
    }

}

ReactDOM.render(<CustomerOverview />, document.getElementById("welcome"));