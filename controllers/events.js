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

function show(req, res) {
  console.log('sanity check')
}

// function createComment(req, res) {
//   console.log(Event)
//   Event.findById(req.params.event)
//   .then(event => {
//     event.comments.push({
//       name: req.params.name,
//       comment: req.params.comment
//     })
//     event.save()
//   })
//   .catch(err => {
//     console.log(err)
//   })
// }


export { 
  getSearch,
  show,
  // createComment,
}