class CheckBox extends React.Component {
    constructor () {
        super();
        this.state = {
            boxIsChecked: false,
        };
        this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this)
    }

    handleCheckBoxChange (event)  {
     //you code
         this.setState({
             boxIsChecked: !this.state.boxIsChecked
         });
        if (event.target.checked) {
            this.props.filterlist();
        }
        else {
            console.log('box is false');
            this.props.resetList();
        }
    }

    render () {
        return (
            <div>
                <input
                    type="checkbox"
                    name="person"
                    checked={this.state.boxIsChecked}
                    onChange={this.handleCheckBoxChange.bind(this)}
                />
                <label>{this.props.checkboxText}</label>
            </div>
        );
    }
}
