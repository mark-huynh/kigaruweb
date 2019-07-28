import React from 'react';
import Menu from './Menu.jsx'


const nigiri = [
    {
    name: "ItemName",
        price: 10.5,
            description: "asdfas"
    },
    {
    name: "ItemName",
        price: 10.5,
            description: ""
    },
    {
    name: "ItemName",
        price: 10.5
    },
    {
    name: "ItemName",
        price: 10.5,
            description: "asdfas"
    },
    {
    name: "ItemName",
        price: 10.5,
            description: "asdfas"
    },
    {
    name: "ItemName",
        price: 10.5,
            description: "asdfas"
    },
    {
    name: "ItemName",
        price: 10.5,
            description: ""
    },
    {
    name: "ItemName",
        price: 10.5
    },
    {
    name: "ItemName",
        price: 10.5,
            description: "asdfas"
    },
    {
    name: "ItemName",
        price: 10.5,
            description: "asdfas"
    }
];

class Dev extends React.Component {

    render(){

        return (
            <div>
                <Menu title="Nigiri" items={nigiri} /> 
            </div>
        );
    }
}

export default Dev;
