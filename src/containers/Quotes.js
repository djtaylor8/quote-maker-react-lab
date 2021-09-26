import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeQuote } from '../actions/quotes'
import { upvoteQuote } from '../actions/quotes'
import { downvoteQuote } from '../actions/quotes'
import QuoteCard from '../components/QuoteCard';

class Quotes extends Component {

  renderQuotes = () => this.props.quotes.map((quote) => (<QuoteCard key={quote.id} quote={quote} delete={ this.props.removeQuote } upvote={ this.props.upvoteQuote } downvote={ this.props.downvoteQuote } />))

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {this.renderQuotes()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { quotes: state.quotes }
}


//add arguments to connect as needed
export default connect(mapStateToProps, { removeQuote, upvoteQuote, downvoteQuote })(Quotes);
