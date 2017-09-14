import React, {Component, PropTypes} from 'react';
import appConstants from '../../app-constants/appConstants.js';
import BreadCrumb from '../shared/breadcrumb.js';
import Validation from 'react-validation';
require('../../utils/validation.js');
var serialize = require('form-serialize');

export default class Index extends React.Component {

    constructor() {
        super();
        this.state = {

        };
        this.submitData = this.submitData.bind(this);
    }

    submitData(refName, event) {
        event.preventDefault();
        let formStatus = this.refs.form.validateAll(true);
        if (formStatus) {
            let formData = serialize(document.querySelector('#loginFrom'), { hash: true });
        }
    }

    render() {
       //submit button should notbe enabled if
        return (
            <div className="container">
                <div className="topwrap clearfix">
                    <BreadCrumb link={appConstants.breadCrumb.loginLinks}/>
                </div>
                <div>
                    <h3>USer login Page</h3>
                    <Validation.components.Form ref='form'  id='loginForm'>
                        <div>
                            <Validation.components.Input
                                value=''
                                name='email'
                                placeholder='enter email'
                                validations={['required', 'email']}
                            />
                        </div>
                        <div>
                            <Validation.components.Input
                                type='password'
                                value=''
                                name='password'
                                placeholder='enter password'
                                validations={['isPassword']}
                            />
                        </div>
                    </Validation.components.Form>
                    <div>
                        <button type="submit" onClick={this.submitData.bind(this, 'form')}>Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}
