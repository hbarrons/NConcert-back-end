import { Router } from 'express'
import * as eventsCtrl from '../controllers/events.js'


const router = Router()

//all calls made here will be coming from /api/events

/*---------- Public Routes ----------*/
router.get('/', eventsCtrl.getEvents)

// searching routes 
router.get('/search/:keyword/:city', eventsCtrl.getKeywordAndCity )
// router.get('/search/:keyword/:city/links', eventsCtrl.getLinks)
router.get('/search/:links', eventsCtrl.getNextPage)


// router.get('/:id', eventsCtrl.show)

/*---------- Protected Routes ----------*/


export { router }
