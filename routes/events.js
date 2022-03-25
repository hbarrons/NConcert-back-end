import { Router } from 'express'
import * as eventsCtrl from '../controllers/events.js'


const router = Router()

//all calls made here will be coming from /api/events

/*---------- Public Routes ----------*/
router.get('/', eventsCtrl.getEvents)

// router.get('/:id', eventsCtrl.show)

/*---------- Protected Routes ----------*/


export { router }
