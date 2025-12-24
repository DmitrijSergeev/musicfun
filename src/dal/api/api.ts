

export const getTrack = async (selectedTrackId: string) => {
    const res = await fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${selectedTrackId}`, {
        headers: {
            'API-KEY': '3897f0cc-ec64-4ebd-9093-9d4dbb072be0'
        }
    })
    return await res.json()
}

export const getTracks = async () => {
     const res = await fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
        headers: {
            'API-KEY': '3897f0cc-ec64-4ebd-9093-9d4dbb072be0'
        }
    })
        return await res.json()
}