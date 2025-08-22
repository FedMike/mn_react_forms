import React from "react";

class Form extends React.Component {
    state = {
        firstName: '',
        email: '',
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }
    
    validateName = () => {
        if (this.state.firstName.length < 5) {
            alert('Your first name cant\'t be less than 5 letters');
        }
    }

    validateEmail = (mail) => {
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)) {
            alert('email is not valid')
        }
    }

    render() {
        const {firstName, email} = this.state
        return <div>
            <input 
                type="text" 
                name="firstName"
                placeholder="firstName"
                value={firstName}
                onChange={this.handleChange}
                onBlur={this.validateName}
            />
            <input 
                type="email" 
                name="email"
                placeholder="email"
                value={email}
                onChange={this.handleChange}
                onBlur={this.validateEmail}
            />
        </div>
    }
};

export {Form};