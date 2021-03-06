import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPokemonAsync, selectPokemon } from './pokemonSlice'

function Pokemon(props) {
  const dispatch = useDispatch()
  const {
    pokemon: { singlePokemon, team },
  } = useSelector(selectPokemon)
  // const { team } = useSelector(selectTeam)
  // console.log(team)
  console.log({ singlePokemon, team })
  return (
    <div>
      <div>
        <button
          onClick={() =>
            dispatch(getPokemonAsync(Math.floor(Math.random() * 200)))
          }
        >
          Get New Pokemon
        </button>
        {team.map((member) => {
          return (
            <>
              <h2>{member.name}</h2>
              <img src={member.sprites.front_shiny} alt="ayy" />
            </>
          )
        })}
      </div>
    </div>
  )
}

export default Pokemon
