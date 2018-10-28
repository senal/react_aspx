import * as React from 'react';
import * as ReactDOM from 'react-dom';


export class OutstandingBillerList extends React.Component<any, any> {

    constructor(props) {
        super(props);

        this.state = {
            billers: ['Ranga', 'Fernando']
        };
    }

    render() {
        return <ul>
            {this.state.billers.map((b) => <li>{b}</li>)}
        </ul>;
    }
}

const targetElement = document.getElementById("billerlist")
const userId = targetElement.dataset.userId;
ReactDOM.render(<OutstandingBillerList userId={userId} />, targetElement);