import React from "react";

export const Navbar = () => {
	return (
		<div className="container-fluid navigation">
			<div className="row justify-content-between nav">
				<div className="col-md-2 ">
					<p className="logo">LOGO</p>
				</div>
				<div className="col-md-6 row">
					<p className="col-md-1">one</p>
					<p className="col-md-1">two</p>
				</div>
				<div className="col-md-3 row">
					<p className="col-md-3">ig</p>
					<p className="col-md-3">fb</p>
				</div>
			</div>
		</div>
	);
};
