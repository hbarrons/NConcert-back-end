import axios from "axios"

const baseUrl = "https://app.ticketmaster.com/discovery/v2"
const apiKey = `${process.env.API_KEY}`

function getSearch(req, res) {
  console.log("req.params.page: ", req.params.page)
  axios.get(`${baseUrl}/events.json?classificationName=music&countryCode=US&keyword=${req.params.keyword}&city=${req.params.city}&page=${req.params.page}&size=20${apiKey}`)
  .then(apiResponse => {
    res.json(apiResponse.data)
  })
}


export { 
  getSearch,
}