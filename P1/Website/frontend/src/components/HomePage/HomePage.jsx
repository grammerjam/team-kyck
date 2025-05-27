'use client';
// import * as React from 'react';
import {Sidebar} from '../../utils/Sidebar';
import {Searchbar} from '../../utils/SearchBar';
import {Trending} from '../../utils/Trending';
import {RecommendedForYou} from '../../utils/RecommendedForYou';
import { MainLayout } from '../../layouts/MainLayout';

export default function Home() {

    return (
    <> 
        <MainLayout>
            
        <Searchbar />
        <Trending />
        <RecommendedForYou />
        </MainLayout>
    </>
    )
}