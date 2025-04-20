'use client';
import * as React from 'react';
import {Sidebar} from './Sidebar';
import {Searchbar} from './SearchBar';
import {Trending} from './Trending';
import {RecommendedForYou} from './RecommendedForYou';

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