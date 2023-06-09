import React, {useEffect, useState} from "react"
import "./movielist.css"
import { useParams } from "react-router-dom"
import Cards from "../Card/Card"
import axios from "axios"
import Header from "../header/Header"



const Movielist = () => {

    const [movieList, setMovieList] = useState([])
    const {type} = useParams()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [type])

    // const getData=()=>{
    //     axios.get(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`).then((response)=>{
    //         console.log("res",response);
    //         setMovieList(response)
    //     })

    // }
    const getData=(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`).then((response)=>{
            console.log("res====",response.data.results);
            setMovieList(response.data.results)
        })
    })

    return (
        <>
        
        
        <div className="movie__list">
            <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="list__cards">
                {
                    movieList.map(movie => (
                        <Cards movie={movie} />
                    ))
                }
            </div>
        </div>
        </>
    )
    

}


export default Movielist;