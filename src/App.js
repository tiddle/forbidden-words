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
			'America',
			'anything',
			'ball',
			'beautiful',
			'Bill',
			'bird',
			'boat',
			'bottom',
			'box',
			'build',
			'care',
			'careful',
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
			'everyone',
			'everything',
			'time',
			'year',
			'people',
			'way',
			'day',
			'man',
			'thing',
			'woman',
			'life',
			'child',
			'world',
			'school',
			'state',
			'family',
			'student',
			'group',
			'country',
			'problem',
			'hand',
			'part',
			'place',
			'case',
			'week',
			'company',
			'system',
			'program',
			'question',
			'work',
			'government',
			'number',
			'night',
			'point',
			'home',
			'water',
			'room',
			'mother',
			'area',
			'money',
			'story',
			'fact',
			'month',
			'lot',
			'right',
			'study',
			'book',
			'eye',
			'job',
			'word',
			'business',
			'issue',
			'side',
			'kind',
			'head',
			'house',
			'service',
			'friend',
			'father',
			'power',
			'hour',
			'game',
			'line',
			'end',
			'member',
			'law',
			'car',
			'city',
			'community',
			'name',
			'president',
			'team',
			'minute',
			'idea',
			'kid',
			'body',
			'information',
			'back',
			'parent',
			'face',
			'others',
			'level',
			'office',
			'door',
			'health',
			'person',
			'art',
			'war',
			'history',
			'party',
			'result',
			'change',
			'morning',
			'reason',
			'research',
			'girl',
			'guy',
			'moment',
			'air',
			'teacher',
			'force',
			'education'
		];

		return wordList[this.getRandomNumber(0, wordList.length - 1)];
	}

	getData(word) {
		return axios
			.get(`https://api.datamuse.com/words?rel_jjb=${word}`)
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
