export type UUID = string
export type ISODate = string

export type Attachment = {
    id: UUID
    addedAt: ISODate
    updatedAt: ISODate
    originalName: string
    contentType: string
    fileSize: number
    url: string
    version: number
}

export type TrackAttributes = {
    title: string
    addedAt: ISODate
    publishedAt: ISODate
    isPublished: boolean
    likesCount: number
    currentUserReaction: number

    images: {
        main: string[]
    }

    attachments: Attachment[]

    user: {
        id: string
        name: string
    }
}
export type ArtistRelation = {
    data: {
        id: UUID
        type: 'artists'
    }[]
}

export type TrackRelationships = {
    artists: ArtistRelation
}
export type ArtistAttributes = {
    name: string
}
export type Track = {
    id: UUID
    type: 'tracks'
    attributes: TrackAttributes
    relationships: TrackRelationships
}

export type Artist = {
    id: UUID
    type: 'artists'
    attributes: ArtistAttributes
}
export type Meta = {
    page: number
    pageSize: number
    pagesCount: number
    totalCount: number
    nextCursor: string | null
}
export type TracksResponse = {
    data: Track[]
    included: Artist[]
    meta: Meta
}
