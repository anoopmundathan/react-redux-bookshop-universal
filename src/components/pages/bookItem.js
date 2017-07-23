import React, {Component} from 'react'

import {Image, Row, Col, Well, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {addToCart, updateCart} from '../../actions/cartActions';
import {postBooks} from '../../actions/bookActions';

class BookItem extends Component {
	
	constructor() {
		super();
		this.state = {
			isClicked: false
		};
	}

	onReadMore() {
		this.setState({isClicked: true});
	}

	handleClick() {
		const book = [...this.props.cart, {
			id: this.props.id,
			title: this.props.title,
			description: this.props.description,
			images: this.props.images,
			price: this.props.price,
			quantity: 1
		}];

		if(this.props.cart.length > 0) {
			let id =this.props.id;
			let cartIndex = this.props.cart.findIndex(cart => cart.id === id);
			if(cartIndex === -1) {
				this.props.addToCart(book);
			} else {
				this.props.updateCart(id, 1, this.props.cart);
			}
		} else {
			this.props.addToCart(book);
		}
	}

	render() {
		return(
			<Well>
				<Row>
					<Col xs={12} sm={4}>
						 <Image src={this.props.images} responsive />
					</Col>
					<Col xs={6} sm={8}>
						<h6>{this.props.title}</h6>

						<p>{(this.props.description.length > 50 &&
							this.state.isClicked ===false)
							? (this.props.description.substring(0,50))
							: (this.props.description)}

							<button className='link'
							onClick={this.onReadMore.bind(this)}>
								{(this.state.isClicked === false && 
								this.props.description !== null &&
								this.props.description.length > 50)
								?('...readmore'):('')}
							</button>
						</p>

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

const mapDispatchToProps = dispatch => bindActionCreators({addToCart, updateCart}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(BookItem);
