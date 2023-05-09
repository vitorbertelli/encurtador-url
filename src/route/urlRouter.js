import { Router } from "express";
import { encurtarUrl, redirecionarUrl } from "../controller/urlController.js";

const router = Router();

router
  .route('/url')
  .post(encurtarUrl);

router
  .route('/:hash')
  .get(redirecionarUrl);

export default router;