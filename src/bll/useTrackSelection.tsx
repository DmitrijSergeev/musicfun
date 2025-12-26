import {useState} from "react";
import type {Track} from "../types/Types";

export function useTrackSelection (){
    const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null)
    const [selectedTrack, setSelectedTrack] = useState<Track | null>(null)

    return{
        selectedTrackId,
        setSelectedTrack,
        setSelectedTrackId,
        selectedTrack
    }
}