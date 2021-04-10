import React from "react";
import "./Footer.css";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import HelpIcon from "@material-ui/icons/Help";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

export default function Footer() {
	return (
		<div>
			<div className="footer__top">
				<div className="footer__top-icons">
					<div className="icon__details">
					<LocalShippingIcon />
					<h3>Fast Delivery</h3>
					</div>
					<div className="icon__details">
					<VerifiedUserIcon />
					<h3>Buyer Protection</h3>
					</div>
					<div className="icon__details">
					<HelpIcon />
					<h3>Customer Support</h3>
					</div>
				</div>
			</div>
			<div className="footer__bottom">
				<h3>STORE DETAILS</h3>
				<h2>Target</h2>
				<p>Cham Towers, Plot 12 Nkruma Rd, Kampala, Ug</p>
                <button className="footer__button"><WhatsAppIcon/> Chat with us</button>
			</div>
		</div>
	);
}
