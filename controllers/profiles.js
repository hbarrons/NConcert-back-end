import { Profile } from '../models/profile.js'

function index(req, res) {
  console.log(req.params)
  Profile.find({})
  .then(profiles => res.json(profiles))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

function show(req,res) {
  console.log("req.params: ", req.params)
  Profile.findById(req.params.profile)
  .then(profile => res.json(profile))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

function addToProfile(req,res) {
  (console.log("req.body: ", req.body))
  Profile.findById(req.user.profile)
  .then(profile => {
    profile.bio = req.body.bio
    profile.genre.push({ genre: req.body.genre})
    profile.artist.push({artist: req.body.artist})
    profile.spotify = req.body.spotify
    profile.save()
    console.log("profile after save: ", profile)
  })
  .catch(err => {
    console.log(err)
  })
}

function addFriend(req,res) {
  console.log("add friend - req.body: ", req.params.profile)
  Profile.findById(req.user.profile)
  .then(profile => {
    profile.friends.push({
      name: req.params.name,
      profileId: req.params.profile,
      bio: req.params.bio,
      spotify: req.body.spotify
    })
    profile.save()
    console.log("profile.friends: ", profile.friends)
  })
  .catch(err => {
    console.log(err)
  })
}

export {
  index,
  show,
  addToProfile,
  addFriend,
}