function handleLesson(module, lesson) {
  return {
    type: 'SET_LESSON',
    module,
    lesson
  }
}

export default handleLesson