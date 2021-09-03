import React from 'react'
import { BiCameraMovie } from 'react-icons/bi';
import { GiPopcorn } from 'react-icons/gi';
import MovieForm from './MovieForm'
import MovieList from './MovieList'
import MovieStatus from './MovieStatus'

const MovieContainer = ()=>{
    return (
        <div className='container'>
            <h1 class="display-2" style={{color:'pink'}}><strong>My Big Movie List <strong style={{color:'black'}}><BiCameraMovie/></strong><GiPopcorn/></strong></h1>
                <div className='row mt-5'>
                    <div className='col-8'>
                        <MovieList/>
                    </div>
                    <div className='col-4'>
                        <MovieForm/>
                        <MovieStatus/>
                    </div>
                </div>
        </div>
    )
}

export default MovieContainer