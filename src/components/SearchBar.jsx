import React, { useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'

export default function SearchBar({ pokemonData, setData }) {

    const HandleSearch = (e) => {
        const results = pokemonData.filter((pokemon) => {
           return pokemon.name.french.toLowerCase().includes(e.toLowerCase())
        }
        );
        setData(results);
    }

    return (

            <Form.Control
                placeholder="Nom de pokemon"
                onChange={(e) => HandleSearch(e.target.value)}
                className='mb-3 w-50 m-auto mt-5'
            />
  
    )
}