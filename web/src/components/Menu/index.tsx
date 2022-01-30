import React from 'react';
import { RiHome5Fill, RiSettings4Fill } from 'react-icons/ri';
import { GiPayMoney, GiReceiveMoney } from 'react-icons/gi';

import * as S from './styles';

import logoImg from '../../assets/logo.svg';

export const Menu: React.FC = () => {
  return (
    <S.Container>
      <img src={logoImg} alt="CaixaBank" />
      <S.Items>
        <S.Item to="/home" activeClassName="active">
          <RiHome5Fill size="24" />
          HOME
        </S.Item>
        <S.Item to="/withdraw" activeClassName="active">
          <GiReceiveMoney size="24" />
          SAQUE
        </S.Item>
        <S.Item to="/deposit" activeClassName="active">
          <GiPayMoney size="24" />
          depósito
        </S.Item>
        <S.Item to="/loan" activeClassName="active">
          <RiSettings4Fill size="24" />
          Configurações
        </S.Item>
      </S.Items>
    </S.Container>
  )
}