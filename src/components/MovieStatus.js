import React from 'react'
import { useSelector } from 'react-redux'

const MovieStatus = ()=>{
    const movies = useSelector((state)=>{
        return state.movie
    })

    const topRank = ()=>{
        const ranking = []
        movies.forEach((mov)=>{
            ranking.push(mov.ranking)
        })
        const rank=Math.max(...ranking)
        const topMovie=movies.filter((mov)=>{
            return mov.ranking == rank
        })
        const movieName = []
        topMovie.forEach((mov)=>{
            movieName.push(mov.title)
        })

        return([movieName.join(','),rank].join(' - '))
    }
    return (
        <div>
            <div class="card border-dark mb-3" style={{width:'22rem'}} class='movieStatus'>
                <div class="card-body text-dark">
                    <h3 class="card-header mb-4">Movie Status</h3>
                    <h5>Total Movies- {movies.length}</h5>
                    <h5>#Top Ranked Movie : <br/> {topRank()}</h5>
                </div>
            </div>
            
        </div>
    )
}

export default MovieStatus