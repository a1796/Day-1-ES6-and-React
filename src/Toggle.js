import React from "react";

export default class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOnA: true, isToggleOnB: true, isToggleOnC: true };

        // This binding is necessary to make `this` work in the callback
        //   this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (e) => {
        console.log(e);
        switch (e){
            case "isToggleOnA":
            this.setState(state => ({
                isToggleOnA: !state.isToggleOnA
            }));
            break;

            case "isToggleOnB":
            this.setState(state => ({
                isToggleOnB: !state.isToggleOnB
            }));
            break;

            case "isToggleOnC":
            this.setState(state => ({
                isToggleOnC: !state.isToggleOnC
            }));
            break;
            default:
        }

    }

    render() {
        return (
            <div id="all">
                <button id="a" onClick={this.handleClick.bind(this, "isToggleOnA")}>
                    A &rarr; {this.state.isToggleOnA ? 'ON' : 'OFF'}
                </button>
                <button id="b" onClick={this.handleClick.bind(this, "isToggleOnB")}>
                    B &rarr; {this.state.isToggleOnB ? 'ON' : 'OFF'}
                </button>
                <button id="c" onClick={this.handleClick.bind(this, "isToggleOnC")}>
                    C &rarr; {this.state.isToggleOnC ? 'ON' : 'OFF'}
                </button>
            </div>
        );
    }
}