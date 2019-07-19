import React from "react";
import {withRouter} from 'react-router-dom'

const Header = props => {
	return (
		<div onClick={() => props.history.push(`/`)} style={{ position: "fixed", top: "0", width: "100vw", height: "50px", background: "#3dc4fc" }}>
			<i className="fas fa-home" />
		</div>
	);
};

export default withRouter(Header);
