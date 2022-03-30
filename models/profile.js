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

const eventsSchema = new mongoose.Schema({
  name: { type: String },
  eventId: { type: String },
  url: { type: String },
  venue: { type: String },
  city: { type: String },
  state: { type: String },
  interested: { type: Boolean },
  attending: { type: Boolean }
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
  friends: [friendsSchema],
  events: [eventsSchema],
}, {
  timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export { Profile }
