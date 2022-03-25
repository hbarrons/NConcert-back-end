// import { Event } from "../models/event";
// import jwt from 'jsonwebtoken'
// import fetch from "node-fetch"
import axios from "axios"

const baseUrl = "https://app.ticketmaster.com/discovery/v2"
const apiKey = `${process.env.API_KEY}`

//back end is not returning any info -- why?

function getEvents(req,res){
  // if (req.params.page)
  axios.get(`${baseUrl}/events.json?countryCode=US${apiKey}`)
  .then(response => {
    res.json(response.data._embedded.events)
  })
}

function getLinks(req,res){
  axios.get(`${baseUrl}/events.json?countryCode=US${apiKey}`)
  .then(response => {
    res.json(response.data)
  })
}

// function searchEvents (req,res){
//   axios.get(`${baseUrl}/events.json?countryCode=US${city}${keyword}${apiKey}`)
//   .then(response => {
//     res.json(response.data._embedded.events)
//   })
// }


export {
  getEvents,
  getLinks
}