import express from "express";
import { login, register } from "../controllers/authController.js";
import { authenticate, authorizeRoles } from '../middleware/auth.js';

const router = express.Router();

router.post("/login", login);

router.post("/register", register);


router.post('/events', authenticate, authorizeRoles('member', 'admin'), (req, res) => {
  // Create event logic
  res.send('Event created!');
});

router.get('/users', authenticate, authorizeRoles('admin'), (req, res) => {
  // List users
  res.send('Admin user list');
});

export default router;
