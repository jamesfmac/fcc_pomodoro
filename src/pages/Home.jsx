import React from 'react'
import Clock from '../components/Clock'

const Home = () =>{
    return(
        <div className="bg-gray-600 h-screen">
            <main className="flex justify-center items-center h-full">
            <Clock />
            </main>
        </div>

    )
}
export default Home