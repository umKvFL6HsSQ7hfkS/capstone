import CollapsibleExample from "./CollapsibleExample";
import "./Home.css";
import dominoes from "../images/dominoes.png";
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const Home = () => {
    return <div className="Home-page">
        <CollapsibleExample/>
        <div className="flex-first-info">  
        <div className="info-block">
            <h3>A Community for You</h3>
            <p id="text"> It’s normal to feel lonely as you age -- WHO
            recently reported that over 1/3 of older people 
            feel isolated from friends, families, and loved ones. 
            However, that doesn't mean you have to.
            </p>
            <h4>We're here to help.</h4>
        </div>
        <div className="lottie"> 
        <Player id="heart"
            autoplay
            loop
            src="https://assets5.lottiefiles.com/packages/lf20_llxa9mhh.json"
            style={{ height: '50vh', width: '50vw' }}
            >
            <Controls visible={false}  />
        </Player>
        </div>
        </div>

        <div className="flex-second-info"> 
        <img src={dominoes} className="dominoes-img"/>
        <div className="info-block"> 
        <h3> What We Do</h3>
        <p id="text"> Senior loneliness is an extremely prevelant issue
        in today's world. According to the CDC, senior citizens are likely 
        to suffer from social isolation as they often live alone, have experienced
        the loss of friends or family, and have chronic illnesses. 
        </p>

        <p id="text"> At Senior Services, we connect older folks to one another
        through various events and meet ups. We also provide shuttle services, 
        as we know mobility is also a major issue in this community.
        </p>
        </div>
        </div>

        
    </div>
};

export default Home;