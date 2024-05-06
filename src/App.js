

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
      <Secondpage/>
      {/* 
      <Thirdpage/>
      <Fourthpage/> */}
    </div>
  );
}

export default App;
