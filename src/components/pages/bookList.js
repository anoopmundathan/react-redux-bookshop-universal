import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getBooks, postBooks, deleteBooks, updateBooks} from '../../actions/bookActions';

import {Grid, Row, Col, Button} from 'react-bootstrap';
import BookItem from './BookItem';
import BookForm from './BookForm';
import Cart from '../Cart';

class BookList extends Component {
	
	componentDidMount() {
		this.props.getBooks();
	}

	render() {
		const booksList = this.props.books.map(book => {
			return(
				<Col xs={12} sm={6} md={4} key={book._id}>
				<BookItem 
					id={book._id} 
					title={book.title} 
					price={book.price}
					images={book.images}
					description={book.description} />
				</Col>
			)
		});

		return(
			<Grid>
				<Row>
					<Cart/>
				</Row>
				<Row>
					<Col xs={12} sm={6}>
						<BookForm/>
					</Col>
					{booksList}
				</Row>
			</Grid>
		);
	}
}

const mapStateToProps = state => ({ books: state.book.books });

const mapDispatchToProps = dispatch => {
	return bindActionCreators({
		getBooks: getBooks,
		postBooks: postBooks,
		deleteBooks: deleteBooks,
		updateBooks: updateBooks
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)