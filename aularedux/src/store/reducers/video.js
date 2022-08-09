const INITIAL_STATE = {
  activeLesson: null,
  activeModule: null,
  modules: [
    {id: 1, title: 'Iniciando com react', lessons: [
      {id: 1, title: 'primeira aula'},
      {id: 2, title: 'segunda aula'}
    ]},
    {id: 2, title: 'Iniciando com redux', lessons: [
      {id: 3, title: 'terceira aula'},
      {id: 4, title: 'quarta aula'}
    ]}
  ]
}

function videoReducer(state = INITIAL_STATE, action) {
  if (action.type === 'SET_LESSON') {
    console.log(action)
    return {
      ...state,
      activeLesson: action.lesson,
      activeModule: action.module
    }
  }
  
  return state
}

export default videoReducer