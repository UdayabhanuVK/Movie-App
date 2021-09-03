import React, { useEffect, useState } from 'react'
import { MdDelete } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux'
import { deleteMovie } from '../action/MovieActions'

const MovieList = ()=>{
    const movies = useSelector((state)=>{
        return (state.movie)
    })
    //console.log(movies,'movies')

    const [data, setData] = useState([])
    const [searchText, setSearch] = useState('')
    const [searchResult, setSearchResult] = useState('')
    const [selectOption, setSelectOption] = useState('')

    useEffect(() => {
        const result = movies.map((ele) => {
            return {...ele}
        })
        setData(result)
    }, [movies])

    // localStorage.setItem('movies',JSON.stringify(movies))
  
    const handleSearch = (e)=>{
        const text = e.target.value
        setSearch(text)
        const movie = data.filter((movie)=>{
            return movie.title.toLowerCase().includes(text.toLowerCase())
        })
        setSearchResult(movie)
    }
    
    const  handleSelectChange = (e)=>{
        const select = e.target.value
        setSelectOption(select)

        if(select === ''){
          //  const sortedD=movies
            setData([...movies])
        }
        else if(select === 'Movie'){
            const sortedma =data.sort((a,b)=>{
                if (a.title < b.title) { 
                    return -1; 
                } 
                if (a.title > b.title) { 
                    return 1; 
                } 
                return 0; 
            })
            setData(sortedma)
        }
        else if(select === 'rating of moive-ascending'){
            const sortedra = data.sort ((a,b)=>{
                return (a.ranking - b.ranking)
            })
            setData(sortedra)
        }
        else if(select === 'rating of movie-descending'){
            const sortedrd = data.sort ((a,b)=>{
                return (b.ranking - a.ranking)
            })
            setData(sortedrd)
        }
    }
    
    return (
        <div>
            <div className=' row pb-4'>
                
                    <input className='col' type='text' placeholder='search by name' value={searchText} onChange={handleSearch} />
                
                <div className='col'>
                    <label style={{color:'white'}}>Sort By:</label>
                    <select value={selectOption} onChange={handleSelectChange}>
                        <option value=''>Date added</option>
                        <option value='Movie'>Movie</option>
                        <option value='rating of moive-ascending'>Ranking from least to high</option>
                        <option value='rating of movie-descending'>Ranking from high to least</option>
                    </select>
                </div>
            </div>
            
            <MovieCard searchResult={searchResult} data={data}/>

        </div>
    )
}

const MovieCard = ({searchResult, data})=>{
    const dispatch = useDispatch()
    //console.log(selectResult)

    const handleDelete = (id)=>{
        dispatch(deleteMovie(id))
    }
    return (
        <div className='row'>
                {
                    searchResult.length>0 ? 
                    (
                        searchResult.map((movie)=>{
                            return(
                            <div class="card" style={{width:'19rem', margin:'1rem'}}  class='movieList' key={movie.id}>
                                <img src='...' class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h3 class="card-text">{movie.title} - #{movie.ranking} </h3>
                                    <button class='deletefont' onClick={()=>handleDelete(movie.id)}><MdDelete/></button>
                                </div>
                            </div>
                            )
                        })
                    ):(
                        data.map((movie)=>{
                            return(
                                <div class="card" style={{width:'19rem',margin:'1rem'}} class='movieList' key={movie.id} >
                                <img src="..." class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h3 class="card-text">{movie.title} - #{movie.ranking} </h3>
                                    <button class='deletefont' onClick={()=>handleDelete(movie.id)}><MdDelete/></button>
                                </div>
                            </div>
                            )
                        })
                    )

                }
            
        </div>
    )
}

export default MovieList