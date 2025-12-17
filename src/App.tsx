import './App.css'
import {useEffect, useState} from "react";
import type {Track, TracksResponse} from "./types/Types.ts";

function App() {

    const [tracks, setTracks] = useState<Track[]>([])
    const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null)

    useEffect(() => {
        fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
            headers: {
                'API-KEY': '0657fabc-9708-4d01-b6f8-57c04196f78c'
            }
        }).then(res => res.json())
            .then((json: TracksResponse) => setTracks(json.data))
    }, [])

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

    const selectedTrack = tracks.find(track => track.id === selectedTrackId)

    return (
        <div className={'flex gap-40'}>
            <h1 >Musicfun</h1>
            <ul>
                {tracks.map(track => (
                    <li key={track.id}
                        style={{border: track.id === selectedTrackId ? '2px solid red' : 'none'}}
                        onClick={() => setSelectedTrackId(track.id)}
                    >
                        <h3>
                            {track.attributes.title}
                        </h3>

                        <audio src={track.attributes.attachments[0].url} controls></audio>
                    </li>
                ))}
            </ul>
            <div>
                <h3>Details</h3>
                {
                    selectedTrackId === null
                        ? 'Track is not selected'
                        : selectedTrack?.attributes.title
                }
            </div>
        </div>
    )
}

export default App
