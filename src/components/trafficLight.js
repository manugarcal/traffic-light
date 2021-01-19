import React from 'react';

export default class TrafficLight extends React.Component {

    constructor() {
        super();
        this.state = {
            clicked: null
        }
    }
    render() {
        console.log(this.state);
        let redExtraClass = "";
        if (this.state.clicked === 'red') redExtraClass = 'selected';
        let yellowExtraClass = "";
        if (this.state.clicked === 'yellow') yellowExtraClass = 'selected';
        let greenExtraClass = "";
        if (this.state.clicked === "green") greenExtraClass = 'selected';
        return <div>
            <div id="trafficTop"></div>
            <div id="container">
                <div className={"red light " + redExtraClass} onClick={() => this.setState({ clicked: "red" })}></div>
                <div className={"yellow light " + yellowExtraClass} onClick={() => this.setState({ clicked: "yellow" })}></div>
                <div className={"green light " + greenExtraClass} onClick={() => this.setState({ clicked: "green" })}></div>
            </div>
        </div>
    }
}