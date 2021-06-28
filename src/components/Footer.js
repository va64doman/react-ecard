/**
 * CREATION DATE: 31/05/2021
 * UPDATED DATE: 26/06/2021
 */

import React, {useState} from "react";
import Modal from 'react-modal';

const Footer = (props) => {

	const resultIds = props.results.map((result) =>
	<td key={result.id}>{result.id + 1}</td> );
	const resultTypes = props.results.map((result) =>
		<td key={result.id}>{result.type}</td>);
	const betVals = props.results.map((result) =>
		<td key={result.id}>{result.betVal}</td>);
	const turns = props.results.map((result) =>
		<td key={result.id}>{result.turn}</td>);
	const [modalIsOpen, setIsOpen] = useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}

	return (
	<div className="footer">
		<table>
			<thead>
				<tr>
					<th>Type</th>
					{turns}
				</tr>
			</thead>
			<tbody>
				<tr>
					<th>Turn</th>
					{resultIds}
				</tr>
				<tr>
					<th>Bet</th>
					{betVals}
				</tr>
				<tr>
					<th>Win</th>
					{resultTypes}
				</tr>
			</tbody>
		</table>
		<button onClick={openModal}>Rules</button>
		<Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        	<h2>Rules</h2>
			<p>
				There are three cards:
				<ul>
					<li>Emperor</li>
					<li>Citizen</li>
					<li>Slave</li>
				</ul>
				The Emperor has ultimate power to give money (ie. most powerful card).
				Citizens cannot disobey him because they want money (i.e. Citizen loses to Emperor).
				The Slave has nothing to lose and has no use of money, therefore the slave can defeat the Emperor 
				(i.e. The Slave loses to the Citizen card but wins over the Emperor card).
				The game is played with one side having four Citizen cards and an Emperor card (Emperor side). 
				The other side having four Citizen cards and a Slave card (Slave side). 
				Since it is much harder for the slave side to win 
				(as Slave cards can only defeat Emperor cards) the players of the Slave side get five times more winnings. 
				Each game is played with 12 matches each match having each player set down one card.
				The 12 matches is separated into 4 groups of rounds, with each group alternating which player is the Emperor Side. 
				Each group of rounds are made of 3 rounds.
				In the first of the 3 rounds the Emperor Side plays a card faced down first, followed by the Slave Side.
				Each card is then revealed and the winner decided.
				If the outcome is a draw then the round continues to a second play with the played cards removed.
				Now the slave side will start by placing a card, followed by the emperor side.
				If this play is a draw again, then the round moves onto the last play of that round - 
				even if it is another draw Here the emperor side will place a card first.
				Once the round is concluded, all played cards are collected and the next round starts, with now the Slave Side 
				playing a card first (even if the previous round ended with the Slave Side placing first).
				If this play is a draw, the round continues to the next play, with the Emperor side placing first.
				Once the second round is concluded, play out the third round starting with the emperor side again.
				Once those 3 rounds are finished the first group of rounds are complete.
				Both players now swap their hands so that the Emperor Side is now the Slave Side, and the Slave side is now the 
				Emperor Side.
				Again, the emperor side plays the first card in the first round (which will be the 4th round overall).
				After the 6th round in total (the 3rd round of the second group of rounds), swap sides once again.
				Do this again after the 9th round in total (after the 3rd round of the second group of rounds.
				Once all 12 rounds have been played, you can determine a winner.
			</p>
        	<button onClick={closeModal}>Close</button>
      	</Modal>
	</div>
	);
};

export default Footer;