/**
 * CREATION DATE: 31/05/2021
 * UPDATED DATE: 26/06/2021
 */

import React from "react";

const Header = ({ score, health, turn, cards, bet, firstSelect, setBet }) => {

	const reduceBet = (e) => 
	{
		if(bet > 1)
			setBet(bet - 1);
		document.getElementById("betSpan").innerHTML = bet;
	};

	const addBet = (e) => 
	{
		if(bet < health)
			setBet(bet + 1);
		document.getElementById("betSpan").innerHTML = bet;  
	}

	const PlayGame = () => 
	{
		var element = (<h1>Score: {score}&#9; Health: {health}&#9; {(turn < 13) ? `Turn: ${turn}` : "End of turn"}&#9; Bet: {bet}</h1>);

		if(firstSelect)
		{
			element = (<h1>E-card</h1>);
		}
		
		return element;
	}

	return (
	<div className="header">
		<PlayGame />
		{(cards > 4 && !firstSelect && turn < 13) ? (
		<p>
			<button onClick={reduceBet} className="minus">-</button>
			<span> How much do you want to bet: </span><span id="betSpan">{bet}</span><span>&nbsp;</span>
			<button onClick={addBet} className="plus">+</button>
		</p>
		) : <span></span>}
		
	</div>
	);
};

export default Header;