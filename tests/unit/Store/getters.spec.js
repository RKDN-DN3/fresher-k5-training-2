import  getters  from '@/store/getters.js';


describe('getTask',()=>{
    it('Dua ra cac task đã hoan thanh', ()=>{
        const tasks = [
            {id: 1, title:'code', completed:'false'},
            {id: 2, title:'fix bug', completed:'false'},
            {id: 3, title:'request', completed:'true'},
            {id: 4, title:'close', completed:'fale'},
        ]
        
        const result =[{id: 3, title:'request', completed:'true'}]
        const state = {tasks}
        expect(getters.searchTask(state)).toEqual(result)
    })
})
