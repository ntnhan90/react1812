import React, { Component } from 'react';

export class MyInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtEn: '',
            txtVn: ''
        }
    }
    render() {
        return (
            <div className="form-group" style={{ width: '200px' }}>
                <input
                    placeholder="English"
                    className="form-control"
                    value={this.state.txtEn}
                    onChange={evt => this.setState({ txtEn: evt.target.value })}
                />
                <br />
                <input
                    placeholder="Vietnamese"
                    className="form-control"
                    value={this.state.txtVn}
                    onChange={evt => this.setState({ txtVn: evt.target.value })}
                />
                <br />
                <pre>vn: {this.state.txtVn}</pre>
                <pre>en: {this.state.txtEn}</pre>
            </div>
        );
    }
}
