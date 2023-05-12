import React, { useEffect, useState } from "react";
import './header.css'
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { incrementbyAmount } from "../../Redux/movie";
// import { useNavigate } from "react-router-dom";



const Header = ()=>{
  const [search,setsearch] =useState([])
  console.log("search===",search);

  const inputvalue = (e)=>{
    setsearch({
      ...search,
      value:e.target.value
    })
  }
  
  
  
  const {viewstate} =useSelector((values)=>values.search)
  const dispatch = useDispatch();
  console.log("imdbstate=======",viewstate);

  const navigate = useNavigate()

  const submitvalue = (e)=>{
    e.preventDefault()
    axios.get(`https://api.themoviedb.org/3/search/movie?query=${search.value}&api_key=ebf60735a20b41f25d95e70f08e7a305&language=en-US&page=1&include_adult=false`).then((searchdata)=>{
      console.log("searchdata====",searchdata.data.results);
      // setsearch(searchdata.data.results)
      dispatch(incrementbyAmount(searchdata.data.results))
      navigate('/result')
    })


  }
 
  
  




  // useEffect(()=>{

   
  // })
//   const [search, setsearch] =useState([])


//   const submit = (e)=>{
//     e.preventDefault()
//     axios.get(`https://api.themoviedb.org/3/search/movie?query=&api_key=ebf60735a20b41f25d95e70f08e7a305&language=en-US&page=1&include_adult=false`).then((searchdata)=>{
//         console.log("search==========",searchdata[0]);
//         setsearch(searchdata)
//     })
//  }
    return(
        <div className="header">
            <div className="headerLeft"></div>
            <Link to="/"><img className="header__icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" /></Link>
            <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
                <nav class="navbar bg-body-dark">
  <div class="container-fluid" >
    <form class="d-flex" role="search" >
      <input class="form-control me-2" type="search" placeholder="Search" onChange={inputvalue} aria-label="Search"/>
      <button class="btn btn-outline-primary" onClick={submitvalue}   type="submit">Search</button>
    </form>
  </div>
</nav>
        </div>
    )
}
export default Header;