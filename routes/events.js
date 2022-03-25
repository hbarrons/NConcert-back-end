import { Router } from 'express'
import * as eventsCtrl from '../controllers/events.js'


const router = Router()

//all calls made here will be coming from /api/events

/*---------- Public Routes ----------*/
router.get('/', eventsCtrl.getEvents)
router.get('/', eventsCtrl.getLinks)
// router.get('/search', eventsCtrl.searchEvents)

// router.get('/:id', eventsCtrl.show)

/*---------- Protected Routes ----------*/


export { router }
