import { Router } from "express";
import { urlShortener, redirectUrl } from "../controllers/urlController.js";

const router = Router();

router
  .route('/url')
  .post(urlShortener);

router
  .route('/:hash')
  .get(redirectUrl);

export default router;