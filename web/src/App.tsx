import React from 'react';
import { debugData } from "./utils/debugData";
import { Home } from './pages/Home'
// This will set the NUI to visible if we are
// developing in browser
debugData([
  {
    action: 'setVisible',
    data: true,
  }
])


const App: React.FC = () => {
  return (
    <div className="container-nui">
      <Home />
    </div>
  );
}

export default App;
