import React from 'react';
import PaginatedTableComponent from '../../Components/PaginatedTableComponent';
import LoadingButton from '@mui/lab/LoadingButton';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import SendIcon from '@mui/icons-material/Send';
import useStore from '../../store/useStore';
function TableContainer(props) {

    const {loading,data,incOffset,decOffset,offSet,fetch,searchingFor} = useStore();


    const handlePrev = () => {
      decOffset()
      fetch(searchingFor,offSet)
        
    }

    const handleNext = () =>{
        // incOffset()
        console.log(offSet)
        incOffset()
        fetch(searchingFor,offSet)
        
    }

   if(data.length === 0) return <div className='text-xl'>make a search <ContentPasteSearchIcon /> </div>
    return (
        <div >{console.log(offSet)}
           <PaginatedTableComponent />
          <div className='flex justify-end mt-4'>
           <LoadingButton
          size="small"
          onClick={handlePrev}
          startIcon={<SendIcon className='rotate-180'/>}
          loading={offSet!=0&&loading}
          loadingPosition="end"
          variant="outlined"
          className='!mr-2'
          disabled={offSet==0}
        >
          <span>Prev</span>
        </LoadingButton>
        <LoadingButton
          size="small"
          onClick={handleNext}
          endIcon={<SendIcon />}
          loading={loading}
          loadingPosition="end"
          variant="outlined"
        >
          <span>Next</span>
        </LoadingButton>
        </div>
        </div>
    );
}

export default TableContainer;