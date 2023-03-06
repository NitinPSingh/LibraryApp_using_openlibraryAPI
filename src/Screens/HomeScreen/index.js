import TableContainer from "../../Containers/TableContainer";

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ToggleButton from 'react-toggle-button'
import useStore from '../../store/useStore';
import { useRef } from "react";

const HomeScreen = () => {
  const nameForm = useRef(null)
  const {fetch,loading,trendingSearchData,resetState,fyleSearch,setFyleSearch,setSearchingFor,offset,incOffset} = useStore();
  const onSubmit = (e) => {
      e.preventDefault();
      const text = nameForm.current['searchSub'].value
      resetState();
      setSearchingFor(nameForm.current['searchSub'].value)
      
      if(text.length>0)
     {fetch(text,offset)
     }
    };
    return (
      <>
      <Paper
        ref={nameForm}
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center',width:'40%' }}
        onSubmit={(e)=>onSubmit(e)} >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Books , Author .. "
        inputProps={{ 'aria-label': 'search Subjects','name':'searchSub' }}
        
      />
      <IconButton type="button" sx={{ p: '10px' }} onClick={onSubmit} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
    {/* <div className="flex">
    Fyle Search
    <ToggleButton
      value={ fyleSearch }
      onToggle={() => {
        setFyleSearch(!fyleSearch)
      }} />
      
      </div> */}
      </>
    )
  };
  
  export default HomeScreen;
  