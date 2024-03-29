import React, { Component } from 'react';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            phone: "",
            location: "",
            github:"",
            website: "",
            desc:"",
         }
    }
    send = () =>{
        let profile = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            location: this.state.location,
            github:this.state.github,
            website: this.state.website,
            desc:this.state.desc,
        };
        this.props.setProfile(profile);
    }

    
    
    render() { 
        return ( 
            <div className="tab-pane" id="profile" role="tabpanel">
                                                
                <h1 className="form-heading">
                    Basic Information
                </h1>
                <div className="form-row">
                    <input type="text" id="form-name" className="form-textbox" onChange={(event) => { this.setState({ name: event.target.value },()=>{this.send()});}} />
                    <label htmlFor="form-name" className="form-label">Full Name</label>
                </div>
                <div className="form-row">
                    <input type="text" id="form-email" className="form-textbox" onChange={(event) => { this.setState({ email: event.target.value }, () => { this.send() });}}  />
                    <label htmlFor="form-email" className="form-label">Email address</label>
                </div>
                <div className="form-row">
                    <input type="phone" id="form-phone" className="form-textbox" onChange={(event) => { this.setState({ phone: event.target.value }, () => { this.send() });}} />
                    <label htmlFor="form-phone" className="form-label">Phone Number</label>
                </div>
                <div className="form-row">
                    <input type="location" id="form-location" className="form-textbox" onChange={(event) => { this.setState({ location: event.target.value }, () => { this.send() });}} />
                    <label htmlFor="form-location" className="form-label">Location</label>
                </div>
                <div className="form-row">
                    <input type="website" id="form-github" className="form-textbox" onChange={(event) => { this.setState({ github: event.target.value }, () => { this.send() });}}  />
                    <label htmlFor="form-github" className="form-label">Github Link</label>
                </div>
                <div className="form-row">
                    <input type="website" id="form-website" className="form-textbox" onChange={(event) => { this.setState({ website: event.target.value }, () => { this.send() });}}  />
                    <label htmlFor="form-website" className="form-label">Website Link</label>
                </div>
                <br />
                <div className="form-row">
                    <textarea id="form-desc" className="form-textbox" onChange={(event) => { this.setState({ desc: event.target.value }, () => { this.send() });}}  />
                    <label htmlFor="form-desc" className="form-label">Brief Description about Yourself</label>
                </div>
            </div>
         );
    }
}
 
export default Profile;