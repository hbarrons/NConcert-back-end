import mongoose from 'mongoose'

const commentsSchema = new mongoose.Schema({
  name: { type: String },
  avatar: { type: String },
  comment: { type: String },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "Profile" },
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: "Event" }
}, {
  timestamps: true
})


const eventSchema = new mongoose.Schema({
  name: { type: String },
  //url is the ticketmaster link to the event (will use for "Buy Tickets" link)
  url: { type: String },
  //_embedded is an api field that returns an object which includes "venues.name", "venues.city", "venues.state.stateCode", ""
  _embedded: { type: {} },
  dates: { type: {} },
  images: { type: [] },
  interested: { type: Boolean },
  attending: { type: Boolean },
  comments: [commentsSchema]
}, {
  timestamps: true,
})

const Event = mongoose.model('Profile', eventSchema)

export { Event }
