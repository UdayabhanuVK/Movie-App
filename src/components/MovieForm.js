import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addMovie } from '../action/MovieActions'

const MovieForm = ()=>{
    
    const dispatch = useDispatch()
    const [movieTitle, setMovieTitle] = useState('')
    const [movieRanking, setMovieRanking] = useState('')

    const handleRankingChange = (e)=>{
        const ranking = e.target.value
        setMovieRanking(ranking)
    }

    const handleTitleChange = (e)=>{
        const title = e.target.value
        setMovieTitle(title)
    }

    const handleSubmit =(e) =>{
        e.preventDefault()

        const movie = {
            title : movieTitle,
            ranking : movieRanking,
            id : Number(new Date())
        }
        dispatch(addMovie(movie))

        // if(localStorage.getItem('movies')){
        //     const storedData = JSON.parse(localStorage.getItem('movies'))
        //     const movieData = [...storedData, {...movie}]
        //     localStorage.setItem('movies',JSON.stringify(movieData))
        // }
        // else{
        //     const movieData = []
        //     movieData.push(movie)
        //     localStorage.setItem('movies',JSON.stringify(movieData))

        // }

        setMovieTitle('')
        setMovieRanking('')

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div class="form-floating mb-3">
                    <input type='text' class="form-control" value={movieTitle} id="moviename" placeholder='Enter movie name' onChange={handleTitleChange}/>
                    <label htmlfor="moviename">Enter the movie name</label>
                </div>
                <div class="form-floating mb-3">
                    <input type='text' class="form-control" value={movieRanking} id="ranking" placeholder='IMDB Ranking' onChange={handleRankingChange}/>
                    <label htmlfor="ranking">IMDB Ranting</label>
                </div>
               
                <div class="form-floating mb-3">
                    <input type='submit' value='Add'/>
                </div>
            </form>
        </div>
    )
}

export default MovieForm