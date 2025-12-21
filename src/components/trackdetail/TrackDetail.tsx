import {useEffect} from "react";
import type {Track, TrackResponse} from "../../types/Types";

type Props = {
    selectedTrackId: string|null
    selectedTrack: Track|null
    setSelectedTrack: (selectedTrack: Track|null) => void
}
export const TrackDetail = (
    {selectedTrackId, setSelectedTrack, selectedTrack}: Props) => {

    useEffect(() => {
        if (!selectedTrackId) return
        fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${selectedTrackId}`, {
            headers: {
                'API-KEY': '0657fabc-9708-4d01-b6f8-57c04196f78c'
            }
        }).then(res => res.json())
            .then((json: TrackResponse) => setSelectedTrack(json.data))

    }, [selectedTrackId, selectedTrack, setSelectedTrack]);

    const isLoading =
        selectedTrackId !== null &&
        (selectedTrack === null || selectedTrack.id !== selectedTrackId)

    return (
        <div>
            <h3>Details</h3>

            {selectedTrackId === null && 'Track is not selected'}

            {isLoading && 'Loading...'}

            {!isLoading && selectedTrack && selectedTrackId && (
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
