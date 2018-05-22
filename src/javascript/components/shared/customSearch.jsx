import React from 'react';
import underscore from 'underscore';

export default class CustomSearch extends React.Component {
  constructor(props) {
    super();
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    event.preventDefault();
    this.props.searchItem(event.target.value);
  }

  render() {
    return (
      <div className="customSearch">
        <input
          type="text"
          placeholder={`Search ${this.props.placeholderText}`}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}
