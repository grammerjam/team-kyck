'use client';
import * as React from 'react';
import {Sidebar} from './_components/SideBar/Sidebar';
import {Searchbar} from './_components/SearchBar/SearchBar';
import {Trending} from './_components/Trending/Trending';
import {RecommendedForYou} from './_components/RecommendedForYou/RecommendedForYou';

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