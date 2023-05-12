import React from 'react'
import { useSelector } from 'react-redux'
import Header from '../header/Header';
import Cards from "../Card/Card"


export default function Searchdata() {

    const {viewstate}=useSelector ((data)=>data.search)
    console.log("viewstate==",viewstate);
  return (
    <div>
        <div>
            <Header />
        </div>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col'>
        

{
                    viewstate.map(movie => (
                        <Cards movie={movie} />
                    ))
                }



            </div>
        </div>
    </div>
    </div>
  )
}
