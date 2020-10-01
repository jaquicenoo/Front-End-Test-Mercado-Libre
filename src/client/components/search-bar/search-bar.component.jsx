import React from 'react';

import SearchIcon from '../../assets/ic_Search.png';
import MeliIcon from '../../assets/Logo_ML.png';

import './search-bar.styles.scss';

const SearchBar = () => {
	return (
		<div className='search-bar-container'>
			<img className='meli-icon' src={MeliIcon} alt='meli-logo'></img>
			<div className='input-container'>
				<input
					className='search-input'
					placeholder='Nunca dejes de buscar'
				></input>
				<img src={SearchIcon} alt='search-icon'></img>
			</div>
		</div>
	);
};

export default SearchBar;
