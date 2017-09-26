import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'
class Header extends React.Component {

    render(){
        return (
			<nav className="navbar navbar-light bg-light">
				<a class="navbar-brand" href="google.com">
                <img src="/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt=""/>
                Bootstrap
            	</a>
        	</nav>    
		);
    }
}

export default Header