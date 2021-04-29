import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {  
  state = {
    clicked: false, 
    image: this.props.pokemon.sprites.front
  }
  
  clickCard = () => {
    if(this.state.clicked === false) {
      this.setState({ 
        clicked: true,
        image: this.props.pokemon.sprites.back
      })
    }
    else {
      this.setState({ 
        clicked: false,
        image: this.props.pokemon.sprites.front
      })
    }
  }

  render() {
    
    return (
      <Card onClick={this.clickCard}>
        <div className='card'>
          <div className="image">
            <img src={this.state.image} alt="oh no!"/>
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.hp} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
