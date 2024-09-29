import PropTypes from "prop-types"

export function MusicaCard({musica, setScreen, setMusicaData}) {
    const handleGoToMusica = () => {
        setTimeout(() => {
            if(setScreen) setScreen('Musica')
            if(setMusicaData) setMusicaData(
                {
                    id: musica.id,
                    titulo: musica.titulo,
                    cifra: musica.cifra,
                    tom: musica.tom,
                    acordes: musica.acordes,
                    capotraste: musica.capotraste
                }
            )
        }, 500)
    }
    return (
        <button onClick={handleGoToMusica} className="border rounded-lg py-2 w-3/5 max-w-xl hover:bg-secondary-200 ease-in-out duration-500 focus:ring focus:ring-primary-100 focus:border-none">
            <p className="text-secondary-100 text-center capitalize text-lg">{musica.titulo}</p>
        </button>
    )
}

MusicaCard.propTypes = {
    musica: PropTypes.object.isRequired,
    setScreen: PropTypes.func,
    setMusicaData: PropTypes.func
}