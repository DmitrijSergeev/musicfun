import {useEffect, useState} from "react";
import type {Track, TrackResponse} from "../../types/Types";


const TrackDetail = () => {
    const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null)
    const [selectedTrack, setSelectedTrack] = useState<Track | null>(null)

    useEffect(() => {
        if (!selectedTrackId) return
        fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${selectedTrackId}`, {
            headers: {
                'API-KEY': '0657fabc-9708-4d01-b6f8-57c04196f78c'
            }
        }).then(res => res.json())
            .then((json: TrackResponse) => setSelectedTrack(json.data))

    }, [selectedTrackId]);

    return (
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
    );
};

export default TrackDetail;