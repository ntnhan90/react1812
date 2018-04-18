import React, { Component } from 'react';

export class StateExam extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 10 }
    }
    render() {
        return (
            <div>
                <h3>Value = {this.state.count}</h3>
                <button
                    className="btn btn-success"
                    onClick={() => {
                        this.setState(prevState => ({ count: prevState.count + 1 }));
                    }}
                >
                    Increase
                </button>
            </div>
        );
    }
}
