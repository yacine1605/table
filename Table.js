import { useState } from 'react';
import { v4 as uuid4 } from 'uuid';
const Table = () => {
	const [array, setArray] = useState([]);
	const [input, setInput] = useState({
		name1: '',
		name2: '',
		name3: '',
		name4: '',
		name5: '',
		name6: '',
		name7: '',
		name8: '',
		name9: '',
		name10: '',
		name11: '',
		name12: '',
		name13: '',
		name14: '',
		name15: '',
		name16: '',
		name17: '',
		name18: '',
		name19: '',
		name20: '',
		name21: '',
		name22: '',
		name23: '',
		name24: '',
		name25: '',
		name26: '',
		name27: '',
		name28: '',
		name29: '',
		name30: '',
		name31: '',
		name32: '',
		name33: '',
		name34: '',
		name35: '',
		name36: '',
		name37: '',
		name38: '',
		name39: '',
		name40: '',
		name41: '',
		name42: '',
		name43: '',
		name44: '',
		name45: '',
		name46: '',
		name47: '',
		name48: '',
		name49: '',
		name50: '',
		name51: '',
		name52: '',
		name53: '',
		name54: '',
		name55: '',
		name56: '',
		name57: '',
		name58: '',
		name59: '',
		name60: '',
		name61: '',
		name62: '',
		name63: '',
		name64: '',
		name65: '',
		name66: '',
		name67: '',
		name68: '',
		name69: '',
		name70: '',
		name71: '',
	});

	return (
		<div>
			<button> log out</button>
			<h5 style={{ marginLeft: '5%', paddingBottom: '1%' }}> DPRH :{} </h5>
			<h5 style={{ marginLeft: '5%', paddingBottom: '2%' }}> Port :{} </h5>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					if (input) {
						setArray([...array, { id: uuid4(), task: input.name }]);
						setInput('');
					}
				}}
			>
				<table className="tg">
					<thead>
						<tr>
							<th className="tg-0pky" rowSpan="2">
								<br />
								Espece
								<br />
							</th>
							<th className="tg-0pky" rowSpan="2">
								Production
								<br /> Totale(T)
							</th>
							<th className="tg-0pky" colSpan="3">
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prix au
								debarquement&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							</th>
							<th className="tg-0pky" colSpan="3">
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prix de la
								consommation&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							</th>
							<th className="tg-0pky" rowSpan="2">
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;observe&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							</th>
						</tr>
						<tr>
							<td className="tg-f9cb"> Min</td>
							<td className="tg-f9cb"> Moyen</td>
							<td className="tg-f9cb"> Max</td>
							<td className="tg-f9cb">Min</td>
							<td className="tg-f9cb">Moyen</td>
							<td className="tg-f9cb">max</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="tg-0pky">Allache</td>
							<td className="tg-73oq">
								<input
									placeholder="enter a number"
									onChange={(e) => {
										setInput(e.target.value);
										console.log(input.name1);
									}}
									value={input.name1}
								/>
							</td>
							<td className="tg-f8tv">
								<input
									placeholder="enter a number"
									onChange={(e) => {
										setInput(e.target.value);
									}}
									value={input.name2}
								/>
							</td>
							<td className="tg-0pky">
								{' '}
								<input
									placeholder="enter a number"
									onChange={(e) => {
										setInput(e.target.value);
									}}
									value={input.name3}
								/>
							</td>
							<td className="tg-0pky">
								{' '}
								<input
									placeholder="enter a number"
									onChange={(e) => {
										setInput(e.target.value);
									}}
									value={input.name70}
								/>
							</td>
							<td className="tg-0pky">
								{' '}
								<input
									placeholder="enter a number"
									onChange={(e) => {
										setInput(e.target.value);
									}}
									value={input.name4}
								/>
							</td>
							<td className="tg-0pky">
								{' '}
								<input
									placeholder="enter a number"
									onChange={(e) => {
										setInput(e.target.value);
									}}
									value={input.name5}
								/>
							</td>
							<td className="tg-0pky">
								<input
									placeholder="enter a number"
									onChange={(e) => {
										setInput(e.target.value);
									}}
									value={input.name6}
								/>
							</td>
							<td style={{ paddingTop: '10%' }} className="tg-0pky" rowSpan="10">
								<input
									placeholder="enter a number"
									style={{ paddingBottom: '25px' }}
									onChange={(e) => {
										setInput(e.target.value);
									}}
									value={input.name71}
								></input>
							</td>
						</tr>
						<tr>
							<td className="tg-0pky">Achois</td>
							<td className="tg-73oq">
								<input
									placeholder="enter a number"
									onChange={(e) => {
										setInput(e.target.value);
									}}
									value={input.name7}
								/>
							</td>
							<td className="tg-f8tv">
								<input
									placeholder="enter a number"
									onChange={(e) => {
										setInput(e.target.value);
									}}
									value={input.name8}
								/>
							</td>
							<td className="tg-0pky">
								<input
									placeholder="enter a number"
									onChange={(e) => {
										setInput(e.target.value);
									}}
									value={input.name9}
								/>
							</td>
							<td className="tg-0pky">
								<input
									placeholder="enter a number"
									onChange={(e) => {
										setInput(e.target.value);
									}}
									value={input.name10}
								/>
							</td>
							<td className="tg-0pky">
								<input
									placeholder="enter a number"
									onChange={(e) => {
										setInput(e.target.value);
									}}
									value={input.name11}
								/>
							</td>
							<td className="tg-affx">
								<input
									placeholder="enter a number"
									onChange={(e) => {
										setInput(e.target.value);
									}}
									value={input.name12}
								/>
							</td>
							<td className="tg-y698">
								<input
									placeholder="enter a number"
									onChange={(e) => {
										setInput(e.target.value);
									}}
									value={input.name13}
								/>
							</td>
						</tr>
						<tr>
							<td className="tg-0pky">Sardiine</td>
							<td className="tg-73oq">
								<input
									placeholder="enter a number"
									onChange={(e) => {
										setInput(e.target.value);
									}}
									value={input.name14}
								/>
							</td>
							<td className="tg-f8tv">
								<input
									placeholder="enter a number"
									onChange={(e) => {
										setInput(e.target.value);
									}}
									value={input.name15}
								/>
							</td>
							<td className="tg-0pky">
								<input
									placeholder="enter a number"
									onChange={(e) => {
										setInput(e.target.value);
									}}
									value={input.name16}
								/>
							</td>
							<td className="tg-0pky">
								<input
									placeholder="enter a number"
									onChange={(e) => {
										setInput(e.target.value);
									}}
									value={input.name17}
								/>
							</td>
							<td className="tg-0pky">
								<input
									placeholder="enter a number"
									onChange={(e) => {
										setInput(e.target.value);
									}}
									value={input.name18}
								/>
							</td>
							<td className="tg-0pky">
								<input
									placeholder="enter a number"
									onChange={(e) => {
										setInput(e.target.value);
									}}
									value={input.name19}
								/>
							</td>
							<td className="tg-0pky">
								<input
									placeholder="enter a number"
									onChange={(e) => {
										setInput(e.target.value);
									}}
									value={input.name20}
								/>
							</td>
						</tr>
						<tr>
							<td className="tg-0pky">Saurel</td>
							<td className="tg-73oq">
								<input
									placeholder="enter a number"
									onChange={(e) => {
										setInput(e.target.value);
									}}
									value={input.name21}
								/>
							</td>
							<td className="tg-f8tv">
								<input
									placeholder="enter a number"
									onChange={(e) => {
										setInput(e.target.value);
									}}
									value={input.name22}
								/>
							</td>
							<td className="tg-0pky">
								<input
									placeholder="enter a number"
									onChange={(e) => {
										setInput(e.target.value);
									}}
									value={input.name23}
								/>
							</td>
							<td className="tg-0pky">
								<input
									placeholder="enter a number"
									onChange={(e) => {
										setInput(e.target.value);
									}}
									value={input.name24}
								/>
							</td>
							<td className="tg-0pky">
								<input
									onChange={(e) => {
										setInput(e.target.value);
									}}
									placeholder="enter a number"
									value={input.name25}
								/>
							</td>
							<td className="tg-0pky">
								<input
									onChange={(e) => {
										setInput(e.target.value);
									}}
									placeholder="enter a number"
									value={input.name26}
								/>
							</td>
							<td className="tg-0pky">
								<input
									onChange={(e) => {
										setInput(e.target.value);
									}}
									placeholder="enter a number"
									value={input.name27}
								/>
							</td>
						</tr>
						<tr>
							<td className="tg-0pky">Rouget</td>
							<td className="tg-73oq">
								<input
									placeholder="enter a number"
									onChange={(e) => {
										setInput(e.target.value);
									}}
									value={input.name28}
								/>
							</td>
							<td className="tg-f8tv">
								<input
									onChange={(e) => {
										setInput(e.target.value);
									}}
									placeholder="enter a number"
									value={input.name29}
								/>
							</td>
							<td className="tg-0pky">
								<input
									onChange={(e) => {
										setInput(e.target.value);
									}}
									placeholder="enter a number"
									value={input.name30}
								/>
							</td>
							<td className="tg-0pky">
								<input
									placeholder="enter a number"
									onChange={(e) => {
										setInput(e.target.value);
									}}
									value={input.name31}
								/>
							</td>
							<td className="tg-0pky">
								<input
									onChange={(e) => {
										setInput(e.target.value);
									}}
									value={input.name32}
									placeholder="enter a number"
								/>
							</td>
							<td className="tg-0pky">
								<input
									placeholder="enter a number"
									onChange={(e) => {
										setInput(e.target.value);
									}}
									value={input.name33}
								/>
							</td>
							<td className="tg-0pky">
								<input
									placeholder="enter a number"
									onChange={(e) => {
										setInput(e.target.value);
									}}
									value={input.name34}
								/>
							</td>
						</tr>
						<tr>
							<td className="tg-0pky">Pageot</td>
							<td className="tg-73oq">
								<input
									onChange={(e) => {
										setInput(e.target.value);
									}}
									placeholder="enter a number"
									value={input.name35}
								/>
							</td>
							<td className="tg-f8tv">
								<input
									onChange={(e) => {
										setInput(e.target.value);
									}}
									placeholder="enter a number"
									value={input.name36}
								/>
							</td>
							<td className="tg-0pky">
								<input
									onChange={(e) => {
										setInput(e.target.value);
									}}
									placeholder="enter a number"
									value={input.name37}
								/>
							</td>
							<td className="tg-0pky">
								<input
									onChange={(e) => {
										setInput(e.target.value);
									}}
									placeholder="enter a number"
									value={input.name38}
								/>
							</td>
							<td className="tg-0pky">
								<input
									onChange={(e) => {
										setInput(e.target.value);
									}}
									placeholder="enter a number"
									value={input.name39}
								/>
							</td>
							<td className="tg-0pky">
								<input
									onChange={(e) => {
										setInput(e.target.value);
									}}
									placeholder="enter a number"
									value={input.name40}
								/>
							</td>
							<td className="tg-0pky">
								<input
									onChange={(e) => {
										setInput(e.target.value);
									}}
									placeholder="enter a number"
									value={input.name41}
								/>
							</td>
						</tr>
						<tr>
							<td className="tg-0pky">merlan</td>
							<td className="tg-73oq">
								<input
									onChange={(e) => {
										setInput(e.target.value);
									}}
									placeholder="enter a number"
									value={input.name42}
								/>
							</td>
							<td className="tg-f8tv">
								<input
									onChange={(e) => {
										setInput(e.target.value);
									}}
									placeholder="enter a number"
									value={input.name43}
								/>
							</td>
							<td className="tg-0pky">
								<input
									onChange={(e) => {
										setInput(e.target.value);
									}}
									placeholder="enter a number"
									value={input.name44}
								/>
							</td>
							<td className="tg-0pky">
								<input
									onChange={(e) => {
										setInput(e.target.value);
									}}
									placeholder="enter a number"
									value={input.name45}
								/>
							</td>
							<td className="tg-0pky">
								<input
									onChange={(e) => {
										setInput(e.target.value);
									}}
									placeholder="enter a number"
									value={input.name46}
								/>
							</td>
							<td className="tg-0pky">
								<input
									onChange={(e) => {
										setInput(e.target.value);
									}}
									placeholder="enter a number"
									value={input.name47}
								/>
							</td>
							<td className="tg-0pky">
								<input
									onChange={(e) => {
										setInput(e.target.value);
									}}
									placeholder="enter a number"
									value={input.name48}
								/>
							</td>
						</tr>
						<tr>
							<td className="tg-0pky">Espadon</td>
							<td className="tg-73oq">
								<input
									onChange={(e) => {
										setInput(e.target.value);
									}}
									placeholder="enter a number"
									value={input.name49}
								/>
							</td>
							<td className="tg-f8tv">
								<input
									onChange={(e) => {
										setInput(e.target.value);
									}}
									placeholder="enter a number"
									value={input.name50}
								/>
							</td>
							<td className="tg-0pky">
								<input
									onChange={(e) => {
										setInput(e.target.value);
									}}
									placeholder="enter a number"
									value={input.name51}
								/>
							</td>
							<td className="tg-0pky">
								<input
									placeholder="enter a number"
									onChange={(e) => {
										setInput(e.target.value);
									}}
									value={input.name52}
								/>
							</td>
							<td className="tg-0pky">
								<input
									placeholder="enter a number"
									onChange={(e) => {
										setInput(e.target.value);
									}}
									value={input.name53}
								/>
							</td>
							<td className="tg-0pky">
								<input
									onChange={(e) => {
										setInput(e.target.value);
									}}
									placeholder="enter a number"
									value={input.name54}
								/>
							</td>
							<td className="tg-0pky">
								<input
									onChange={(e) => {
										setInput(e.target.value);
									}}
									placeholder="enter a number"
									value={input.name55}
								/>
							</td>
						</tr>
						<tr>
							<td className="tg-0pky">Crevette blanche</td>
							<td className="tg-73oq">
								<input
									onChange={(e) => {
										setInput(e.target.value);
									}}
									placeholder="enter a number"
									value={input.name56}
								/>
							</td>
							<td className="tg-f8tv">
								<input
									onChange={(e) => {
										setInput(e.target.value);
									}}
									placeholder="enter a number"
									value={input.name57}
								/>
							</td>
							<td className="tg-0pky">
								<input
									onChange={(e) => {
										setInput(e.target.value);
									}}
									placeholder="enter a number"
									value={input.name58}
								/>
							</td>
							<td className="tg-0pky">
								<input
									onChange={(e) => {
										setInput(e.target.value);
									}}
									placeholder="enter a number"
									value={input.name59}
								/>
							</td>
							<td className="tg-0pky">
								<input
									onChange={(e) => {
										setInput(e.target.value);
									}}
									placeholder="enter a number"
									value={input.name60}
								/>
							</td>
							<td className="tg-0pky">
								<input
									onChange={(e) => {
										setInput(e.target.value);
									}}
									placeholder="enter a number"
									value={input.name61}
								/>
							</td>
							<td className="tg-0pky">
								<input
									onChange={(e) => {
										setInput(e.target.value);
									}}
									placeholder="enter a number"
									value={input.name62}
								/>
							</td>
						</tr>
						<tr>
							<td className="tg-0pky">Crevette Rouge</td>
							<td className="tg-73oq">
								<input
									onChange={(e) => {
										setInput(e.target.value);
									}}
									placeholder="enter a number"
									value={input.name63}
								/>
							</td>
							<td className="tg-f8tv">
								<input
									onChange={(e) => {
										setInput(e.target.value);
									}}
									placeholder="enter a number"
									value={input.name64}
								/>
							</td>
							<td className="tg-0pky">
								<input
									onChange={(e) => {
										setInput(e.target.value);
									}}
									placeholder="enter a number"
									value={input.name65}
								/>
							</td>
							<td className="tg-0pky">
								<input
									onChange={(e) => {
										setInput(e.target.value);
									}}
									placeholder="enter a number"
									value={input.name66}
								/>
							</td>
							<td className="tg-0pky">
								<input
									onChange={(e) => {
										setInput(e.target.value);
									}}
									placeholder="enter a number"
									value={input.name67}
								/>
							</td>
							<td className="tg-0pky">
								<input
									onChange={(e) => {
										setInput(e.target.value);
									}}
									placeholder="enter a number"
									value={input.name68}
								/>
							</td>
							<td className="tg-0pky">
								<input
									onChange={(e) => {
										setInput(e.target.value);
									}}
									placeholder="enter a number"
									value={input.name69}
								/>
							</td>
						</tr>
					</tbody>
				</table>
				<button type="submit">Submit form </button>
			</form>
		</div>
	);
};

export default Table;
