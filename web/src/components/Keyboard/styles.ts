import styled from "styled-components";

export const Container = styled.div``;

export const Keyboard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 18px;
`;

export const Key = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #00578c;
  border: 1px solid #004772;
  border-radius: 3px;

  cursor: pointer;

  font-size: 20px;
  font-weight: 600;

  transition: background-color 0.2s;

  &:hover {
    background-color: #db8135;
  }
`;

export const Pins = styled.div`
  margin: 14px 20px;

  display: flex;
  justify-content: space-between;
`;

export const Pin = styled.div<{ value?: boolean; error?: boolean }>`
  width: 18px;
  height: 18px;
  background: #00578c;
  border: 1px solid #004772;
  box-sizing: border-box;
  border-radius: 50%;

  ${({ value }) => value && `background: #db8135;`}
  ${({ error }) => error && ` animation: shake-animation 2s ease 2s;`}
`;
