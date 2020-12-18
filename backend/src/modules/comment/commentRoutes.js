import { Router } from 'express'

import { isAuth } from '../../middlewares'

import commentController from './commentController'

const router = Router()

router.get('/comment', isAuth, commentController.getCommentsBySection)

export default router
