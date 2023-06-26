import React, { useState } from 'react'
import data from '../data/pokedex.json'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Badge, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faHandDots, faHandFist, faHeartPulse, faShieldHalved } from '@fortawesome/free-solid-svg-icons'
import { faHandBackFist } from '@fortawesome/free-regular-svg-icons';
import SearchBar from './SearchBar';

export default function CardPokemon() {
    
    const [pokemons, setPokemons] = useState(data);

    return (

        <div className='container mt-5'>
            <SearchBar pokemonData={data} setData={(val) => setPokemons(val)}></SearchBar>

            <div className='row justify-content-center'>
                {pokemons.map((pokemon) =>
                    <Card className='col-12 col-sm-6 col-xl-3 ms-1 mt-2'>

                        <Card.Body>
                            <Card.Title>
                                <p className='fw-bold fs-3'>#{pokemon.id} {pokemon.name.french ? pokemon.name.french : pokemon.name.english}</p>
                                <div className='w-100 d-flex justify-content-between'>
                                    <Badge bg="success">{pokemon.name.english} </Badge>
                                    <Badge bg="danger">{pokemon.name.japanese}</Badge>
                                    <Badge bg="primary">{pokemon.name.chinese}</Badge>
                                </div>

                            </Card.Title>
                            <Card.Text>
                                <ListGroup className='w-50 m-auto'>
                                    <ListGroup.Item className='d-flex justify-content-between fw-bold'>
                                        <FontAwesomeIcon icon={faHeartPulse} size='2xl' />

                                        {pokemon.base.HP}
                                    </ListGroup.Item>

                                    <ListGroup.Item className='d-flex justify-content-between fw-bold'>
                                        <FontAwesomeIcon icon={faHandFist} size='2xl' />

                                        {pokemon.base.Attack}
                                    </ListGroup.Item>

                                    <ListGroup.Item className='d-flex justify-content-between fw-bold'>
                                        <FontAwesomeIcon icon={faShieldHalved} size='2xl' />

                                        {pokemon.base.Defense}
                                    </ListGroup.Item>

                                    <ListGroup.Item className='d-flex justify-content-between fw-bold'>
                                        <FontAwesomeIcon icon={faHandBackFist} size='2xl' />
                                        {pokemon.base['Sp. Attack']}
                                    </ListGroup.Item>

                                    <ListGroup.Item className='d-flex justify-content-between fw-bold'>
                                        <FontAwesomeIcon icon={faHandDots} size='2xl' />
                                        {pokemon.base['Sp. Defense']}
                                    </ListGroup.Item>

                                    <ListGroup.Item className='d-flex justify-content-between fw-bold'>
                                        <FontAwesomeIcon icon={faBolt} size='2xl' />

                                        {pokemon.base.Speed}
                                    </ListGroup.Item>
                                </ListGroup>
                                {pokemon.type.map((type => {
                                    if (type == 'Fire') {
                                        return <Button className='ms-2 mt-2' variant="danger">{type}</Button>
                                    } else if (type == 'Water') {
                                        return <Button className='ms-2 mt-2' variant="primary">{type}</Button>
                                    } else if (type == 'Grass') {
                                        return <Button className='ms-2 mt-2' variant="success">{type}</Button>
                                    } else if (type == 'Poison') {
                                        return <Button className='ms-2 mt-2' variant="secondary">{type}</Button>
                                    } else if (type == 'Flying') {
                                        return <Button className='ms-2 mt-2' variant="info">{type}</Button>
                                    } else if (type == 'Bug') {
                                        return <Button className='ms-2 mt-2' variant="warning">{type}</Button>
                                    } else if (type == 'Normal') {
                                        return <Button className='ms-2 mt-2' variant="light">{type}</Button>
                                    } else if (type == 'Electric') {
                                        return <Button className='ms-2 mt-2' variant="dark">{type}</Button>
                                    } else if (type == 'Ground') {
                                        return <Button className='ms-2 mt-2' style={{ background: '#a4805d', borderColor: '#a4805d' }}>{type}</Button>
                                    } else if (type == 'Fairy') {
                                        return <Button className='ms-2 mt-2' style={{ background: '#f9cfd4', borderColor: '#f9cfd4' }}>{type}</Button>
                                    } else if (type == 'Fighting') {
                                        return <Button className='ms-2 mt-2' style={{ background: '#ab898a', borderColor: '#ab898a' }}>{type}</Button>
                                    } else if (type == 'Psychic') {
                                        return <Button className='ms-2 mt-2' style={{ background: '#a18c4d', borderColor: '#a18c4d' }}>{type}</Button>
                                    } else if (type == 'Rock') {
                                        return <Button className='ms-2 mt-2' style={{ background: '#8e8889', borderColor: '#8e8889' }}>{type}</Button>
                                    } else if (type == 'Steel') {
                                        return <Button className='ms-2 mt-2' style={{ background: '#5ba2ac', borderColor: '#5ba2ac' }}>{type}</Button>
                                    } else if (type == 'Ice') {
                                        return <Button className='ms-2 mt-2' style={{ background: '#edf9f9', borderColor: '#edf9f9', color: 'black' }}>{type}</Button>
                                    } else if (type == 'Ghost') {
                                        return <Button className='ms-2 mt-2' style={{ background: '#392b4c', borderColor: '#392b4c' }}>{type}</Button>
                                    }else if (type == 'Dragon') {
                                        return <Button className='ms-2 mt-2' style={{ background: '#e98645', borderColor: '#e98645' }}>{type}</Button>
                                    }else if (type == 'Dark') {
                                        return <Button className='ms-2 mt-2' style={{ background: '#49413c', borderColor: '#49413c' }}>{type}</Button>
                                    }
                                }))}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )}
            </div>
        </div>
    )
}
