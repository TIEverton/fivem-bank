import React from 'react';
import { Button } from './components/Button';
import { debugData } from "./utils/debugData";

import * as S from './styles'

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
    <S.Container>
      <S.Content>

        <Button />
      </S.Content>
    </S.Container>
  );
}

export default App;
