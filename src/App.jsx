import Hero from './Components/Hero'
import Main from './Components/main'
import { Button } from 'react-daisyui'

const App = () => {
  return (
    <>
    <div className='bg-blue-500 text-white p-4'>
      <Main/>
      <button className='btn btn-secondary'>Secondary button DaisyUI</button>
    </div>
    <div>
      <Hero />
    </div>
    </>
  )
}

export default App