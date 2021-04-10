import React, { useState, useEffect } from "react";
import LeftSidebar from "../LeftSidebar/LeftSidebar";
import "./Body.css";
import Rightsidebar from "../RightSidebar/Rightsidebar";
import MainBody from "../MainBody/MainBody";
import SearchIcon from "@material-ui/icons/Search";

export default function Body({data}) {
	return (
		<div className="body">
			<LeftSidebar />
			<div className="body__details">
				<div className="body__searchBar">
					<input
						name="search"
						type="search"
						placeholder="Search for products..."
					/>
					<div className="body__searchBar-icon">
						<SearchIcon />
					</div>
				</div>
				<h2>Electronics</h2>
				{data.map((product) => (
					<MainBody
						name={product.productName}
						price={product.productPrice}
						productId={product.id}
					/>
				))}
			</div>
			<Rightsidebar />
		</div>
	);
}
