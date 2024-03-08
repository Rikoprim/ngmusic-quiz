export interface PlaylistResponse {
  resultCount: number;
  results:     Array<Result>;
}

export interface Result {
  wrapperType:              WrapperType;
  kind:                     Kind;
  collectionId?:            number;
  trackId:                  number;
  artistName:               string;
  collectionName?:          string;
  trackName:                string;
  collectionCensoredName?:  string;
  trackCensoredName:        string;
  collectionArtistId?:      number;
  collectionArtistViewUrl?: string;
  collectionViewUrl?:       string;
  trackViewUrl:             string;
  previewUrl:               string;
  artworkUrl30:             string;
  artworkUrl60:             string;
  artworkUrl100:            string;
  collectionPrice:          number;
  trackPrice:               number;
  trackRentalPrice?:        number;
  collectionHdPrice?:       number;
  trackHdPrice?:            number;
  trackHdRentalPrice?:      number;
  releaseDate:              Date;
  collectionExplicitness:   Explicitness;
  trackExplicitness:        Explicitness;
  discCount?:               number;
  discNumber?:              number;
  trackCount?:              number;
  trackNumber?:             number;
  trackTimeMillis:          number;
  country:                  Country;
  currency:                 Currency;
  primaryGenreName:         string;
  contentAdvisoryRating?:   string;
  shortDescription?:        string;
  longDescription?:         string;
  hasITunesExtras?:         boolean;
  artistId?:                number;
  artistViewUrl?:           string;
  isStreamable?:            boolean;
  collectionArtistName?:    string;
}

export enum Explicitness {
  Explicit = "explicit",
  NotExplicit = "notExplicit",
}

export enum Country {
  Usa = "USA",
}

export enum Currency {
  Usd = "USD",
}

export enum Kind {
  FeatureMovie = "feature-movie",
  Song = "song",
}

export enum WrapperType {
  Track = "track",
}

