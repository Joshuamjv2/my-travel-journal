import './App.css';
import Card from './components/Card';
import data from './data'
import Navbar from './components/Navbar';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faGlobe, faMapPin } from '@fortawesome/free-solid-svg-icons'

library.add(faMapPin, faGlobe)

function App() {
  const new_data = data.map(item => 
      <Card key={item.title} {...item}/>
)
  return (
    <div>
      <Navbar/>
      <div className="section">
          {new_data}
      </div> 
    </div>
  );
}

export default App;
