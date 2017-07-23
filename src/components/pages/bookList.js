import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getBooks, postBooks, deleteBooks, updateBooks} from '../../actions/bookActions';
import {Carousel, Grid, Row, Col, Button} from 'react-bootstrap';
import BookItem from './bookItem';

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
					<Carousel>
						<Carousel.Item>
							<img alt="Image1"
								src="/images/image1.jpg"/>
							<Carousel.Caption>
								<h3>First slide label</h3>
								<p>Nulla vitae elitlibero, a pharetra augue mollis interdum.</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img alt="Image2"
								src="/images/image2.jpeg"/>
							<Carousel.Caption>
								<h3>Second slide label</h3>
								<p>Lorem ipsum dolor sitamet, consectetur adipiscing elit.</p>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</Row>
				<Row>
					<div></div>
				</Row>
				<Row>
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