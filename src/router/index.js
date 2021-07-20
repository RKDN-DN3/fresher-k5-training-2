

import HelloWorld from "../components/HelloWorld"
import TaskList from "../components/TaskList"

export default[
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/task-list',
            name: 'TaskList',
            component: TaskList
        }
    ];



