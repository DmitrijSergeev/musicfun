import {useEffect, useState} from "react";
import type {Track, TrackResponse} from "../types/Types";
import {getTrack} from "../dal/api/api";

type Props = {
    selectedTrackId: string|null
}

export function useTrackDetail({selectedTrackId}: Props) {

    const [selectedTrack, setSelectedTrack] = useState<Track|null>(null);

    useEffect(() => {
        if (!selectedTrackId) return

        getTrack(selectedTrackId)
            .then((json: TrackResponse | null) => {
                if (json?.data) {
                    setSelectedTrack(json.data)
                }
            })

    }, [selectedTrackId, setSelectedTrack])

    return {
        selectedTrack
    }
}