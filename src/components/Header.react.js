import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'
import Logo from '../img/logo.svg';

class Header extends React.Component {

    render(){
        return (
			<nav className="navbar navbar-light bg-light">
				<a class="navbar-brand" >
                <img src={Logo} class="d-inline-block align-top" alt="App-brand" width="150px" />
            	</a>
        	</nav>    
		);
    }
}

export default Header