import type {Track} from "../../types/Types.ts";
import {TrackItem} from "../../ui/tracklist/trackitem/TrackItem";
import {useTracks} from "../../bll/useTracks.tsx";

type Props = {
    setSelectedTrackId: (trackId: string | null) => void;
    selectedTrackId: string | null
    setSelectedTrack: (selectedTrack: Track | null) => void
}

export const TrackList = (
    {setSelectedTrackId, selectedTrackId, setSelectedTrack}: Props) => {

    const {tracks} = useTracks()

    if (tracks === null) {
        return '...Loading'
    }

    if (tracks.length === 0) {
        return 'No tracks'
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
                    <TrackItem key={track.id}
                               track={track}
                               selectedTrackId={selectedTrackId}
                               setSelectedTrackId={setSelectedTrackId}
                               setSelectedTrack={setSelectedTrack}
                    />
                ))}
            </ul>
        </>

    );
};
