/**
 * CREATION DATE: 31/05/2021
 * UPDATED DATE: 26/06/2021
 */

import React from "react";

const Header = ({ score, health, turn, cards, bet, setBet }) => {

	const reduceBet = (e) => {
	if(bet > 1)
		setBet(bet - 1);
	document.getElementById("betSpan").innerHTML = bet;
	};

	const addBet = (e) => {
	if(bet < health)
		setBet(bet + 1);
	document.getElementById("betSpan").innerHTML = bet;  
	}

	return (
	<div className="header">
		<h1>Score: {score}&#9; Health: {health}&#9; {(turn < 13) ? `Turn: ${turn}` : "End of turn"}&#9; Bet: {bet}</h1>
		{(cards > 4) ? (
		<p>
			<button onClick={reduceBet} className="minus">-</button>
			<span>&nbsp;</span>How much do you want to bet: <span id="betSpan">{bet}</span><span>&nbsp;</span>
			<button onClick={addBet} className="plus">+</button>
		</p>
		) : <span>&nbsp;</span>}
		
	</div>
	);
};

export default Header;