import { useState } from 'react'
import { RiCheckDoubleLine } from 'react-icons/ri'
import { useHistory } from 'react-router-dom'
import * as S from './styles'

export const Keyboard: React.FC = () => {
  const { push } = useHistory()

  const keys = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', 'C', '0',
  ]

  const [value, setValue] = useState<string[]>([])

  const handleClickKey = (key: string) => {
    if (key === 'C') {
      return setValue([])
    }

    if (value.length === 4) return

    setValue(value => [...value, key])
  }

  const handleSubmit = () => {
    if (value.length < 4) return

    if (value.join('') === '1234') {
      push('/home')
    } else {
      setValue([])
    }
  }

  return (
    <S.Container>
      <S.Pins>
        <S.Pin value={!!value[0]} />
        <S.Pin value={!!value[1]} />
        <S.Pin value={!!value[2]} />
        <S.Pin value={!!value[3]} />
      </S.Pins>
      <S.Keyboard>
        {keys.map(key => (
          <S.Key key={key} onClick={() => handleClickKey(key)}>{key}</S.Key>
        ))}
        <S.Key onClick={handleSubmit}><RiCheckDoubleLine /></S.Key>
      </S.Keyboard>

    </S.Container>
  )
}