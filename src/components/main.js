"use strict"

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Menu from './menu';
import {getCart} from '../actions/cartActions';

class Main extends Component{
    
    componentDidMount(){
        this.props.getCart();
    }

    render(){
      return (
        <div>
            <Menu
                cartItemsNumber={this.props.totalQty} />
                {this.props.children}
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
