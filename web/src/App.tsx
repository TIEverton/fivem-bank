import React from 'react';
import { debugData } from "./utils/debugData";
import { Menu } from './components/Menu';

import * as S from './styles/app';
import { SystemRoutes } from './routes';
import { useVisibility } from './providers/VisibilityProvider';

// This will set the NUI to visible if we are
// developing in browser
debugData([
  {
    action: 'setVisible',
    data: true,
  }
])


const App: React.FC = () => {
  const { visible } = useVisibility()

  return (
    <S.Container>
      {visible && (
        <S.Content>
          <Menu />
          <SystemRoutes />
        </S.Content>
      )}
    </S.Container>
  );
}

export default App;
