import { execute } from "../services/mysql.connector";
import { Track } from "./tracks.model";
import {trackQueries} from "./tracks.queries";

export const readTracks = async (albumId: number) => {
    return execute<Track[]>(trackQueries.readTracks, [albumId]);
};

export const createTrack = async (track: Track, index: number, albumId: number) => {
    return execute<Track[]>(trackQueries.createTracks, [albumId, track.title, track.number, track.video, track.lyrics]);
};

export const updateTrack = async (track: Track) => {
    return execute<Track[]>(trackQueries.updateTracks, [track.title, track.number, track.video, track.lyrics, track.trackId]);
};