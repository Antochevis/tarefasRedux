import { connect } from "react-redux"

function Video({activeLesson, activeModule}) {
  return (
    <div>
      <strong>Módulo {activeModule ? `Módulo: ${activeModule.title}` : 'Selecione um módulo'}</strong>
      <br />
      <span>Aula {activeLesson ? `Aula: ${activeLesson.title}` : 'Selecione uma aula'}</span>
    </div>
  )
}

export default connect(state => ({
  activeModule: state.videoReducer.activeModule,
  activeLesson: state.videoReducer.activeLesson
}))(Video)