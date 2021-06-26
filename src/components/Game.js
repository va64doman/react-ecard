/**
 * CREATION DATE: 31/05/2021
 * UPDATED DATE: 26/06/2021
 */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Game = ({ score, health, turn, myChoice, bet, cards, isEmp, results, setScore, setHealth,
   setTurn, setCards, setIsEmp, setBet, setResults }) => 

{
	var playerImage, choices;
	const [house, setHouse] = useState("b");
	const [playerWin, setPlayerWin] = useState("");
	const [update, setUpdate] = useState(false);
	const [select, setSelect] = useState(false);
	const [isDone, setIsDone] = useState(false);  

	if(myChoice === "" || myChoice === null)
		playerImage = require(`./image/b.jpeg`).default;
	else
	    playerImage = require(`./image/${myChoice}.jpeg`).default;

	function shuffle(array) 
	{
		for (var i = array.length - 1; i > 0; i--) 
		{
			var j = Math.floor(Math.random() * (i + 1));
			var temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
	}

	const nextGame = () => 
	{
		setHouse();
		if((turn === 4 || turn === 7 || turn === 10) && isDone)
			setIsEmp(!isEmp);
	}

	if(isEmp)
	{
		choices = ["c", "c", "c", "c", "s"];
		for(let i = 0; i < (5 - cards); i++)
		{
			if(choices[i] === "c")
			choices.splice(i, 1);
		}
	}
	else
	{
		choices = ["c", "c", "c", "c", "e"];
		for(let i = 0; i < (5 - cards); i++)
		{
			if(choices[i] === "c")
			choices.splice(i, 1);
		}
	}

	const newHousePick = () => 
	{
		if(!select){
			for(let i = 0; i < 3; i++){
				shuffle(choices);
			}
			var idx = Math.floor(Math.random() * choices.length);
			setHouse(choices[idx]);
			setSelect(true);
		}
	};

	const result = () => 
	{
		if(!update){
			setCards(cards - 1);
			setUpdate(true);
			setIsDone(false);
		}
		if ((myChoice === "e" && house === "c") || (myChoice === "c" && house === "s") || (myChoice === "s" && house === "e")) 
		{
			setTurn(turn + 1);
			setPlayerWin("win");
			setCards(5);
			setScore(score + bet);
			setBet(1);
			setResults([...results, {id: results.length, type: "O", betVal: bet, turn: (isEmp ? "Emperor" : "Slave")}]);
			setIsDone(true);       
		} 
		else if ((myChoice === "e" && house === "s") || (myChoice === "c" && house === "e") || (myChoice === "s" && house === "c")) 
		{
			setTurn(turn + 1);
			setPlayerWin("lose");
			setCards(5);
			setHealth(health - bet);
			setBet(1);
			setResults([...results, {id: results.length, type: "X", betVal: bet, turn: (isEmp ? "Emperor" : "Slave")}]);
			setIsDone(true);
		}
		else if((myChoice === "" || myChoice === null))
		{
			setPlayerWin("reset");
			setScore(0);
			setCards(5);
			setHealth(45);
			setHouse("b");
			setTurn(1);
		}
		else 
		{
			setPlayerWin("draw");
			
			if(cards < 2)
			{
				setTurn(turn + 1);
				setCards(5);
				setIsDone(true);

				if(!isEmp)
				{
					setPlayerWin("win");
					setScore(score + bet);
					setResults([...results, {id: results.length, type: "O", betVal: bet, turn: (isEmp ? "Emperor" : "Slave")}]);
				}
				else
				{
					setPlayerWin("lose");
					setHealth(health - bet);
					setResults([...results, {id: results.length, type: "X", betVal: bet, turn: (isEmp ? "Emperor" : "Slave")}]);
					
				}
				setBet(1);
			}           
		}
	};

	useEffect(() => { newHousePick(); }, []); // eslint-disable-line react-hooks/exhaustive-deps

	useEffect(() => { result(); }, [house]); // eslint-disable-line react-hooks/exhaustive-deps

	return (
	<div className="game">
		<h1>
			Result: {playerWin === "win" && "You Win"}{playerWin === "lose" && "You lose"}{playerWin === "draw" && "Draw"}
			{playerWin === "reset" && "Restart Game"}
		</h1>

		<img src={require(`./image/${house}.jpeg`).default} alt={house} /> <br />
		<img src={playerImage} alt={myChoice} /> <br />

		<Link to="/" onClick={nextGame}><button>Next</button></Link>
	</div>
	);
};

export default Game;