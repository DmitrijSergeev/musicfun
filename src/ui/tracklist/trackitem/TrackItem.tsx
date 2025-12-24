import type {Track} from "../../../types/Types";

type Props = {
    track: Track;
    setSelectedTrackId: (selectedTrackId: string|null)=> void
    setSelectedTrack: (track: Track|null)=> void
    selectedTrackId: string|null
}
export const TrackItem = (
    {track, selectedTrackId, setSelectedTrack, setSelectedTrackId}: Props) => {

    return (
        <li key={track.id}
            style={{border: track.id === selectedTrackId ? '2px solid red' : 'none'}}
        >
            <h3 onClick={() => {
                setSelectedTrackId(track.id)
                setSelectedTrack(null)
            }}>
                {track.attributes.title}
            </h3>

            <audio src={track.attributes.attachments[0].url} controls preload={'none'}></audio>
        </li>
    );
};
