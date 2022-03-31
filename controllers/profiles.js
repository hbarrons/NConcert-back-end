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
  Profile.findById(req.params.id)
  .then(profile => res.json(profile))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

function addToProfile(req,res) {
  Profile.findById(req.user.profile)
  .then(profile => {
    profile.bio = req.body.bio
    profile.genre.push({ genre: req.body.genre})
    profile.artist.push({artist: req.body.artist})
    profile.spotify = req.body.spotify
    profile.save()
    res.status(201).json(profile)
  })
  .catch(err => {
    console.log(err)
  })
}

function addFriend(req,res) {
  console.log(req.body)
  Profile.findById(req.user.profile)
  .then(profile => {
    profile.friends.push({
      name: req.body.name,
      profileId: req.params.profile,
    })
    profile.save()
    console.log(profile.friends[profile.friends.length - 1])
    res.status(201).json(profile.friends[profile.friends.length - 1])
  })
  .catch(err => {
    console.log(err)
  })
}

function deleteFriend(req,res) {
  Profile.findById(req.user.profile)
  .then(profile => {
    profile.friends.remove({_id: req.params.profileId})
    profile.save()
    console.log(profile.friends)
  })
  .catch(err => {
    console.log(err)
  })
}

function deleteGenre(req,res) {
  Profile.findById(req.user.profile)
  .then(profile => {
    profile.genre.remove({_id: req.params.genreId})
    profile.save()
    console.log(profile.genre)
    res.status(201).json(profile.genre)
  })
  .catch(err => {
    console.log(err)
  })
}

function deleteArtist(req,res) {
  Profile.findById(req.user.profile)
  .then(profile => {
    profile.artist.remove({_id: req.params.artistId})
    profile.save()
  })
  .catch(err => {
    console.log(err)
  })
}

function addGenre (req,res) {
  Profile.findById(req.user.profile)
  .populate("genre")
  .populate("artist")
  .then(profile => {
    profile.genre.push({genre: req.params.genre})
    profile.save()
    res.status(201).json(profile)
  })
  .catch(err => {
    console.log(err)
  })
}

function addArtist (req,res) {
  Profile.findById(req.user.profile)
  .then(profile => {
    profile.artist.push({artist: req.params.artist})
    profile.save()
    res.status(201).json(profile)
  })
  .catch(err => {
    console.log(err)
  })
}

function updateBio (req,res) {
  console.log("updatebio: ", req.params.bio)
  Profile.findById(req.user.profile)
  .then(profile => {
    profile.bio = req.params.bio
    profile.save()
    console.log("profile after save: ", profile)
    res.status(201).json(profile)
  })
  .catch(err => {
    console.log(err)
  })
}

function updateSpotify (req,res) {
  console.log("update spotfy: ", req.params.spotify)
  Profile.findById(req.user.profile)
  .then(profile => {
    profile.spotify = req.params.spotify
    profile.save()
    console.log("profile after save: ", profile)
    res.status(201).json(profile)
  })
  .catch(err => {
    console.log(err)
  })
}

function addInterestedEvent (req,res) {
  // console.log(req.user.profile)
  Profile.findById(req.user.profile)
  .then(profile => {
    profile.events.push({
      name: req.body.name,
      eventId: req.body.id,
      url: req.body.url,
      venue: req.body._embedded.venues[0].name,
      city: req.body._embedded.venues[0].city.name,
      state: req.body._embedded.venues[0].state.stateCode,
      interested: true,
      attending: false
    })
    profile.save()
    console.log(profile.events)
  })
  .catch(err => {
    console.log(err)
  })
}

function addAttendingEvent (req,res) {
  console.log("req.body._embedded.dates.start: ", req.body.dates.start.localDate)
  console.log("req.body._embedded.dates.start: ", req.body.dates.start.localTime)
  Profile.findById(req.user.profile)
  .then(profile => {
    profile.events.push({
      name: req.body.name,
      eventId: req.body.id,
      url: req.body.url,
      venue: req.body._embedded.venues[0].name,
      city: req.body._embedded.venues[0].city.name,
      state: req.body._embedded.venues[0].state.stateCode,
      time: req.body.dates.start.localTime,
      date: req.body.dates.start.localDate,
      interested: true,
      attending: true,
    })
    profile.save()
    res.status(201).json(profile)
    console.log(profile.events)
  })
  .catch(err => {
    console.log(err)
  })
}

function deleteEvent (req,res) {
  Profile.findById(req.user.profile)
  .then(profile => {
    profile.events.remove({_id: req.params.eventId})
    profile.save()
    res.status(201).json(profile)
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
  deleteFriend,
  deleteGenre,
  deleteArtist,
  addGenre,
  addArtist,
  updateBio,
  updateSpotify,
  addInterestedEvent,
  addAttendingEvent,
  deleteEvent,
}