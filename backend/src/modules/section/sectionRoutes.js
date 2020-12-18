import { Router } from 'express'

import sectionController from './sectionController'

const router = Router()

router.post('/section', sectionController.createSection)

router.post('/section/:sectionId', sectionController.joinSection)

export default router
