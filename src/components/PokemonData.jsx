import React, { useState } from 'react';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const TYPE_COLORS = {
  bug: 'B1C12E',
  dark: '4F3A2D',
  dragon: '755EDF',
  electric: 'FCBC17',
  fairy: 'F4B1F4',
  fighting: '823551D',
  fire: 'E73B0C',
  flying: 'A3B3F7',
  ghost: '606082',
  grass: '74C236',
  ground: 'D3B357',
  ice: 'A3E7FD',
  normal: 'C8C4BC',
  poison: '934594',
  psychic: 'ED4882',
  rock: 'B9A156',
  steel: 'B5B5C3',
  water: '3295F6'
}

const STAT_COLORS = {
  hp: 'FF5959',
  attack: 'F5AC78',
  defense: 'FAE078',
  'special-attack': '9DB7F5',
  'special-defense': 'A7DB8D',
  speed: 'FA92B2'
}

const STAT_NAMES = {
  hp: 'HP',
  attack: 'Attack',
  defense: 'Defense',
  'special-attack': 'Special Attack',
  'special-defense': 'Special Defense',
  speed: 'Speed'
}


export default function PokemonData(props) {

  
  return (
    <Container className="mt-2">
      <Row>
        <Col xs={12} md={6}>
          <Card>
            <Card.Header>
              <h5>{capitalizeFirstLetter(props.name)}</h5>
              <img src={props.sprite} alt={props.name} />
            </Card.Header>
            <Card.Body>
              <h5>Abilities</h5>
              {props.abilities.map((ability, key) => (
                <div key={key}>
                  <span>{capitalizeFirstLetter(ability.ability.name)}</span>
                </div>
              ))}
              <h5>Types</h5>
              {props.types.map((type, key) => (
                <div 
                  key={key} 
                  style={{
                    backgroundColor: `#${TYPE_COLORS[type.type.name]}`,
                    color: 'white'
                  }}
                >
                  <p>{capitalizeFirstLetter(type.type.name)}</p>
                </div>
              ))}
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card>
            <Card.Body>
              <h4>Base Stats</h4>
              {props.stats.map((stat, key) => (
                <div key={key}>
                  <strong style={{marginBottom: '10px'}}>{STAT_NAMES[stat.stat.name]}</strong>
                  <div className="progress" style={{height: '24px', fontSize: '16px', fontWeight: 700, marginBottom: '4px'}}>
                    <div class="progress-bar" role="progressbar" style={{width: `calc(${stat.base_stat} / 255 * 100%)`, backgroundColor: `#${STAT_COLORS[stat.stat.name]}`, color: 'white'}} aria-valuenow={`${stat.base_stat}`} aria-valuemax={255} >{stat.base_stat}</div>
                  </div>
                </div>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}