import MoviesList from './MoviesList';
import './App.css';
import Filter from './Filter';
import Add from './Add';
import React, {useState} from 'react';
import Movies from './Movies';
import { Routes, Route } from "react-router-dom";




  function App () {

    const BaExpendales2 = () => {
      return (<>
      <div>
        <h2>Film d'action</h2>
        <video width ="320" height ="240" autoplay>
          <source src ="https://www.google.com/search?q=bande+annonce+EXPENDALES+2&rlz=1C1PNJJ_frSN1065SN1065&oq=bande+annonce+EXPENDALES+2&aqs=chrome..69i57j0i22i30l3j0i8i13i30.25142j0j7&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:fd94d441,vid:tBrklksBbTM" type = "video/mp4"/>
        </video>
      </div>
      </>
    );}
    const BaLaBelleEpoque = () => { 
      return (<>
      <div>
        <h2>Film d'amour</h2>
        <video width ="320" height ="240" autoplay>
          <source src ="https://www.google.com/search?q=bande+annonce+LA+BELLE+EPOQUE&sca_esv=559361602&rlz=1C1PNJJ_frSN1065SN1065&sxsrf=AB5stBhSziPW-hamnVOi97Hxmg9vKAtmdg%3A1692797778077&ei=UgvmZO6iBNPWkdUPw4yLqAw&ved=0ahUKEwjuk_SR8_KAAxVTa6QEHUPGAsUQ4dUDCA4&uact=5&oq=bande+annonce+LA+BELLE+EPOQUE&gs_lp=Egxnd3Mtd2l6LXNlcnAiHWJhbmRlIGFubm9uY2UgTEEgQkVMTEUgRVBPUVVFMggQABiABBjLAUjtggFQ8wdYu29wAngBkAEBmAHQFqABz3mqARMwLjguNy4yLjEuMi4wLjMuMS4yuAEDyAEA-AEBwgIKEAAYRxjWBBiwA8ICBBAjGCfCAgYQABgWGB7iAwQYACBBiAYBkAYI&sclient=gws-wiz-serp#fpstate=ive&vld=cid:49b54656,vid:j-J7dpDR06s" type = "video/mp4"/>
        </video>
      </div>
      </>
    );}
    const BaGoodMorningEngland = () => { 
      return (<>
      <div>
        <h2>Film romantique</h2>
        <video width ="320" height ="240" autoplay>
          <source src ="https://www.google.com/search?q=bande+annonce+GOOD+MORNING+ENGLAND&sca_esv=559361602&rlz=1C1PNJJ_frSN1065SN1065&sxsrf=AB5stBhlQF44B-MxLQa50fYcCEWCjQZY0g%3A1692797865217&ei=qQvmZJr2DLKZkdUP3sugwAU&ved=0ahUKEwja7rq78_KAAxWyTKQEHd4lCFgQ4dUDCA4&uact=5&oq=bande+annonce+GOOD+MORNING+ENGLAND&gs_lp=Egxnd3Mtd2l6LXNlcnAiImJhbmRlIGFubm9uY2UgR09PRCBNT1JOSU5HIEVOR0xBTkQyCBAAGIAEGMsBMggQABiABBjLATIGEAAYFhgeSJegAVDTClj-kAFwAXgBkAEAmAG_BqABlECqAQ4wLjI0LjQuMi4yLjIuMbgBA8gBAPgBAcICChAAGEcY1gQYsAPCAgwQIxiKBRgTGIAEGCfCAgQQIxgn4gMEGAAgQYgGAZAGCA&sclient=gws-wiz-serp#fpstate=ive&vld=cid:64fbfbd7,vid:pzsaiewYZf4" type = "video/mp4"/>
        </video>
      </div>
      </>
    );}
    const BaRevanche = () => { 
      return (<>
      <div>
        <h2>Film policier</h2>
        <video width ="320" height ="240" autoplay>
          <source src ="https://www.google.com/search?q=bande+annonce+LA+REVANCHE&sca_esv=559361602&rlz=1C1PNJJ_frSN1065SN1065&sxsrf=AB5stBgIcRMonpWnTsiEZ656ANRch3uyBQ%3A1692797928447&ei=6AvmZK7jGrmokdUPubWCyAc&ved=0ahUKEwiu983Z8_KAAxU5VKQEHbmaAHkQ4dUDCA4&uact=5&oq=bande+annonce+LA+REVANCHE&gs_lp=Egxnd3Mtd2l6LXNlcnAiGWJhbmRlIGFubm9uY2UgTEEgUkVWQU5DSEUyCBAAGIAEGMsBMggQABiABBjLATIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB5I5OUBUNUKWOTPAXABeAGQAQSYAdQQoAHcaKoBETItMi4xLjIuNC41LjEuMS4xuAEDyAEA-AEBwgIKEAAYRxjWBBiwA8ICDBAjGIoFGBMYgAQYJ8ICBBAjGCfiAwQYACBBiAYBkAYI&sclient=gws-wiz-serp#fpstate=ive&vld=cid:fec6918b,vid:Z9i1EEYRdho" type = "video/mp4"/>
        </video>
      </div>
      </>
    );}
    
      const [fileredMovies, setFilteredMovies] = useState(Movies)
      const [addedMovies, setAddedMovies] = useState("")
      

const handleAdd = (adds) => {
//const {id, posterUrl, title, description, rate} = adds;
  const addedMovies = Movies.push (movie =>{
    const matchingAdds = movie.adds.push
    return matchingAdds;
  } 
  ); setAddedMovies (addedMovies)
}


     
      const handleFilter = (filters) => { 
      const {title, rate} = filters;
      const fileredMovies = Movies.filter(movie => {
        if(title) {
          const matchingTitle = movie.title.toLowerCase().includes(title.toLowerCase())
          return matchingTitle;
        }
        if(rate){
          const matchingRating = movie.rate >= parseInt(rate)
          return matchingRating;
        }
        return true;
        
      })
      setFilteredMovies(fileredMovies)
    }
      return (
        <>
        <h3>liste des films:</h3>
        <Filter onFilter = {handleFilter}/>
        <MoviesList movies = {fileredMovies} />

        <Add onAdd = {handleAdd}/>
        <MoviesList movies = {addedMovies} />

        <Routes>
          <Route path = "/baExpendales2" element = {<BaExpendales2/>}/>
          <Route path = "/baBelleEpoque" element = {<BaLaBelleEpoque/>}/>
          <Route path = "/baGoodMorningEngland" element = {<BaGoodMorningEngland/>}/>
          <Route path = "/baRevanchhe" element = {<BaRevanche/>}/>
        </Routes>

         </>);
        };
  
export default App;
