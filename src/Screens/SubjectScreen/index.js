import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useStore from '../../store/useStore';
import ToggleButton from 'react-toggle-button'
import { Offset } from '../../Constants';
import { IconButton } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
function SubjectScreen() {
    const param = useParams()
    const navigate = useNavigate()

    const {fetch,loading,trendingSearchData,fyleSearch,setFyleSearch,offSet,resetState,searchingFor} = useStore();
    useEffect(()=>{
      resetState()
        fetch(param.id.replace(" ","_"),offSet)
    },[searchingFor])

    const closeSubject = () =>{
      resetState()
      navigate(`/`)

    }
 
    return (
        <>{console.log(param.id)}
        <div className='text-xl font-semibold'>
            {param.id}
            <IconButton onClick={closeSubject}><CancelIcon /></IconButton>
        </div>
        {/* <div className="flex">
        Fyle Search
        <ToggleButton
          value={ fyleSearch }
          onToggle={() => {
            setFyleSearch(!fyleSearch)
          }} />
          
          </div> */}
          </>
    );
}

export default SubjectScreen;