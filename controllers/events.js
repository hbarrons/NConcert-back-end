import { Event } from "../models/event";

// notes from hunter: api calls are made as controller functions from the back-end
// these controller functions are copy/pasted from the sandbox environment i tested the api calls in

function getEvents(){
  return fetch(`${baseUrl}/events.json?countryCode=US${apiKey}`)
  .then(res => res.json())
}

function getEventDetails(){
  //need to add _id for events to fetch link
  return fetch(`${baseUrl}/events.json?`) 
}

export {
  getEvents,
  getEventDetails
}