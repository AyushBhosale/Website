import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import Link from './links'
import Med from './assets/Medizin-1.jpeg'
import Text from './text'
import Card from './card'

// Images for cards:-
import brain from './assets/brain.png'
import heart from './assets/heart.png'
import cancer from './assets/superficial-spreading-melanoma.png'
import chatbot from './assets/chatbot (1).png'
function App() {

  return (
    <>
      <nav className='NavBar'>
        <h1>Rays</h1>
        <ul className='navRight'>
        {/* {<FontAwesomeIcon icon={faMagnifyingGlass}/>} */}
        <li><Link title="Research" href="#research"/></li>
        <li><Link title="About Us" href="#about"/></li>
        <li><Link title="Github" href="#Github"/></li>
        <li><Link title="Contact" href="#Contact"/></li>
        </ul>
      </nav>
      <div className='midSection'>
        <Text/> 
        <img id = "medImage" src={Med} alt=""/>
       
        
      </div>
      <div className="diagnosis">
        <Card img={chatbot} name='Chatbot'/>
        <Card img={brain} name='Parkinson'/>
        <Card img={cancer} name='Skin Cancer'/>
        <Card img={heart} name='Heart disease'/>
      </div>
    </>
  )
}

export default App
