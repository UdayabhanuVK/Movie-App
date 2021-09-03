
const movieInitialState = JSON.parse(localStorage.getItem('movies')) || []

const movieReducer = (state = movieInitialState , action)=>{

    switch(action.type){
        case 'ADD_MOVIE' : {
            localStorage.setItem('movies',JSON.stringify([...state , {...action.payload}] ))

            return [...state , {...action.payload}] 
        }

        case 'DELETE_MOVIE' : {
            const data= state.filter((movie)=>{
                return movie.id != action.payload
            })
            localStorage.setItem('movies',JSON.stringify(data))
            return data
        }
        
        default : {
            return state
        }
    }
}

export default movieReducer