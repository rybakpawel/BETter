import heroImage from '../../images/football.jpg'

const Main = () => {
    return (
        <div className='main'>
            <img className='main__hero' src={heroImage} alt="mainImage" />
            <h2 className='main__quote'>Obstawiaj..<br></br>oglądaj..<br></br>wygrywaj!</h2>
        </div>
    )
}

export default Main