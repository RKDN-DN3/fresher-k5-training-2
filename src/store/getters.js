export default{
    newTask: state=> state.newTask,
    searchText: state =>state.searchText,
    tasks: state=>state.tasks,
    searchTask: state=>state.tasks.filter((tasks)=> {return tasks.completed} )
}