
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from './Screens/HomeScreen';
import SideBar from './Components/SideBar';
import TableContainer from './Containers/TableContainer';
import SubjectScreen from './Screens/SubjectScreen';
import LoadingSpinner from './Components/Loader';
import useStore from './store/useStore'
function App() {
  const {loading} = useStore()
  return (
    <div className="App flex h-[100vh] w-[100vw] ">
     <div className='w-[25%] border-r-[4px] border-gray'>
      <SideBar />
     </div>
     <div className='w-[75%] flex flex-col'>
      <div className='h-[15vh] border-b-[4px] items-center flex px-4 border-gray justify-between'>
      

      
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/subject/:id" element={<SubjectScreen />} />
      </Routes>
   
   </div>
  
    <div className='pt-2 flex flex-grow-[0.9] items-center justify-center'>
    {loading ? <LoadingSpinner /> :   <TableContainer />}
      </div>
     
      </div>
     
    </div>
  );
}

export default App;
