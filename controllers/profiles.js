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

export {
  index,
  show,
  addToProfile,
}