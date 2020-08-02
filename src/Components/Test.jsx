import React, { Component } from 'react';

export default class Test extends Component {
    componentDidMount() {
        fetch(' https://lol.moa.tw/Ajax/recentgames/48360500', {
            crossDomain: true,
        })
        .then(response => {
            console.log(response)
        })
    }

    render() {
        return (
            <div>
                Test
            </div>
        )
    }
}