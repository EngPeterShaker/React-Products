import React, {Component} from 'react';
import {connect} from "react-redux";
// import {bindActionCreators} from "redux";
// import {search} from "../actions/index";

 export default class SearchBar extends Component {
    constructor(props) {
        super(props);
// console.log(search);

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
        console.log(event.target.value);
        // this.setState({term: event.target.value});
// this
//     .props
// .search(event.target.value)
    }

    onFormSubmit(event) {
        event.preventDefault();
//  onInputChange(event)
        // this.props.search(this.state.term)
        this.setState({term: ''})
    }

    render() {
// const {search, value} = this.props;
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="get temp"
                    className="form-control"
                    value={this.state.term}
                    onChange = {this.onInputChange}/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">search</button>
                </span>
            </form>
        );
    }
}
// function mapStateToProps({works}) {
//     return {value: works.value};
// }
// function mapDispatchToProps(dispatch) {
//     return
//     bindActionCreators({
// search
//     }, dispatch);
// }

// export default connect(null, mapDispatchToProps)(SearchBar);
// we do not need any state here