import {Routes, Route} from 'react-router-dom'
import { MovieDetail, MovieList, Search, PageNotFound } from '../pages'

function AllRoutes () {
    return (
        <Routes>
            <Route path='/home' element={<MovieDetail />} />
            <Route path='/movies/title/:id' element={<MovieDetail />} />
            <Route path='/movies/top' element={<MovieList />} />
            <Route path='/movies/popular' element={<MovieList />} />
            <Route path='/movies/upcoming' element={<MovieList />} />
            <Route path='/movies/search' element={<Search />} />
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    );
}
export default AllRoutes;