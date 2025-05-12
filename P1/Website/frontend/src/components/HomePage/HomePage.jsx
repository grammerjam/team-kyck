'use client';
// import * as React from 'react';
import {Sidebar} from '../../utils/Sidebar';
import {Searchbar} from '../../utils/SearchBar';
import {Trending} from '../../utils/Trending';
import {RecommendedForYou} from '../../utils/RecommendedForYou';

export default function Home() {

    return (
    <> 
        <Sidebar />
        <Searchbar />
        <Trending />
        <RecommendedForYou />
    </>
    )
}