import { Profile } from '../models/profile.js'

function index(req, res) {
  Profile.find({})
  .then(profiles => res.json(profiles))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

function show(req,res) {
  console.log("show: sanity check")
  //not sure what/if a function needs to go here?
  //this is being triggered, but if I remove it we get errors. Leaving for now.
}

function addToProfile(req,res) {
  Profile.findById(req.user.profile)
  .then(profile => {
    profile.bio = req.body.bio
    profile.genre.push({ genre: req.body.genre})
    profile.artist.push({artist: req.body.artist})
    profile.save()
  })
  .catch(err => {
    console.log(err)
  })
}

function addFriend(req,res) {
  console.log('req.body: ', req.body)
  console.log('req.params: ', req.params)
}

export {
  index,
  show,
  addToProfile,
  addFriend,
}