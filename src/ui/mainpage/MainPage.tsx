import {TrackList} from "../tracklist/TrackList";
import {TrackDetail} from "../../ui/trackdetail/TrackDetail.tsx";
import {useState} from "react";
import type {Track} from "../../types/Types";

export const MainPage = () => {
    const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null)
    const [selectedTrack, setSelectedTrack] = useState<Track | null>(null)
    return (
        <div className={'flex gap-40'}>
            <TrackList selectedTrackId={selectedTrackId}
                       setSelectedTrackId={setSelectedTrackId}
                       setSelectedTrack={setSelectedTrack}
            />
            <TrackDetail
                selectedTrackId={selectedTrackId}
                selectedTrack={selectedTrack}
                setSelectedTrack={setSelectedTrack}
            />
        </div>
    );

};
