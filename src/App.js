

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
      <Thirdpage/>
      </div>
      {/* 
      
      <Fourthpage/> */}
    </div>
  );
}

export default App;
