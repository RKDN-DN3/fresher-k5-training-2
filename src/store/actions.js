import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000/api/";

export default {
  getUserData({ commit }) {
    axios
      .get(process.env.VUE_APP_API_URL + "user")
      .then((response) => {
        commit("setUserData", response.data);
      })
      .catch(() => {
        localStorage.removeItem("authToken");
      });
  },
  getTask(context) {
    axios
      .get("tasks")
      .then((response) => {
        console.log("gettask api");
        context.commit("getTask", response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  addTask({ commit }, task) {
    axios.post("tasks", {
      title: task,
      user_id: 1,
    });
    commit("addTask", task);
  },
  /*   editTask({commit}, task){
        
    },*/
  removeTask({ commit }, task) {
    axios.delete("tasks/" + task.id);
    commit("removeTask", task);
  },
  completeTask({ commit }, task) {
    console.log("task id", task.id);
    axios.put("tasks/" + task.id, {
      title: task.title,
      completed: task.completed,
    });
    commit("completeTask", task);
  },
  clearTask({ commit }) {
    commit("clearTask");
  },

  sendLogin({ commit }, data) {
    axios
      .post("login", {
        email: data.email,
        password: data.password,
      })
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem("authToken", token);
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        commit("setToken", token);
        commit("setUser", response.data.user);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  register(userForm) {
    console.log("user", userForm);

    axios
      .post(
        'register',userForm,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => response.message)
      .catch((error) => {
        console.log(error);
      });
  },
};
