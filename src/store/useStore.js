
import create from "zustand";
import axios from "axios";
import { persist } from 'zustand/middleware';
import { Offset, openLibraryUrl, SearchUrl, TrendingSearch } from "../Constants";
import { generateLastPublish, generate_Data } from "../helper";
const initialState = {
  data : [],
  loading : false,
  trendingSearchData : [...TrendingSearch],
  hasErrors : false,
  offSet : 0,
  rawData:[],
  lastPublishDates:{},
  sorted:false,
  fyleSearch:false,
  searchingFor:""

}

const useStore = create(persist((set) => ({
  ...initialState,
  setFyleSearch:(val)=>set({fyleSearch:val}),
  setSearchingFor:(val)=>set({searchingFor:val}),
  incOffset : () => set((state)=>({offSet:state.offSet+10})),
  decOffset : () => set((state)=>({offSet:state.offSet-10})),
  sort: (state)=> set({data:state.data.sort((a, b) => a.title.localeCompare(b.title)),sorted:!state.sorted}),
  fetch: async (value,offset) => {
    set(() => ({ loading: true }));
   
    set({searchingFor:value})

    try {
      // const lastPublish = await axios.get(
      //   SearchUrl(value,offset)
      // )
      // console.log(lastPublish)
      // const response = await axios.get(
      //  `https://openlibrary.org/subjects/${value}.json?offset=${offset}&&limit=10`

       
      // )

      const response = await axios.get(
        `https://openlibrary.org/search.json?q=${value}&&offset=${offset}&&limit=10`
 
        
       )
      
      
      // set({ lastPublishDates:  generateLastPublish(await lastPublish.data.docs) });
      set({data: generate_Data(await response.data.docs), loading: false})
      
     
    } catch (err) {
      set(() => ({ hasErrors: true, loading: false }));
    }

    
    },
    resetState:()=>set({...initialState})
  })
  ,{
    name:"useStore",
    getStorage: () => sessionStorage,
}));

export default useStore;