import { Router } from 'express'
import * as eventsCtrl from '../controllers/events.js'


const router = Router()

//all calls made here will be coming from /api/events

/*---------- Public Routes ----------*/

// searching routes 
router.get('/search/:keyword/:city/:page', eventsCtrl.getSearch)
router.get('/:id', eventsCtrl.show)
router.get('/get/:eventId', eventsCtrl.showUniqueEvent)

// router.post('/:id/comments', eventsCtrl.createComment)

/*---------- Protected Routes ----------*/


export { router }
