/**
 * CREATION DATE: 31/05/2021
 * UPDATED DATE: 26/06/2021
 */

import React from "react";

const Footer = (props) => {

	const resultIds = props.results.map((result) =>
	<td key={result.id}>{result.id + 1}</td> );
	const resultTypes = props.results.map((result) =>
		<td key={result.id}>{result.type}</td>);
	const betVals = props.results.map((result) =>
		<td key={result.id}>{result.betVal}</td>);
	const turns = props.results.map((result) =>
		<td key={result.id}>{result.turn}</td>);

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
	</div>
	);
};

export default Footer;