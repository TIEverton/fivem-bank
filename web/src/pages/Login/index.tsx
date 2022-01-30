import * as S from './styles'

import logoWhiteImg from '../../assets/logo-white.svg'
import { Keyboard } from '../../components/Keyboard'

export const Login: React.FC = () => {
  return (
    <S.Container>
      <img src={logoWhiteImg} alt="CaixaBank" />
      <S.Text>
        Digite seu Código PIN
      </S.Text>
      <Keyboard />
    </S.Container>
  )
}