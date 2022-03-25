// import { Event } from "../models/event";
// import jwt from 'jsonwebtoken'
// import fetch from "node-fetch"
import axios from "axios"

const baseUrl = "https://app.ticketmaster.com/discovery/v2"
const apiKey = `${process.env.API_KEY}`

//back end is not returning any info -- why?

function getEvents(req,res){
  console.log("baseUrl: ", baseUrl)
  console.log("apiKey: ", apiKey)
  console.log("full api fetch: ", `${baseUrl}/events.json?countryCode=US${apiKey}`)
  axios.get(`${baseUrl}/events.json?countryCode=US${apiKey}`)
  .then(response => {
    res.json(response.data._embedded.events)
  })
}

export {
  getEvents,
}