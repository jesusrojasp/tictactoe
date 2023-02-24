import Game from '../components/game'
import Navbar from '../components/ui/navbar';

const Home = () => {
  return (
    <div className='w-full h-screen'>
      <Navbar btnText='STATS' btnRoute='/stats' />
      <div className="flex flex-col w-full p-4 justify-center items-center gap-6">
        <Game />
      </div>
    </div>
  )
}

export default Home;
