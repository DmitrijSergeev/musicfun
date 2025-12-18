import './App.css'
import {useEffect, useState} from "react";
import type {Track, TrackResponse, TracksResponse} from "./types/Types.ts";

function App() {

    const [tracks, setTracks] = useState<Track[]>([])
    const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null)
    const [selectedTrack, setSelectedTrack] = useState<Track|null>(null)

    useEffect(() => {
        fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
            headers: {
                'API-KEY': '0657fabc-9708-4d01-b6f8-57c04196f78c'
            }
        }).then(res => res.json())
            .then((json: TracksResponse) => setTracks(json.data))
    }, [])

    useEffect(() => {
        if (!selectedTrackId) return
        fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${selectedTrackId}`, {
            headers: {
                'API-KEY': '0657fabc-9708-4d01-b6f8-57c04196f78c'
            }
        }).then(res => res.json())
            .then((json: TrackResponse) => setSelectedTrack(json.data))

    }, [selectedTrackId]);

    if (tracks.length === null) {
        return <div>
            <h1>Musicfun</h1>
            <span>loading...</span>
        </div>
    }

    if (tracks.length === 0) {
        return <div>
            <h1>Musicfun</h1>
            <span>No tracks</span>
        </div>
    }

    //const selectedTrack = tracks.find(track => track.id === selectedTrackId)

    return (
        <div className={'flex gap-40'}>
            <div className={'flex gap-5 flex-col'}>
                <h1 className={'text-4xl'}>Musicfun</h1>
                <button className={'border-2 outline-amber-200 w-20 rounded-2xl'}
                    onClick={()=> {
                    setSelectedTrackId(null)
                    setSelectedTrack(null)
                }}>
                    RESET
                </button>
            </div>

            <ul>
                {tracks.map(track => (
                    <li key={track.id}
                        style={{border: track.id === selectedTrackId ? '2px solid red' : 'none'}}
                    >
                        <h3 onClick={() => {
                            setSelectedTrackId(track.id)
                            setSelectedTrack(null)
                            } }>
                            {track.attributes.title}
                        </h3>

                        <audio src={track.attributes.attachments[0].url} controls></audio>
                    </li>
                ))}
            </ul>
            <div>
                <h3>Details</h3>

                {selectedTrack === null && selectedTrackId !== null && 'Loading...'}

                {selectedTrack === null && selectedTrackId === null && 'Track is not selected'}

                {selectedTrack && (
                    <ul>
                        <li>
                            {selectedTrack.attributes.title}
                            {selectedTrack.attributes.addedAt}
                            {selectedTrack.attributes.likesCount}
                        </li>
                    </ul>
                )}
            </div>

        </div>
    )
}

export default App
