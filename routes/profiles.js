import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, profilesCtrl.index)
router.get('/:id', profilesCtrl.show)
router.post('/:id/create', profilesCtrl.addToProfile)

// route to send data individually as params
router.post('/add/:profile/:name/:bio/', profilesCtrl.addFriend)
router.delete("/delete/:profileId", profilesCtrl.deleteFriend)
router.delete("/delete/genre/:genreId", profilesCtrl.deleteGenre)
router.delete("/delete/artist/:artistId", profilesCtrl.deleteArtist)
router.post('/add/genre/:genre', profilesCtrl.addGenre)
router.post('/add/artist/:artist', profilesCtrl.addArtist)
router.put('/update/bio/:bio', profilesCtrl.updateBio)
router.put('/update/spotify/:spotify', profilesCtrl.updateSpotify)
router.post('/:event/create/interested', profilesCtrl.addInterestedEvent)
router.post('/:event/create/attending', profilesCtrl.addAttendingEvent)
router.delete('/delete/event/:eventId', profilesCtrl.deleteEvent)

//route to send data as an object
// router.post('/add/:profile', profilesCtrl.addFriend)

export { router }
