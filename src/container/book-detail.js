import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render(){
    if(!this.props.selectedBook){
      return <div>Please Select a book</div>
    }
    return (
      <div>Book Selected :
      <h1> {this.props.selectedBook.title} </h1>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    selectedBook : state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
