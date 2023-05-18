export default {
  namespaced: true,
  getters: {
    data: state => state.data,
    isPrint: state => state.data.printVersion,
  },
  state: {
    data: {
      printVersion: false,
    }
  }
};
