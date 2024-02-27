import { Router } from "express";
import * as AlbumController from "./albums.controller";

const router = Router();
router.route('/albums').get(AlbumController.readAlbums);
router.route('/albums/:artist').get(AlbumController.readAlbumsByArtist);
router.route('/albums/search/artist/:search').get(AlbumController.readAlbumsByArtistSearch);
router.route('/albums/description/:search').get(AlbumController.readAlbumsByDescriptionSearch);
router.route('/albums').post(AlbumController.createAlbum);
router.route('/albums').put(AlbumController.updateAlbum);
router.route('/albums/:albumID').delete(AlbumController.deleteAlbum);
export default router;