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
    return (
        <div className="flex flex-col items-center gap-4 size-full min-h-min bg-secondary-300 py-10 *:text-secondary-100">
            <IoReturnUpBack className={'absolute right-20 max-sm:top-2 max-sm:right-4 text-2xl hover:text-primary-100 ease-in-out duration-500 active:text-secondary-100 active:transition-transform cursor-pointer'} onClick={handleReturn}/>
            <h1 className="text-3xl font-medium">{data.titulo}</h1>
            <span>Tom: {data.tom}</span>
            <pre>{data.cifra}</pre>
        </div>
    )
}

Musica.propTypes = {
    data: PropTypes.object.isRequired,
    setScreen: PropTypes.func,
    setMusicaData: PropTypes.func
}