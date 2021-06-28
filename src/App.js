/**
 * CREATION DATE: 31/05/2021
 * UPDATED DATE: 26/06/2021
 */

import './App.css';
import React, { useState } from "react";
import Header from "./components/Header";
import Play from "./components/Play";
import Game from "./components/Game";
import Footer from "./components/Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {

	const [myChoice, setMyChoice] = useState("");
	const [score, setScore] = useState(0);
	const [health, setHealth] = useState(45);
	const [turn, setTurn] = useState(1);
	const [bet, setBet] = useState(1);
	const [cards, setCards] = useState(5);
	const [isEmp, setIsEmp] = useState(true);
	const [results, setResults] = useState([]);
	const [firstSelect, setFirstSelect] = useState(true);

	return (
	<>
		<div className="container">
		<Header score={score} health={health} turn={turn} bet={bet} setBet={setBet} cards={cards} firstSelect={firstSelect} />
		<BrowserRouter>
			<Switch>
			<Route exact path="/">
				<Play setMyChoice={setMyChoice} turn={turn} cards={cards} health={health} setScore={setScore} setHealth={setHealth} 
				setTurn={setTurn} setIsEmp={setIsEmp} isEmp={isEmp} firstSelect={firstSelect} setFirstSelect={setFirstSelect}
				setResults={setResults} />
			</Route>
			<Route path="/game">
				<Game myChoice={myChoice} score={score} health={health} setScore={setScore} 
				setHealth={setHealth} setTurn={setTurn} turn={turn} bet={bet} cards={cards}
				setCards={setCards} isEmp={isEmp} setIsEmp={setIsEmp} setBet={setBet}
				results={results} setResults={setResults} />
			</Route>
			</Switch>
		</BrowserRouter>
		</div>
		<Footer results={results} />
	</>
	);
}

export default App;
