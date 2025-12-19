import './App.css'
import {TrackList} from "./components/tracklist/TrackList";
import TrackDetail from "./components/trackdetail/TrackDetail";

function App() {

    //const [tracks, setTracks] = useState<Track[]>([])
    // const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null)
    // const [selectedTrack, setSelectedTrack] = useState<Track | null>(null)

    // useEffect(() => {
    //     fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
    //         headers: {
    //             'API-KEY': '0657fabc-9708-4d01-b6f8-57c04196f78c'
    //         }
    //     }).then(res => res.json())
    //         .then((json: TracksResponse) => setTracks(json.data))
    // }, [])

    // useEffect(() => {
    //     if (!selectedTrackId) return
    //     fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${selectedTrackId}`, {
    //         headers: {
    //             'API-KEY': '0657fabc-9708-4d01-b6f8-57c04196f78c'
    //         }
    //     }).then(res => res.json())
    //         .then((json: TrackResponse) => setSelectedTrack(json.data))
    //
    // }, [selectedTrackId]);

    // if (tracks.length === null) {
    //     return <div>
    //         <h1>Musicfun</h1>
    //         <span>loading...</span>
    //     </div>
    // }
    //
    // if (tracks.length === 0) {
    //     return <div>
    //         <h1>Musicfun</h1>
    //         <span>No tracks</span>
    //     </div>
    // }

    //const selectedTrack = tracks.find(track => track.id === selectedTrackId)

    return (
    <div className={'flex gap-40'}>
        <TrackList/>
        <TrackDetail/>

    </div>
)
}

export default App
