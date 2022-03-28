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
  profileId: { type: String },
  bio: { type: String },
}, {
  timestamps: true
})

const profileSchema = new mongoose.Schema({
  name: { type: String },
  avatar: { type: String },
  email: {type: String, required: true, lowercase: true, unique: true},
  bio: {
    type: String,
    maxLength: 160
  },
  spotify: { type: String },
  genre: [genreSchema],
  artist: [artistSchema],
  friends: [friendsSchema]
}, {
  timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export { Profile }
