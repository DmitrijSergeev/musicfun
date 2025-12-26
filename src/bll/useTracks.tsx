import {useEffect, useState} from "react";
import type {Track, TracksResponse} from "../types/Types";
import {getTracks} from "../dal/api/api";

export function useTracks() {
    const [tracks, setTracks] = useState<Track[]>([])

    useEffect(() => {
        getTracks()
            .then((json: TracksResponse) => {
                setTracks(json?.data)
            })
    }, [])

    return {tracks};
}