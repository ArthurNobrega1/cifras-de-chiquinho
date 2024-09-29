import { useEffect, useState } from "react"
import { MusicaCard } from "../components/MusicaCard"
import PropTypes from "prop-types"

export function Home({setScreen, setMusicaData}) {
  const [musicas, setMusicas] = useState([])

  useEffect(() => {
    const fetchMusicas = async() => {
      try {
        const response = await fetch('https://cifras-de-chiquinho.onrender.com/all')
        const data = await response.json()
        setMusicas(data)
      } catch (error) {
        console.error('Erro ', error)
      }
    }
    fetchMusicas()
  }, [])

  return (
    <div className="flex flex-col gap-4 size-full bg-secondary-300 py-10">
      <h1 className="text-secondary-100 text-center text-6xl font-medium">Cifras de Chiquinho</h1>
      <main className="flex flex-col items-center py-10 flex-1">
        {musicas.length 
          ? musicas.map(musica => <MusicaCard musica={musica} setScreen={setScreen} setMusicaData={setMusicaData} key={musica.id}/>)
          : <p className="text-secondary-100">Sem músicas disponíveis</p>
        }
      </main>
    </div>
  )
}

Home.propTypes = {
    setScreen: PropTypes.func,
    setMusicaData: PropTypes.func
}