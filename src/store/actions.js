import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000/api/";

 //const isProduction = process.env.NODE_ENV === 'production'; 
export default {
  
  /* initialize({commit}){
    console.log("initialize")
    const token = localStorage.getItem('authToken');
    if(isProduction&&token){
      commit("removeToken")
    }
    if (!isProduction && token) {
      localStorage.removeItem("authToken")
    }
  }, */
  getUserData({ commit }) {
    console.log("getUserData")
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
        context.commit("getTask", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  addTask({ commit }, task) {
    
    axios.post("tasks", {
      title: task,
      completed: 0
    })
    .then(()=> {
      commit("addTask", task);
    })
    .catch((error)=>{
      alert("thêm task không thành công", error)
    })
    
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
        alert('Đăng nhập thành công')
      })
      .catch((error) => {
        console.log(error);
        alert('Đăng nhập thất bại')
      });
  },

  register({commit},userForm) {
    console.log("user", userForm);
    return(
      axios
        .post(
          'register',
          {
            name:userForm.name,
            email: userForm.email,
            password: userForm.password,
            phone: userForm.phone
          }
        )
        .then((response) => {
          response.message
          
          commit('register',userForm)
        })
        .catch((error) => {
          console.log(error);
        })
    )
  },
  logout({commit}){
    
    axios.post("logout")
    .then(()=>{
      commit('setUser', null)
      commit('setToken', null)
      localStorage.removeItem("authToken")
      localStorage.removeItem("user")
      alert('Đăng xuất tài khoản thành công')
    })
  },
  
  forgotPassword({commit}, email){
    axios.post("reset-password",{'email':email})
    .then((response)=>{
      commit('setEmail',email)
      alert( response.status)
    })
    .catch((error)=>{
      alert("Đã có lỗi: ", error)
    })
  },
  resetpassword({commit}, data){
    axios.post('reset',data)
    .then((response)=>{
      commit('',data)
      alert(response.message)
    })
  }
};
