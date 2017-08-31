import React from 'react';
import ReactDOM from 'react-dom';
import appConstants from '../../app-constants/appConstants';
import Select from 'react-select';

export default class SelectComponent extends React.Component {
    constructor(props) {
        super(props);
        this.closeCountrySelectList = this.closeCountrySelectList.bind(this);
        this.state = {
            countryList : appConstants.country,
            showcountryList: false, //initial state of dropdown
            options: [ { value: 'one', label: 'One' },
                       { value: 'two', label: 'Two' }
                     ]
        };
    }

   componentWillMount () {
      document.addEventListener('click',this.closeCountrySelectList);
   }

   componentWillUnmount () {
      document.removeEventListener('click',this.closeCountrySelectList);
   }

   openCountrySelectList () {
       this.setState({
          showcountryList: true,
       });
   }

   selectCountry (country) {
       this.refs.countryInput.value = country.name; //storing the clicked value in input
       this.setState({
           showcountryList: false, //close the list
       });
   }

    closeCountrySelectList (event) { //code for closing the selectList
        const area = ReactDOM.findDOMNode(this.refs.selectionarea); //react function to calculate the selectionArea
        if(area && !area.contains(event.target)) { // except area and avoid event.target area
            this.setState({
                showcountryList: false, //close the list
            });
        }
    }

    handleSelectOnChange () {
        console.log('hi');
    }

    render() {
        //need to implement autocomplete functionality for showing countryList
        let countryListArray = this.state.countryList;
        return (
            <div className="App">
                <div className="App-header">
                    <h2>REACT Custom SELECT DROPDWON</h2>
                    <div className="libryarySelect">
                      RECACT Select library
                      <Select
                          name="form-field-name"
                          value="one"
                          options={this.state.options}
                          onChange={this.handleSelectOnChange.bind(this)}
                      />
                    </div>
                    <div ref='selectionarea' className='selectionarea'>
                        <input
                          type="text"
                          ref="countryInput"
                          placeholder="Select your Country"
                          onFocus={this.openCountrySelectList.bind(this)}
                        />
                        {this.state.showcountryList &&
                            <ul className='contryListing'>
                              {countryListArray.map(country =>
                                <li
                                  key={Math.random()}
                                  onClick={this.selectCountry.bind(this,country)}>{country.name}</li>)}
                            </ul>
                        }
                    </div>
                </div>
            </div>
        );
  }
}
