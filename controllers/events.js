import axios from "axios"

const baseUrl = "https://app.ticketmaster.com/discovery/v2"
const apiKey = `${process.env.API_KEY}`

function getEvents(req,res){
  // if (req.params.page)
  axios.get(`${baseUrl}/events.json?classificationName=music&countryCode=US${apiKey}`)
  .then(response => {
    res.json(response.data._embedded.events)
  })
}

function getLinks(req,res){
  axios.get(`${baseUrl}/events.json?classificationName=music&countryCode=US${apiKey}`)
  .then(response => {
    res.json(response.data)
  })
}

// function searchEvents (req,res){
//   axios.get(`${baseUrl}/events.json?classificationName=music&countryCode=US${city}${keyword}${apiKey}`)
//   .then(response => {
//     res.json(response.data._embedded.events)
//   })
// }


export {
  getEvents,
  getLinks
}