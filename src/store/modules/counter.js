const state = {
  player1faction:'',
  player2faction:'',
  factions: [
    "~/images/monsters.png",
    "~/images/scoiatel.png",
    "~/images/norternRealms.png",
    "~/images/nilfgaard.png",
    "~/images/skellige.png"
  ]
};

const mutations = {
  setPlayersFactions: (state,payload) => {
    state.player1faction = payload.player1faction;
    state.player2faction = payload.player2faction;
  }
};

const getters = {
  getImages: (state) => {
    return state.factions;
  },
  getFactions: (state) => {
    return { player1: state.player1faction, player2: state.player2faction };
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
