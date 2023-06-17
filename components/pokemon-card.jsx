import { useEffect, useState } from "react"

export default function PokemonCard(props) {
   const [ pokemon, setPokemon ] = useState({})

   useEffect(()=> {
      fetch(props.url)
      .then(res => res.json())
      .then(res => {
         setPokemon(res)
      })
   },[])
   return (
      <article className="bg-gray-400 rounded-md w-full">
         {!pokemon && 'cargando'}
         {pokemon && (
         <img className="" src={pokemon?.sprites?.front_default} alt={pokemon.name} />)}
         <p className="text-slate-50 text-center text-base">{pokemon.name}</p>
      </article>
   )
}