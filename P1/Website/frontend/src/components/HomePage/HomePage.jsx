'use client';
// import * as React from 'react';
import {Searchbar} from '../../utils/SearchBar';
import {Trending} from '../../utils/Trending';
import {RecommendedForYou} from '../../utils/RecommendedForYou';
import { MainLayout } from '../../layouts/MainLayout';
import { useUser } from '../../context/user';
import LandingPage from '../LandingPage/LandingPage';

export default function Home() {
    const { user } = useUser()

    return (
    <>
        {user ? (<> 
            <MainLayout>
            <Searchbar />
            <Trending />
            <RecommendedForYou />
            </MainLayout>
        </>):(<LandingPage/>)}
    </>)
}