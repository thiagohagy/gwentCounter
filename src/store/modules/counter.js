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
    "~/sound/01.mp3",
    "~/sound/02.mp3",
    "~/sound/03.mp3",
    "~/sound/04.mp3",
    "~/sound/05.mp3",
    "~/sound/06.mp3",
    "~/sound/07.mp3",
    "~/sound/08.mp3",
    "~/sound/09.mp3",
    "~/sound/10.mp3",
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
