import React,{ Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state ={
      text: 'Job Inquiries'
    }
  }

  sendEmail() {
    window.open('mailto:pasdesujin@gmail.com?subject=Job Inquiries','_self');
  }

  handleMouseEnter() {
    this.setState({text:'pasdesujin@gmail.com'})
  }

  handleMouseLeave() {
    this.setState({text: 'Job Inquiries'})
  }

  render() {
    return(
      <nav className="navbar navbar-inverse navbar-static-top">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">Sujin Lee</a>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#" onClick={this.sendEmail.bind(this)} onMouseEnter={this.handleMouseEnter.bind(this)} onMouseLeave={this.handleMouseLeave.bind(this)}>
                {this.state.text} <i className="fa fa-envelope-o fa-lg" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;