import './App.css';
import Random from './components/Random';
import Tag from './components/Tag';


function App() {

  return (
    <div className="w-full flex flex-col background items-center h-auto">
      <h1 className='bg-white rounded-lg w-11/12 mt-[40px] px-10 py-2 text-4xl text-center font-bold'>RANDOM GIFs</h1>
      <div className='flex flex-col py-12 w-1/2'>
        <Random />
        <Tag />
      </div>
    </div>
  );
}

export default App;
