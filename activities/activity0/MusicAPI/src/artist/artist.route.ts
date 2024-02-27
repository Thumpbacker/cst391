import { Router } from "express";
import * as ArtistController from "./artist.controller";

const router = Router();
router.route('/artist').get(ArtistController.readArtist);
export default router;