/**
 * CREATION DATE: 31/05/2021
 * UPDATED DATE: 27/06/2021
 */

import React from "react";
import { Link } from "react-router-dom";

const Play = ({ setMyChoice, turn, cards, health, setScore, setHealth, setTurn, setIsEmp, isEmp, firstSelect, setFirstSelect,
 setResults}) => {

	const setChoice = (e) => 
	{
		setMyChoice(e.target.dataset.id);
	};

	const resetGame = () => 
	{
		setScore(0);
		setHealth(45);
		setTurn(1);
		setFirstSelect(true);
		setResults([]);
	}

	const selectEmp = () => 
	{
		setFirstSelect(false);
		setIsEmp(true);
	}

	const selectSlave = () => 
	{
		setFirstSelect(false);
		setIsEmp(false);
	}

	const IsCurrentlyEmp = () =>
	{
		if( (isEmp && ((turn < 4) || (turn > 6 && turn < 10))) || (isEmp && ((turn > 3 && turn < 7) || (turn > 9))) )
		{
			return (<Link to="/game">
				<img src={require(`./image/e.jpeg`).default} alt="Emperor" data-id="e" onClick={setChoice} className="icon emperor"
				width="123" height="174" />
			</Link>);
		}
		else
		{
			return (<Link to="/game">
				<img src={require(`./image/s.jpeg`).default} alt="Slave" data-id="s" onClick={setChoice} className="icon slave"
				width="123" height="174" />
			</Link>);
		}
	}

	return (
	<div className="play">
		{
			((firstSelect) ? 
				(
					<>
						<h1>Do you want to play Emperor or Slave first?</h1>
						<Link to="/" onClick={selectEmp}>
							<img src={require(`./image/e.jpeg`).default} alt="Emperor" data-id="e" onClick={setChoice} className="icon emperor" width="123" height="174" />
						</Link>
						<Link to="/" onClick={selectSlave}>
							<img src={require(`./image/s.jpeg`).default} alt="Slave" data-id="s" onClick={setChoice} className="icon slave" width="123" height="174" />
						</Link>
					</>
				)
				: 
				(((turn < 13) && (health > 0)) ? 
				(
					<>
						<p>
						<img src={require(`./image/b.jpeg`).default} alt="back" className="icon back" width="123" height="174"/>
						{(cards > 1) ? (
							<img src={require(`./image/b.jpeg`).default} alt="back" className="icon back" width="123" height="174"/>
							) : <span></span>}
						{(cards > 2) ? (
							<img src={require(`./image/b.jpeg`).default} alt="back" className="icon back" width="123" height="174"/>
							) : <span></span>}
						{(cards > 3) ? (
							<img src={require(`./image/b.jpeg`).default} alt="back" className="icon back" width="123" height="174"/>
							) : <span></span>}
						{(cards > 4) ? (
							<img src={require(`./image/b.jpeg`).default} alt="back" className="icon back" width="123" height="174"/>
							) : <span></span>}
						</p>
						<br/>
						<p>
							{(cards > 1) ? (
							<Link to="/game">
								<img src={require(`./image/c.jpeg`).default} alt="Citizen" data-id="c" onClick={setChoice} className="icon citizen" 
								width="123" height="174"/>
							</Link>) : <span></span>}
							{(cards > 2) ? (
							<Link to="/game">
								<img src={require(`./image/c.jpeg`).default} alt="Citizen" data-id="c" onClick={setChoice} className="icon citizen" 
								width="123" height="174"/>
							</Link>) : <span></span>}
							{(cards > 3) ? (
							<Link to="/game">
								<img src={require(`./image/c.jpeg`).default} alt="Citizen" data-id="c" onClick={setChoice} className="icon citizen" 
								width="123" height="174"/>
							</Link>) : <span></span>}
							{(cards > 4) ? (
							<Link to="/game">
								<img src={require(`./image/c.jpeg`).default} alt="Citizen" data-id="c" onClick={setChoice} className="icon citizen" 
								width="123" height="174"/>
							</Link>) : <span></span>}
							<IsCurrentlyEmp />	
						</p>
					</> 
				) : 
				<Link to="/" onClick={resetGame}><button>Play Again</button></Link>))
		}
		
	</div>
	);
};

export default Play;