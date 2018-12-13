import React from 'react';

export default class CustomCheckbox extends React.Component {
  handleCheckBoxChange(status, event) {
    const isChecked = event.target.checked;
    isChecked ? this.props.filterList(status, isChecked) : this.props.resetList(status, isChecked);
  }

  render() {
    return (
      <div className="customCheckbox">
        <input
          type="checkbox"
          name="person"
          onChange={this.handleCheckBoxChange.bind(this, this.props.status)}
        />
        <label htmlFor="person">{this.props.status}</label>
      </div>
    );
  }
}
