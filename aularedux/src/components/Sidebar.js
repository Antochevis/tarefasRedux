import { connect } from "react-redux";

import * as VideoActions from '../store/actions/video'

function Sidebar({ modules, handleLesson }) {

  return (
    <aside>
      {modules.map(module => (
        <div key={module.id}>
          <strong>{module.title}</strong>
          <ul>
            {module.lessons.map(lesson => (
              <li key={lesson.id}>
                {lesson.title}
                <button onClick={() => (handleLesson(module, lesson))}>Selecionar</button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  )
}

const mapStateToProps = state => ({
  modules: state.videoReducer.modules
})

const mapDispatchToProps = dispatch => ({
  handleLesson: (module, lesson) => dispatch(VideoActions(module, lesson))
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)