import { useFormik } from "formik"
import { connect } from "react-redux"
import { apiDbc } from "../../services/api"

function Login({auth, dispatch}) {

  async function handleLogin(values) {
    try {
      const {data} = await apiDbc.post('/auth', values)
      const logado = {
        type: 'SET_LOGIN',
        token: data
      }
      localStorage.setItem("token", data)
      apiDbc.defaults.headers.common["authorization"] = data
      dispatch(logado)
      window.location.href = "http://localhost:3000/pessoa"
    } catch (error) {
      alert (error)
    }
  }
  
  const formik = useFormik({
    initialValues: {
      login: '',
      senha: ''
    },
    onSubmit: values => {
      handleLogin(values)
    },
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="login">Login</label>
      <input type="text" id="login" name="login" onChange={formik.handleChange} value={formik.values.login}/>
      <label htmlFor="senha">Senha</label>
      <input type="password" id="senha" name="senha" onChange={formik.handleChange} value={formik.values.senha} />
      <button type="submit">Login</button>
    </form>
  ) 
}

const mapStateToProps = state => ({
  auth: state.AuthReducer.auth
})

export default connect(mapStateToProps)(Login)