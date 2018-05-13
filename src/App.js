import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			word: '',
			forbiddenWords: []
		};
	}

	getRandomNumber(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
	}

	getWord() {
		const wordList = [
			'Red',
			'Blue',
			'Chair',
			'Potato',
			'already',
			'although',
			'America',
			'anything',
			'area',
			'ball',
			'beautiful',
			'beginning',
			'Bill',
			'bird',
			'boat',
			'bottom',
			'box',
			'bring',
			'build',
			'building',
			'built',
			'care',
			'carefully',
			'carry',
			'center',
			'check',
			'class',
			'coming',
			'common',
			'complete',
			'dark',
			'deep',
			'distance',
			'doing',
			'dry',
			'easy',
			'either',
			'else',
			'everyone',
			'everything'
		];

		return wordList[this.getRandomNumber(0, wordList.length - 1)];
	}

	getData(word) {
		return axios
			.get(`https://api.datamuse.com/words?rel_trg=${word}`)
			.then(response => {
				const forbiddenWords = response.data.slice(0, 10).map(word => {
					return word.word;
				}, []);

				this.setState(state => {
					return {
						word: word,
						forbiddenWords: forbiddenWords
					};
				});

				return response.data;
			});
	}

	componentDidMount() {
		this.getData(this.getWord());
	}

	render() {
		return (
			<div className="App">
				<p>{this.state.word}</p>
				<ul>
					{this.state.forbiddenWords.map((word, key) => (
						<li key={key}>{word}</li>
					))}
				</ul>
			</div>
		);
	}
}

export default App;
