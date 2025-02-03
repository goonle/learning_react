import React, { Component } from 'react'

export default class SearchBar extends Component {

    constructor(props){
        super(props);

        this.state = {term: ''};
        this.onInputChange = this.onInputChange.bind(this)
    }

    onInputChange(event){
        console.log(event.target.value);
        this.setState({term: event.target.value})
    }

    onFormSubmit(event){
        // If we enter or click submit button When we use form tag, Basic html function form submit works. 
        // It send a form data to server and refresh page.
        // But it is not what we want. Beacause we didn't make a function for submit button or enter btn.
        // So we need to prevent Default Event 
        event.preventDefault();
    }

    render(){
        return (
            <form 
                onSubmit={this.onFormSubmit}
                className="input-group">
                <input 
                    placeholder='Get a five-dat forecast in your favorite cities'
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        )
    }
}