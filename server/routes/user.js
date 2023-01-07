import express from 'express'
import {
    getUser, getTrack, patchTrack, getUserDashboardInfo,
    getUserAboutInfo, deleteLastSubmission, addLastSubmission
}
    from '../controllers/user.js'
import { verifyToken } from '../middleware/auth.js'

const router = express.Router()

router.get('/profile/:id', getUser)

router.get('/:id/track', verifyToken, getTrack)
router.patch('/:id/track/submit', verifyToken, patchTrack)

router.get('/:id/track/dashboard/info', verifyToken, getUserDashboardInfo)
router.get('/:id/about/info', verifyToken, getUserAboutInfo)

router.patch('/:id/track/addlast', verifyToken, addLastSubmission)
router.patch('/:id/track/deletelast', verifyToken, deleteLastSubmission)
export default router