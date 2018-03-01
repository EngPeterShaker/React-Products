import React, {Component} from 'react';
import {connect} from "react-redux";
import './search_bar.scss';

 export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        };

        this.onInputChange = this
            .onInputChange
            .bind(this);
        this.onFormSubmit = this
            .onFormSubmit
            .bind(this);
    }
    onInputChange(event) {
        this.setState({term: event.target.value});
this
    .props
.myFunc(event.target.value);
    }
    onFormSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div onSubmit={this.onInputChange} className="input-group">
                <div className = "wrap" > <div className="search">
                    <input type = "text" className = "searchTerm" placeholder = "What are you looking for?" value = {this.state.term} onChange = {this.onInputChange}autoFocus />
                    </div>
                </div>
            </div>
        );
    }
}