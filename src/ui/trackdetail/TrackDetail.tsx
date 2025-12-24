import {useEffect} from "react";
import type {Track, TrackResponse} from "../../types/Types";
import {getTrack} from "../../dal/api/api";

type Props = {
    selectedTrackId: string|null
    selectedTrack: Track|null
    setSelectedTrack: (selectedTrack: Track|null) => void
}
export const TrackDetail = (
    {selectedTrackId, setSelectedTrack, selectedTrack}: Props) => {

    useEffect(() => {
        if (!selectedTrackId) return

        getTrack(selectedTrackId)
            .then((json: TrackResponse | null) => {
                if (json?.data) {
                    setSelectedTrack(json.data)
                }
            })

    }, [selectedTrackId, setSelectedTrack])


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
                        <div>
                            {selectedTrack.attributes.title}
                        </div>
                        <div>
                            {selectedTrack.attributes.addedAt}
                        </div>
                        {selectedTrack.attributes.likesCount}
                    </li>
                </ul>
            )}
        </div>
    );
};
