import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        todos: [
            {
                id: 0,
                title: 'Lavar a louça',
                isCompleted: false
            },
            {
                id: 1,
                title: 'Lavar o carro',
                isCompleted: true
            },
            {
                id: 2,
                title: 'Pagar a conta de luz',
                isCompleted: false
            },
            {
                id: 3,
                title: 'Comprar as frutas da semana',
                isCompleted: false,
            },
            {
                id: 4,
                title: 'Matricular os filhos no inglês',
                isCompleted: true
            }
        ]
    },
    mutations: {
        ADD_TODO(state, payload) {
            state.todos.push(payload)
            localStorage.todos = JSON.stringify(state.todos);
        },
        CONCLUIR_TODO(state, payload) {
            Vue.set(state.todos, payload.idx, payload.obj)
            localStorage.todos = JSON.stringify(state.todos);
        },
        SETAR_ARRAY(state, payload) {
            state.todos = payload;
        }
    },
    actions: {
        addTodo(context, payload) {
            context
            let ultimoId = context.state.todos.lenght === 0 ? 0 : context.state.todos[context.state.todos.length - 1].id;
            console.log(payload)
            let { title, isCompleted } = payload;
            context.commit('ADD_TODO', { id: ultimoId + 1, title: title, isCompleted: isCompleted })
        },
        concluirTodo(context, payload) {
            context
            let obj = context.state.todos.find(item => item.id === payload)
            obj.isCompleted = !obj.isCompleted
            context.commit('CONCLUIR_TODO', {
                idx: payload,
                obj: obj
            })

        }

    },
    getters: {
        percentageTodoCompleted(state) {
            let quantityTodoCompleted = 0;
            state.todos.map((item) => {
                if (item.isCompleted) {
                    quantityTodoCompleted++;
                }
            });
            let percetage = (quantityTodoCompleted * 100) / state.todos.length
            return percetage
        },
        totalOfTodos(state) {
            return state.todos.length;
        },
        listOfTodos(state) {
            return state.todos;
        }
    }
})
