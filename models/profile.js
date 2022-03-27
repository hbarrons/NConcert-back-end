import mongoose from 'mongoose'

const genreSchema = new mongoose.Schema({
  genre: { type: String },
}, {
  timestamps: true
})

const artistSchema = new mongoose.Schema({
  artist: { type: String },
}, {
  timestamps: true
})

const friendsSchema = new mongoose.Schema({
  name: { type: String },
  avatar: { type: String },
}, {
  timestamps: true
})

const profileSchema = new mongoose.Schema({
  name: { type: String },
  avatar: { type: String },
  email: {type: String, required: true, lowercase: true, unique: true},
  bio: { type: String },
  spotifyLink: { type: String },
  genreSchema: [genreSchema],
  artistSchema: [artistSchema],
  friends: [friendsSchema]
}, {
  timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export { Profile }
