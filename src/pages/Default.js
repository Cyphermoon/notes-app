import React, { Suspense } from 'react'
import Header from '../components/Header';
import NoteList from '../components/NoteList';
import ErrorBoundary from '../components/ErrorBoundary';
import { RingLoader } from 'react-spinners';


const Default = () => {
    return (
        <>
        <Header />
        <Suspense fallback={<RingLoader />}>
        <ErrorBoundary>
            <NoteList />   
        </ErrorBoundary>
        </Suspense>
        </>
    )
}

export default Default
