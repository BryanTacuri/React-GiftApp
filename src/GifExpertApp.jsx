import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
const [categories, setCategories] = useState(['One Punch']);

/* const handleAdd = () => {
    setCategories(cats => [...cats, "O"]);
} */
  return (
    <>
        <h2>GifExpertApp</h2>
        <hr />
        <AddCategory setCategories= {setCategories} />
        <ol>
            {
                categories.map( category => (<GifGrid key={category} category= {category} /> ))
            }
        </ol>
    </>
  )
}

GifExpertApp.propTypes = {}