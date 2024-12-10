import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../assets/navbar/Navbar';
import Home from './Home/Home';
import NotFound from './notfound/NotFound';
import Home_User from './home_user/Home_User';
import SinglePost from './singlePost/SinglePost';
import ExplorePeople from './explorePeople/ExplorePeople';





const Pages_Router = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home_user' element={<Home_User />} />
                <Route path='singlePost/:id' element={<SinglePost />} />
                <Route path='ExplorePeople' element={<ExplorePeople />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </Router>
    )
}

export default Pages_Router;