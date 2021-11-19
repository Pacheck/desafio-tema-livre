import React,{useEffect} from 'react'
import Header from '../components/header'
import Main from '../components/mainn'
import Client from '../components/cards'
import Card from '../components/card'
import Why from '../components/why'
import Footer from '../components/footer'
import "../components/global/global.css"


export default function Index() {
  useEffect(()=>{
    document.title= "Doggy"
  },[])

  return(
    <div>
   <Header/>
   <Main/>
   <Card/>
   <Why/>
   <Client/>
   <Footer/>
    </div>
  )

}