
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useRef, useState } from 'react';
import useStore from '../../store/useStore';
import { Link, useNavigate } from 'react-router-dom';



function SideBar() {

    const nameForm = useRef(null)
    const {fetch,loading,trendingSearchData,setSearchingFor,offSet} = useStore();
    const [trendingData,setTrendingData] = useState(trendingSearchData)
    const navigate = useNavigate()
    const handleSearch = (e) => {
        e.preventDefault();
        const text = nameForm.current['searchSub'].value
        if(text=="") setTrendingData(trendingSearchData)
        else {
        setTrendingData(trendingData.filter(i=>i.toLowerCase()
        .includes(text.toLowerCase()))) }
        
      };
    
      const openSubject = (val) =>{
        
        fetch(val.replace(" ","_"),offSet)
        navigate(`/subject/${val}`)

      }
   
    return (
        <div className='flex justify-center flex-col p-3 gap-y-2'>
           <div className='font-bold text-xl'>Trending Search</div>
      <Paper
        ref={nameForm}
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center',width:'100%' }}
        onChange={(e)=>handleSearch(e)} >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search ..."
        inputProps={{ 'aria-label': 'search Subjects','name':'searchSub' }}
        
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
      <div className='flex flex-col gap-y-1.5'>
      {trendingData.map((i)=>
      
     
      <button onClick={(e)=>openSubject(e.target.name)} name={i.toLowerCase()} className="text-start hover:bg-pink">{i}</button>)}
      </div>
        </div>
    );
}

export default SideBar;