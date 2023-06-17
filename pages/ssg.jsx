import PokemonCard from "@/components/pokemon-card"

export default function Home(props) {

   return (
      <>
         <header className="p-10">
            <img className="mx-auto " src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="logo" />
         </header>
         <section className='grid grid-cols-6 grid-flow-col gap-4'>
            {
               props.pokemonList.map(pokemon => {
                  return <PokemonCard key={pokemon.url} url={pokemon.url} />
               })
            }
         </section>
      </>
   )
}

export async function getStaticProps() {
   
   const pokemonList = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
         .then(res => res.json())
         .then(res => res.results)
      
   return {
      props: {
         pokemonList
      }
   }
}