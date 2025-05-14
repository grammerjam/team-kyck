'use client';
// import * as React from 'react';
import style from './SearchBar.module.css';

export function Searchbar() {
    return (
        <div className={style.searchContainer}>
            <img
                src="assets/icon-search.svg"
                alt="Search Icon"
                className={style.searchIcon}
            />
            <input
                type="text"
                placeholder="Search for movies or TV series"
                className={style.searchbar}
            />
        </div>
    );
}