import React from 'react';
import Counter from './Counter';
class Product extends React.Component{
    render(){
        return(
            <div>
                <h2 className='' >Product</h2>
                <img src={this.props.imageurl} alt={this.props.title} height="100" />
                <p>Title: {this.props.title}</p>
                <p>Product description:{this.props.description}</p>
                <p>Quantity:{this.props.quantity}</p>
                <Counter quantity={this.props.quantity} />
            </div>


        );
    }
}

export default Product;