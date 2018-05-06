import React, { Component } from 'react';
import './ReactClient.css';

export default class ReactClient extends Component {
    constructor(){
        super();
        this.state = {
            customers : []
        }
    }

    componentWillMount(){

        fetch('/api/customers')
            .then(res=>res.json())
            .then(customers => this.setState({customers}, ()=> console.log('customers', customers)));

    }

    render() {
        const {customers} = this.state;

        return (
            <div className="ReactClient">
                <h2>Customers</h2>
                <ul>
                    {customers && customers.map((customer, i)=>
                        <li key={customer.id}>{customer.firstName} {customer.lastName} </li>
                    )}
                </ul>

            </div>
        );
    }
}
