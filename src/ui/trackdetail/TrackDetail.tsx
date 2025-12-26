import {useTrackDetail} from "../../bll/useTrackDetail";

type Props = {
    selectedTrackId: string | null
}

export const TrackDetail = (
    {selectedTrackId}: Props) => {

    const {selectedTrack} = useTrackDetail({selectedTrackId});


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
