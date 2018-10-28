import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface ICustomerOverviewProps extends React.Props<any> {
    userId: number
}

export class CustomerOverview extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <h1>Your user id : {this.props.userId}</h1>
        </div>;
    }

}
const targetElement = document.getElementById("customeroverview")
const userId = targetElement.dataset.userId;
ReactDOM.render(<CustomerOverview userId={userId} />, targetElement);