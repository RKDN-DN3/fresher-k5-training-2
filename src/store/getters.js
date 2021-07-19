export default{
    newTitle: state=> state.newTitle,
    searchText: state =>state.searchText,
    tasks: state=>state.taskData,
    searchTask: state=>state.taskData.filter((tasks)=> {return tasks.completed} )
}