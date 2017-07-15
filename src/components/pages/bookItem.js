import React, {Component} from 'react'

import {Row, Col, Well, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {addToCart} from '../../actions/cartActions';
import {postBooks} from '../../actions/bookActions';

class BookItem extends Component {
	
	handleClick() {
		
		const book = [...this.props.cart, {
			id: this.props.id,
			title: this.props.title,
			description: this.props.description,
			price: this.props.price,
			quantity: 1
		}];

		if(this.props.cart.length > 0) {
			let id =this.props.id;
			let cartIndex = this.props.cart.findIndex(cart => cart.id === id);
			if(cartIndex === -1) {
				this.props.addToCart(book);
			} else {
				this.props.updateCart(id, 1);
			}
		} else {
			this.props.addToCart(book);
		}
	}

	render() {
		return(
			<Well>
				<Row>
					<Col xs={12}>
						<h6>{this.props.title}</h6>
						<p>{this.props.description}</p>
						<h6>usd. {this.props.price}</h6>
						<Button bsStyle='primary' 
							onClick={this.handleClick.bind(this)}>Buy Now</Button>
					</Col>
				</Row>
			</Well>
		);
	}
}

const mapStateToProps = state => (
	{
		cart: state.cart.cart
	}
);

const mapDispatchToProps = dispatch => bindActionCreators({addToCart}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(BookItem);
