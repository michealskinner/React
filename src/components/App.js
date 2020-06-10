import React from 'react';
import Counter from './Counter';
import { connect } from 'react-redux';
import { increment, decrement, inputNumberChange, inputNumber} from '../actions/index';

class App extends React.Component {
  render() {
    return (
      <div>
        <h3>Counter</h3>
        <Counter count={this.props.count} clicks={this.props.clicks}onIncrement={this.props.onIncrement} onDecrement={this.props.onDecrement} onInputNumberChange={this.props.onInputNumberChange} onInputNumber={this.props.onInputNumber}  />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onInputNumber: () => dispatch(inputNumber()),
    onInputNumberChange: (number) => dispatch(inputNumberChange(number))
  };
}

function mapStateToProps(state) {
  return {
    clicks: state.clicks,
    count: state.count,
    numberInputted: state.numberInputted

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);