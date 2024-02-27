import { Request, RequestHandler, Response } from "express";
import { Album } from './albums.model';
import { Track } from './../track/tracks.model';
import * as AlbumDAO from './albums.dao';
import * as TracksDAO from './../track/tracks.dao';
import { OkPacket } from "mysql";

export const readAlbums: RequestHandler = async (req: Request, res: Response) => {
    try{
        let albums;
        let albumID = parseInt(req.query.albumID as string);

        console.log(albumID);
        if(Number.isNaN(albumID)){
            albums = await AlbumDAO.readAlbums();
        }else{
            albums = await AlbumDAO.readAlbumsByAlbumID(albumID);
        }

        await readTracks(albums, res);

        res.status(200).json(
            albums
        );
    }catch(error){
        res.status(500).json({
            message: 'There was an error reading the albums'
        })
    }
}

export const readAlbumsByArtist: RequestHandler = async (req: Request, res: Response) => {
    try{
        const albums = await AlbumDAO.readAlbumsByArtist(req.params.artist);
        await readTracks(albums, res);

        res.status(200).json(albums);
    }catch(error){
        res.status(500).json({message: 'There was an error fetching the albums'});
    }
};

export const readAlbumsByArtistSearch: RequestHandler = async (req: Request, res: Response) => {
    try{
        const albums = await AlbumDAO.readAlbumsByArtistSearch('%' + req.params.search + '%');
        await readTracks(albums, res);

        res.status(200).json(albums);
    }catch(error){
        res.status(500).json({message: 'There was an error fetching the albums'});
    }
};

export const readAlbumsByDescriptionSearch: RequestHandler = async (req: Request, res: Response) => {
    try{
        const albums = await AlbumDAO.readAlbumsByDescriptionSearch('%' + req.params.search + '%');
        await readTracks(albums, res);

        res.status(200).json(albums);
    }catch(error){
        res.status(500).json({message: 'There was an error fetching the albums'});
    }
};

export const createAlbum: RequestHandler = async (req: Request, res: Response) => {
    try{
        const okPacket: OkPacket = await AlbumDAO.createAlbum(req.body);
        console.log(req.body);
        /*
        req.body.tracks.forEach(async (track: Track, index: number) => {
            try{
                await TracksDAO.createTrack(track, index, okPacket.insertId);
            }catch(error){
                res.status(500).json({message: 'There was an error when writting a track'});
            }
        });*/

        res.status(200).json(okPacket);
    }catch(error){
        console.log('[albums.controller][createAlbum][Error ', error);
        res.status(500).json({message: 'There was an error writting the albums'});
    }
};

export const updateAlbum: RequestHandler = async (req: Request, res: Response) => {
    try{
        const okPacket: OkPacket = await AlbumDAO.updateAlbum(req.body);
        console.log(req.body);
        /*
        req.body.tracks.forEach(async (track: Track, index: number) => {
            try{
                await TracksDAO.updateTrack(track);
            }catch(error){
                res.status(500).json({message: 'There was an error when updating the track'});
            }
        });*/

        res.status(200).json(okPacket);
    }catch(error){
        console.log(error);
        res.status(500).json({message: 'There was an error updating the albums'});
    }
};

async function readTracks(albums: Album[], res: Response<any, Record<string,any>>) {
    for(let i = 0; i < albums.length; i++){
        try{
            const tracks = await TracksDAO.readTracks(albums[i].albumId);
            albums[i].tracks = tracks;
        }catch(error){
            console.log(error);
            res.status(500).json({message: 'There was an error when fetching album tracks'});
        }
    }
    
}

export const deleteAlbum: RequestHandler = async (req: Request, res: Response) => {
    try{
        let albumID = parseInt(req.params.albumId as string);

        console.log(req.body);
        if(!Number.isNaN(albumID)){
            const response = await AlbumDAO.deleteAlbum(albumID);

            res.status(200).json(response);
        }else{
            throw new Error("Integer expected for albumId");
        }
    }catch(error){
        console.log(error);
        res.status(500).json({message: 'There was an error deleting the albums'});
    }
};