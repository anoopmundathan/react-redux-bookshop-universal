import React from 'react'

import {Row, Col, Well, Button} from 'react-bootstrap';
const BookItem = (props) => {
	return(
		<Well>
			<Row>
				<Col xs={12}>
					<h6>{props.title}</h6>
					<p>{props.description}</p>
					<h6>usd. {props.price}</h6>
					<Button bsStyle='primary'>Buy Now</Button>
				</Col>
			</Row>
		</Well>
	);
}

export default BookItem;
