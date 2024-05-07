

import Fifthpage from './Components/Fifthpage';
import Fourthpage from './Components/Fourthpage';
import Frontpage from './Components/Frontpage';
import Header from './Components/Header';
import Secondpage from './Components/Secondpage';
import Thirdpage from './Components/Thirdpage';
function App() {
  return (
    <div>
      <div className="background">
      <Header />
      <Frontpage />
      </div>
      <div className="background2">
      <Secondpage/>      
      </div>     
      <Thirdpage/>
      <div className="background3">      
      <Fourthpage/> 
      </div>
      <Fifthpage/>
    </div>
  );
}

export default App;
