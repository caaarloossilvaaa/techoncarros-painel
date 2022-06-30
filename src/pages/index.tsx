import { Input } from '@material-tailwind/react'
import type { NextPage } from 'next'
import styles from '../styles/Login.module.css'

const Home: NextPage = () => {
  return (
    <>
      <div id={styles.container} className='flex justify-center items-center'>
        <div className='flex flex-col flex-1 border'>
          <h3>Login</h3>
          <form action="">
            <div className='flex flex-col'>
              <Input variant='standard' size='md' label='Usuario' />
            </div>
          </form>
          <div className="flex flex-row justify-between">
            <h2>ESQUECI MINHA SENHA</h2>
            <h2>ESQUECI MEU USUARIO SENHA</h2>
          </div>
          <div>

          </div>
        </div>
        <div className='flex-1 border'>
          <h3>TechON</h3>
        </div>
      </div>      
    </>
  )
}

export default Home
