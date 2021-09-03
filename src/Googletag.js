import React from 'react';

// style sheet
import './Googletag.css';

// This is to tell compiler to ignore checking chrome global variable since it will be injected in extension environment.

/*global chrome */

export default class Googletag extends React.Component {
    render() {
        const googleTagInfo = this.props.googleTagInfo;
        if (googleTagInfo === null || googleTagInfo === undefined) {
            return [];
        }
        var tableContent = [];
        console.log(googleTagInfo);
        Object.keys(googleTagInfo)
        .forEach(key => {
            let status;
            if (googleTagInfo[key] !== null) {
                status = (<div className="checkmark"></div>)
            } else {
                status = (<span className="crossmark">&#10060;</span>)
            }
            tableContent.push(<tr><td>{ key }</td><td>{ status }</td></tr>)
        });
        return (
            <table>
            <thead>
                <tr>
                    <th scope="col">AdUnit Path</th>
                    <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>{ tableContent }</tbody>
            </table>
        )
    }
  }