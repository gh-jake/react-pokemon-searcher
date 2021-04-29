import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import PokemonCard from './PokemonCard'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state = {
    pokemonArray: [],
    name: '',
    hp: '',
    frontURL: '',
    backURL: '',
    search: ''
  }

  onType = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  submitForm = (event) => {
    event.preventDefault();
    const nameInput = this.state.name;
    const hpInput = this.state.hp;
    const frontInput = this.state.frontURL;
    const backInput = this.state.backURL;

    fetch('http://localhost:3000/pokemon', {
      method: "POST",
      headers:
      {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        "name": `${nameInput}`,
        "hp": `${hpInput}`,
        "sprites": {
          "front": `${frontInput}`,
          "back": `${backInput}`
        }
      })
    })
    .then(res => res.json())
    .then(data => this.addPokemon(data));
  }

  addPokemon = (pokemonObj) => { 
    this.setState({
      pokemonArray: [...this.state.pokemonArray, pokemonObj]
    })
    return <PokemonCard key={pokemonObj.id} pokemon={pokemonObj} /> 
  }

  onSearch = () => {
    return this.state.pokemonArray.filter(pokemon => pokemon.name.includes(this.state.search))
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(data => {
      this.setState({
        pokemonArray: data
      });
    });
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm onType={this.onType} submitForm={this.submitForm}/>
        <br />
        <Search onType={this.onType}/>
        <br />
        <PokemonCollection pokemonArray={this.onSearch()} />
      </Container>
    )
  }
}

export default PokemonPage
