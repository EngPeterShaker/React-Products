import React, {Component} from "react";
import {connect} from "react-redux";
import SearchBar from "../containers/search_bar";

// import {selectBook} from "../actions/index";
// import {bindActionCreators} from "redux";
import './product_list.scss';

class BookList extends Component {
renderList(products) {
        // onClick={() => this.props.selectBook(product)}
        return products
            .map((product, index) => {
                return (
                  
<div key = {index} className = "card" > 
<img src={product.picture} alt="Avatar"/>
    <div className="container">
        <h4> <b> {product.name} </b></h4>
<p className="prices"> {product.price} </p>
    </div>
</div>

                );
            });
    }

    render() {
const {products} = this.props;
        return (
            <div className="row">
< SearchBar />

                <div className="list-group">
{
    this.renderList(products)
}
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    //whatever is returned will showup as props insde booklist
    return {
        products: state.products
        // asdf:123
    }
}

//anything returned from this fn will end up as propdon the booklist container
// function mapDispatchToProps(dispatch) {
//     // whenever selectbook is called , the result should be passed to all of our
//     // reducers
//     return bindActionCreators({
//         selectBook: selectBook
//     }, dispatch)
// }

// promote BookList from a component to a contaier - it needs to know about this
// new dispatch metho , selectbook . make it available as a prop
// export default connect(mapStateToProps, mapDispatchToProps)(BookList)
export default connect(mapStateToProps)(BookList)