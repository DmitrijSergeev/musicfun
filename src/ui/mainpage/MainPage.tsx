import {TrackList} from "../tracklist/TrackList";
import {useTrackSelection} from "../../bll/useTrackSelection";
import {TrackDetail} from "../trackdetail/TrackDetail";

export const MainPage = () => {
    const {selectedTrack, setSelectedTrack, setSelectedTrackId, selectedTrackId} = useTrackSelection()
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
