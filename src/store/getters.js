export default {
  newTitle: (state) => state.newTitle,
  searchText: (state) => state.searchText,
  tasks: (state) => state.taskData,
  searchTask: (state) =>
    state.taskData.filter((tasks) => {
      return tasks.completed;
    }),

  /*-------------------------------------------*/
  loggedIn: (state) => {
    return state.token !== null;
  },
  getUser: (state)=>{
    return state.user
  },
  getEmailForgot:(state)=>{
    return state.emailForgot
  },
  isAuthenticated: state => !!state.token,
};
