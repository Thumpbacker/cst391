import { execute } from "../services/mysql.connector";
import { OkPacket } from "mysql";
import { Album } from "./albums.model";
import {albumQueries} from "./albums.queries";

export const readAlbums = async () => {
    return execute<Album[]>(albumQueries.readAlbums, []);
};

export const readAlbumsByArtist = async (artistName : string) => {
    return execute<Album[]>(albumQueries.readAlbumsByArtist, [artistName]);
};

export const readAlbumsByArtistSearch = async (search: string) => {
    return execute<Album[]>(albumQueries.readAlbumsByArtistSearch, [search]);
};

export const readAlbumsByDescriptionSearch = async (search: string) => {
    return execute<Album[]>(albumQueries.readAlbumsByDescriptionSearch, [search]);
};


export const readAlbumsByAlbumID = async (albumID: number) => {
    return execute<Album[]>(albumQueries.readAlbumsByAlbumID, [albumID]);
};

export const createAlbum =async (album: Album) => {
  return execute<OkPacket>(albumQueries.createAlbum, [album.title, album.artist, album.description, album.year, album.image]); 
};

export const updateAlbum =async (album: Album) => {
    return execute<OkPacket>(albumQueries.updateAlbum, [album.title, album.artist, album.description, album.year, album.image, album.albumId]); 
};

export const deleteAlbum =async (albumID: number) => {
    return execute<OkPacket>(albumQueries.deleteAlbum, [albumID]); 
};

