import React, {useEffect, useState} from "react"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import "./card.css"
import { Link } from "react-router-dom"
import axios from "axios"
import { useDispatch } from "react-redux"


const Cards = ({movie}) => {

    const [isLoading, setIsLoading] = useState(true)
    const [search,setsearch]=useState()

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, []) 

    const value =(e)=>{
        setsearch({...search,value:e.target.value})

    }
    
    //  const submit = (e)=>{
    //     e.preventDefault()
    //     axios.get('https://api.themoviedb.org/3/search/company?api_key=<<api_key>>&page=1').then((response)=>{
    //         console.log("response",response[0]);
    //         setsearch(response)
    //     })
    //  }

    

    return <>
    {
        isLoading
        ?
        <div className="cards">
            <SkeletonTheme color="#202020" highlightColor="#444">
                <Skeleton height={300} duration={2} />
            </SkeletonTheme>
        </div>
        :
        <Link to={`/movie/${movie.id}`} style={{textDecoration:"none", color:"white"}}>
            <div className="cards">
                <img className="cards__img" src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} />
                <div className="cards__overlay">
                    <div className="card__title">{movie?movie.original_title:""}</div>
                    <div className="card__runtime">
                        {movie?movie.release_date:""}
                        <span className="card__rating">{movie?movie.vote_average:""}<i className="fas fa-star" /></span>
                    </div>
                    <div className="card__description">{movie ? movie.overview.slice(0,118)+"..." : ""}</div>
                </div>
            </div>
        </Link>
    }
    </>
}

export default Cards;