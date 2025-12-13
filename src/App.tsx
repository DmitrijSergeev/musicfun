import './App.css'
import {useEffect, useState} from "react";

function App() {

    const [tracks, setTracks] = useState(null)

    useEffect( ()=>{
        fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
            headers: {
                'APIkey': '9778dd46-146a-43ee-b515-46ccd9995305'
            }
        }).then(res => res.json())
            .then( json => setTracks(json))
    }, [] )

    return (
        <div>
            <ul className="flex flex-col gap-4">
                {tracks.map((track) => (
                    <li key={track.id}>
                        <div className="flex">Musicfun soundtrack</div>
                        <audio
                            src="https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3"
                            controls
                        />
                    </li>
                ))}
                <li className="flex flex-col gap-4">
                    <div className="flex">Musicfun soundtrack</div>
                    <audio
                        src="https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3"
                        controls
                    />
                </li>
                <li className="flex flex-col gap-4">
                    <div className="flex">Musicfun soundtrack instrumental</div>
                    <audio
                        src="https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3"
                        controls
                    />
                </li>
            </ul>
        </div>
    )
}

export default App
