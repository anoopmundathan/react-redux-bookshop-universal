import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {postBooks, deleteBooks, updateBooks} from '../../actions/bookActions';

class BookList extends Component {
	
	componentDidMount() {
		this.props.postBooks([
			{
				id: 1,
				title: 'Harry Potter',
				description: 'First book description',
				price: 22.32
			}
		]);

		this.props.postBooks([
			{
				id: 2,
				title: 'Harry ',
				description: 'Second book description',
				price: 34.32
			}
		]);

		this.props.postBooks([
			{
				id: 3,
				title: 'Blood dimond ',
				description: 'Third book description',
				price: 21.32
			}
		]);

		this.props.deleteBooks({
			id: 2
		});

		this.props.updateBooks({
			id: 3,
			title: 'Blood Blood'
		});

	}

	render() {
		const booksList = this.props.books.map(book => {
			return(<div>
				<h2>{book.id}</h2>
				<h2>{book.title}</h2>
				<h2>{book.description}</h2>
				<h2>{book.price}</h2>
			</div>)
		});

		return(
			<div>
				<ul>
					{booksList}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = state => ( 
	{
		books: state.book.books
	} 
);

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		postBooks: postBooks,
		deleteBooks: deleteBooks,
		updateBooks: updateBooks
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)