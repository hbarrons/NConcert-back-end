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
  console.log("req.body: ", req.body)
  // console.log("req.user: ", req.user.profile)
  Profile.findById(req.user.profile)
  .then(profile => {
    profile.bio = req.body.bio
    profile.genreSchema
    .push(req.body.genre)
    profile.artistSchema.push(req.body.artist)
    console.log("profile: ", profile)
    profile.save()
  })
}

export {
  index,
  show,
  addToProfile,
}