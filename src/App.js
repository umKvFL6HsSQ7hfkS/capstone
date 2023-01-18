import logo from './logo.svg';
import './App.css';
import './components/CollapsibleExample.js';
import CollapsibleExample from './components/CollapsibleExample.js';
import ContactForm from './components/ContactForm';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      
      <CollapsibleExample/>
      <ContactForm/>
        
    </div>
  );
}

export default App;
