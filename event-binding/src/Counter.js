import React from 'react';
class Counter extends React.Component { 
    constructor(props){
        super(props);
        this.state={quantity: props.quantity};
    }
    render(){
        
        return(
            <div>
                <button onClick={()=>{
                    // this.props.quantity=this.props.quantity-1;
                    this.setState({quantity: this.state.quantity-1})
                }}>-</button>
                <input value = {this.state.quantity} type="Text"/>
                <button onClick={()=>{
                    // this.props.quantity=this.props.quantity+1;
                    this.setState({quantity: this.state.quantity+1})
                    
                    
                    }}>+</button>


            </div>
    );
 }   
}
export default Counter;
