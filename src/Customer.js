import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Customer extends Component{
    constructor(){
        super();
        this.state = {
            customers: [],
        };
    }

    componentDidMount(){
        fetch('http://lazerpanther-001-site1.atempurl.com/api/customers')
        .then(results => results.json())
        .then(data => {
            this.setState({customers: data});
        })
    }

    render(){
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>City</th>
                        <th>Country</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.customers.map(customer => (
                        <tr key={customer.id}>
                            <td>{customer.id}</td>
                            <td>{customer.firstName}</td>
                            <td>{customer.lastName}</td>
                            <td>{customer.city}</td>
                            <td>{customer.country}</td>
                            <td>{customer.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}


export default Customer;