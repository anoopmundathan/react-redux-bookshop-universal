import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Modal, Panel, Col, Row, Well, Button, ButtonGroup, Label} from'react-bootstrap';
import {updateCart} from '../actions/cartActions';

class Cart extends Component {

	constructor() {
		super();
		this.state = {
			showModal: false
		}
	}

	open(){
		this.setState({showModal: true});
	}

	close(){
		this.setState({showModal: false});
	}

	onDelete() {
			const currentBookToDelete = this.props.cart;
			const indexToDelete = currentBookToDelete.findIndex(cart => cart.id === id);
			let cartAfterDelete = [...currentBookToDelete.slice(0,indexToDelete), 
						...currentBookToDelete.slice(indexToDelete +1)];
			this.props.deleteCartItem(cartAfterDelete);
	}
	onIncrement(id){
		this.props.updateCart(id, 1);
	 }
	
	onDecrement(id, quantity){
 		if(quantity > 1){
 			this.props.updateCart(id, -1);
 		}
 	}

	render() {
	    if(this.props.cart[0]){
	      return this.renderCart();
	    } else {
	      return this.renderEmpty();
		} 
	}

	componentDidMount() {
		console.log('Cart', this.props.cart);
	}

  	renderEmpty() {
    	return(<div>Empty Cart</div>)
	}

	renderCart() {
		const cartItemsList = this.props.cart.map(cartArr => {
	      return(
	        <Panel key={cartArr.id}>
	          <Row>

	            <Col xs={12} sm={4}>
	              <h6>{cartArr.title}</h6>
	              <span></span>
	            </Col>
				
							<Col xs={12} sm={2}>
								<h6>usd. {cartArr.price}</h6>
							</Col>

							<Col xs={12} sm={2}>
								<h6>qty. <Label bsStyle="success">{cartArr.quantity}</Label></h6>

							</Col>

							<Col xs={6} sm={4}>
								<ButtonGroup style={{minWidth:'300px'}}>
									<Button 
										bsStyle="default" 
										bsSize="small"
										onClick={this.onDecrement.bind(this, cartArr.id, cartArr.quantity)}>
										-</Button>
									<Button 
										bsStyle="default" 
										bsSize="small"
										onClick={this.onIncrement.bind(this, cartArr.id)}>
										+</Button>
									<span></span>
									<Button bsStyle="danger" bsSize="small">DELETE</Button>
								</ButtonGroup>
							</Col>

	          </Row>
	        </Panel>); 
	    }, this);

	    return(
	      <Panel header="Cart" bsStyle="primary">
	        {cartItemsList}
					<Row>
						<Col xs={12}>
							<h6>Total amount:
								{this.props.totalAmount}
							</h6>
							<h6>total $: {this.props.totalAmount}</h6>
							<Button
								onClick={this.open.bind(this)}
								bsStyle="success" bsSize="small">
								PROCEED TO CHECKOUT
							</Button>
						</Col>
					</Row>
						<Modal 
							show={this.state.showModal}
							onHide={this.close.bind(this)}>
							<Modal.Header closeButton>
								<Modal.Title>Thankyou!</Modal.Title>
							</Modal.Header>
							<Modal.Body>
								<h6>Your order has been</h6>
								<p>You will receive an emailconfirmation</p>
							</Modal.Body>
							<Modal.Footer>
								<Col xs={6}>
									<h6>total $:</h6>
								</Col>
								<Button
									onClick={this.close.bind(this)}>Close</Button>
							</Modal.Footer>
						</Modal>
		  </Panel>);
	}
}

const mapStateToProps = state => ( 
	{
		cart: state.cart.cart,
		totalAmount: state.cart.totalAmount
	} 
);

const mapDispatchToProps = dispatch => {
	return bindActionCreators({
			// deleteCartItem: deleteCartItem,
    	updateCart: updateCart
		}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);