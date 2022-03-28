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
router.post('/add/:profile/:name/:bio', profilesCtrl.addFriend)

export { router }
