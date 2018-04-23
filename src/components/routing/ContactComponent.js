import React, { Component } from 'react';
import { ContactModel } from './Contacts';

export class ContactComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { contact: null };
    }
    componentDidMount() {
        console.log('Did mount');
        const { id } = this.props.match.params;
        const contact = ContactModel.getContactById(id);
        this.setState({ contact });
    }
    componentWillReceiveProps() {
        setTimeout(() => {
            console.log('componentWillReceiveProps', this.props.match.params.id);
            const { id } = this.props.match.params;
            const contact = ContactModel.getContactById(id);
            this.setState({ contact });
        }, 0);
    }
    render() {
        console.log('render');
        if (!this.state.contact) return <div>Loading</div>;
        const { _id, name, phone } = this.state.contact;
        return (
            <div>
                <p>Id: {this.props.match.params.id}</p>
                <p>Name: {name}</p>
                <p>Phone: {phone}</p>
            </div>
        );
    }
}
