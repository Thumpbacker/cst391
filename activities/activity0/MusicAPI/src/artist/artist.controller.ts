import { Request, RequestHandler, Response } from "express";
import * as ArtistDAO from "./artist.dao";

export const readArtist: RequestHandler = async (req: Request, res: Response) => {
    try{
        const artist = await ArtistDAO.readArtist();

        res.status(200).json(artist);
    }catch(error){
        res.status(500).json({message: 'There was an error fetching the artist'});
    }
};