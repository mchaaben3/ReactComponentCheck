import './App.css';
import ProfilePhoto from './component/Profile/ProfilePhoto.js';
import FullName from './component/Profile/FullName.js';
import Address from './component/Profile/Address.js';
import Icons from './component/Profile/Icons.js';
import Skills from './component/Profile/skills'

function App() {
  return (
    <div className="App">
      <div className="App-header">
          <ProfilePhoto />
          <FullName />
   
          <Icons />
    
         
     </div>
    <br />
     <Address />
     <Skills />
    </div>
     
  );
}

export default App;
