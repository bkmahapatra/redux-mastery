import { useState } from 'react'
import './App.css'
import PostsList from './features/posts/PostsList'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import SinglePost from './features/posts/SinglePost'
import AddPost from './features/posts/AddPost'

function App() {
  return <Routes>
    <Route path='/' element={<Layout />}>
      <Route index element={<PostsList />} />

      <Route path='/post'>
        <Route index element={<AddPost />} />
        <Route path=":postId" element={<SinglePost />} />
      </Route>
    </Route>
  </Routes>
}

export default App
