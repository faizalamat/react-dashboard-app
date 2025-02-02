
import LoginRightSide from '../../components/LoginRightSide/LoginRightSide'
import LoginLeftSide from '../../components/LoginLeftSide/LoginLeftSide'

function Login() {
  return (
    <div className='flex justify-between h-screen'>
      <LoginLeftSide />
      <LoginRightSide />
      
    </div>
  )
}

export default Login