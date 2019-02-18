import React from 'react';
import Validation from 'react-validation';
import serialize from 'form-serialize';
import appConstants from '../../app-constants/appConstants';
import BreadCrumb from '../shared/breadcrumb';

require('../../utils/validation');

export default class Index extends React.Component {
  constructor() {
    super();
    this.loginForm = React.createRef();
  }

  submitData(refName, event) {
    event.preventDefault();
    const formStatus = this.loginForm.validateAll(true);
    if (formStatus) {
      const formData = serialize(document.querySelector('#loginFrom'), { hash: true });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="topwrap clearfix">
          <BreadCrumb link={appConstants.breadCrumb.loginLinks} />
        </div>
        <div>
          <h3>USer login Page</h3>
          <Validation.components.Form ref={this.loginForm} id="loginForm">
            <div>
              <Validation.components.Input
                value=""
                name="email"
                placeholder="enter email"
                validations={['required', 'email']}
              />
            </div>
            <div>
              <Validation.components.Input
                type="password"
                value=""
                name="password"
                placeholder="enter password"
                validations={['isPassword']}
              />
            </div>
          </Validation.components.Form>
          <div>
            <button type="submit" onClick={this.submitData.bind(this, 'form')}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}
