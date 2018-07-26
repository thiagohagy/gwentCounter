const state = {
  player1faction:'',
  player2faction:'',
  factions: [
    "~/images/monsters.png",
    "~/images/scoiatel.png",
    "~/images/norternRealms.png",
    "~/images/nilfgaard.png",
    "~/images/skellige.png"
  ],
  songs: [
    "~/audio/audio01.mp3",
    "~/audio/audio02.mp3",
    "~/audio/audio03.mp3",
    "~/audio/audio04.mp3",
    "~/audio/audio05.mp3",
    "~/audio/audio06.mp3",
    "~/audio/audio07.mp3",
    "~/audio/audio08.mp3",
    "~/audio/audio09.mp3",
    "~/audio/audio10.mp3",
  ]
};

const mutations = {
  setPlayersFactions: (state,payload) => {
    state.player1faction = payload.player1faction;
    state.player2faction = payload.player2faction;
  },
};

const getters = {
  getImages: (state) => {
    return state.factions;
  },
  getFactions: (state) => {
    return { player1: state.player1faction, player2: state.player2faction };
  },
  getSongs: (state) => {
    return state.songs;
  },
}

const actions = {
};

export default {
  state,
  mutations,
  actions,
  getters,
};
