import {useEffect, useState} from "react";
import type {Track, TracksResponse} from "../../types/Types";

type Props = {
    setSelectedTrackId: (trackId: string | null) => void;
    selectedTrackId: string | null
    setSelectedTrack: (selectedTrack: Track|null) => void
}

export const TrackList = (
    {setSelectedTrackId, selectedTrackId, setSelectedTrack}: Props) => {
    const [tracks, setTracks] = useState<Track[]>([])

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
    return (
        <>
            <div className={'flex gap-5 flex-col'}>
                <h1 className={'text-4xl'}>Musicfun</h1>
                <button className={'border-2 outline-amber-200 w-20 rounded-2xl'}
                        onClick={() => {
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
                        }}>
                            {track.attributes.title}
                        </h3>

                        <audio src={track.attributes.attachments[0].url} controls></audio>
                    </li>
                ))}
            </ul>
        </>

    );
};
