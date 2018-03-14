import React from 'react'
import {connect} from 'react-redux'
import {clickHit, clickStand} from '../actions/game'

class PlayerOptions extends React.Component {
  render() {
    const {clickHit, clickStand, deckId} = this.props

    return (
      <div className="playerOptions">
        <button onClick={() => clickHit(deckId)}>HIT</button>
        <button onClick={() => clickStand()}>STAND</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    deckId: state.deckId, dealerValue: state.dealerValue, playerValue: state.playerValue
  }
}

export default connect(mapStateToProps, {clickHit, clickStand})(PlayerOptions)
