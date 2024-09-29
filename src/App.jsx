import { useState } from "react"
import { Home } from "./screens/Home"
import { Musica } from "./screens/Musica"

function App() {
  const [screen, setScreen] = useState('Home')
  const [musicaData, setMusicaData] = useState(
    {
      id: '',
      titulo: '',
      cifra: '',
      tom: '',
      acordes: '',
      capotraste: ''
    }
  )
  return (
    <>
      {screen === 'Home'
        ? <Home setScreen={setScreen} setMusicaData={setMusicaData}/>
        : <Musica data={musicaData} setScreen={setScreen} setMusicaData={setMusicaData}/>}
    </>
  )
}

export default App
 