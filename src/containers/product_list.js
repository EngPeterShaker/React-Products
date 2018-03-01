import React, {Component} from "react";
import {connect} from "react-redux";
import SearchBar from "../containers/search_bar";
import './product_list.scss';

class BookList extends Component {
constructor(props) {
    super(props);
this.state = {
    term: '',
    items:[]
};
this.handleChildFunc = this
    .handleChildFunc
    .bind(this);
}
handleChildFunc(term){
this.setState({term})
}
renderList(products) {
    let updatedList=[];
let searchTerm = this.state.term

if (searchTerm.length > 1){
     updatedList = products.filter(function (item) {
return (item.name.toLowerCase().search(searchTerm.toLowerCase()) !== -1);
    });
    console.log(updatedList);
}else {//show all products if no search term
updatedList = products;
}

if (updatedList.length>0){
return updatedList
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
        }else{
            return (
                <div>
                <p>No Items found !</p>
            </div>
            )
        }
    }

    render() {
const {products} = this.props;
        return (
            <div className="row">
< SearchBar myFunc = {
    this.handleChildFunc} />

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
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(BookList)