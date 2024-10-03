import PropTypes from "prop-types"
import { IoReturnUpBack } from "react-icons/io5";

export function Musica({data, setScreen, setMusicaData}) {
    const handleReturn = () => {
        setTimeout(() => {
            if(setScreen) setScreen('Home')
            if(setMusicaData) setMusicaData(
                {
                    id: '',
                    titulo: '',
                    cifra: '',
                    tom: '',
                    acordes: '',
                    capotraste: ''
                }
            )
        }, 500)
    }

    const cifraFiltrada = data.cifra.split('\n').map((linha, index) => {
        if (linha.trim()) {
            const palavras = linha.split(" ").filter(palavra => palavra.trim() !== "").map(palavra => palavra.replace(/\r/g, ""))
            const todasAcordes = palavras.every(palavra => data.acordes.includes(palavra))
            return (
                <span
                    key={index}
                    className={todasAcordes ? 'text-primary-100' : ''}
                >
                    {linha}
                    <br />
                </span>
            )
        }
        return <br key={index}/>
    })

    return (
        <div className="flex flex-col items-center gap-4 size-full min-h-screen bg-secondary-300 py-10 *:text-secondary-100">
            <IoReturnUpBack className={'absolute left-20 max-sm:top-2 max-sm:right-4 text-2xl hover:text-primary-100 ease-in-out duration-500 active:text-secondary-100 active:transition-transform cursor-pointer'} onClick={handleReturn}/>
            <h1 className="text-4xl font-medium">{data.titulo}</h1>
            <span>Tom: &nbsp;
                <button className="text-primary-100 hover:text-orange-700 ease-in-out duration-500 active:text-secondary-100 active:transition-transform">{data.tom}</button>
            </span>
            <pre className="text-lg max-sm:text-sm">{cifraFiltrada}</pre>
        </div>
    )
}

Musica.propTypes = {
    data: PropTypes.object.isRequired,
    setScreen: PropTypes.func,
    setMusicaData: PropTypes.func
}