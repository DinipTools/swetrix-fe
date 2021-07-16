import Signup from './Signup'
import { useDispatch } from 'react-redux'
import { authActions } from 'redux/actions/auth'

export default () => {
  const dispatch = useDispatch()

  const onSubmit = data => {
    delete data.repeat
    dispatch(authActions.signupAsync(data, () => {}))
  }

  return (
    <Signup onSubmit={onSubmit} />
  )
}