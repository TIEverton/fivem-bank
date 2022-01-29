import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 130px;
  height: 100%;
  background-color: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: 36px;
  }
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-top: 42px;
`;

export const Item = styled(NavLink)`
  position: relative;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: #fff;

  width: 100%;
  height: 100px;

  color: #3c3c3c;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 12px;

  transition: all 0.2s;

  svg {
    margin-bottom: 4px;
  }

  &.active {
    background: #f5f7f7;

    svg {
      color: #db8135;
    }

    &:before {
      content: "";
      position: absolute;
      background-color: #db8135;
      width: 3px;
      height: 100%;
      left: 0;
    }
  }

  &:hover {
    background: #f5f7f7;
  }
`;

export const VerticalBar = styled.div`
  width: 8px;
  height: 40px;
  background: red;
`;
