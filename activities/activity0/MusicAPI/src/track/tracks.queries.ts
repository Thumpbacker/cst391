export const trackQueries = {
    createTracks : `INSERT INTO tracks (album_id, title, number, video_url) VALUES(?, ?, ?, ?)`,
    readTracks : `SELECT title AS title, video_url AS video_url, lyrics AS lyrics from music.tracks WHERE album_id = ?`,
    updateTracks : `UPDATE music.tracks SET title = ?, video_url = ?, lyrics = ? WHERE id = ?`
}