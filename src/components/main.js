"use strict"
import React from 'react';
import Menu from './menu';
import Footer from './footer';
import{connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getCart} from '../actions/cartActions';

class Main extends React.Component{
    
    componentDidMount(){
        this.props.getCart();
    }

    render(){
      return (
        <div>
            <Menu
                cartItemsNumber={this.props.totalQty} />
                {this.props.children}
            <Footer/>
        </div>
      );
    }
}    

const mapStateToProps = state => (
    {
        totalQty: state.cart.totalQty
    }
)

const mapDispatchToProps = dispatch => {
	return bindActionCreators({
	    getCart:getCart
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);


