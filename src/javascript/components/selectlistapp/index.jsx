import React from 'react';
import SelectComponent from '../shared/selectList';
import appConstants from '../../app-constants/appConstants';
import BreadCrumb from '../shared/breadcrumb';

export default class SelectIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countryList: appConstants.country,
      selectListStatus: false,
    };
    this.toggleSelectList = this.toggleSelectList.bind(this);
  }

  toggleSelectList() {
    this.setState({
      selectListStatus: !this.state.selectListStatus,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="topwrap clearfix">
          <BreadCrumb link={appConstants.breadCrumb.selectListLinks} />
        </div>
        <h1 className="text-center">Select List  App!</h1>
        <div>
          <button onClick={this.toggleSelectList}>open select list Component</button>
        </div>
        {this.state.selectListStatus &&
        <SelectComponent placeholder="select your country" toggleSelectList={this.toggleSelectList} listData={this.state.countryList} selectListName="COUNTRY" />
                }
      </div>
    );
  }
}
