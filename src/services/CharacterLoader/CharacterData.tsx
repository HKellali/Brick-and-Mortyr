export type CharacterData = {
  name: string;
  id: string;
  image: string;
  status: string;
  gender: string;
  species: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
  episode: EpisodeData[];
};

export type EpisodeData = {
  name: string;
};
