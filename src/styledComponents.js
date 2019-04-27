import styled from 'styled-components';

export const DefaultStyle = styled.div`
  font-family: sans-serif;
  margin: 0;
  padding: 0;
`

export const Container = styled.div `
  border-radius: 1rem;
  border: .2rem solid blue;
  box-shadow: 0 .3rem .5rem rgba(0, 0, 0, .5);
  width: 50%;
  margin: 0 auto;
  padding: .5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 2fr repeat(3, 1fr);
  align-items: center;
  text-align: center;
  background: linear-gradient(to top right, #0061ff, #00d8f9);
  font-size: 1.2rem;
`

export const Title = styled.div `
  grid-column-start: span 2;
  font-size: 2rem;
  font-weight: 700;
`

export const DateContainer = styled.div`
  grid-row-start: span 2;
`

export const Time = styled.div`
  font-size: 2rem;
`

export const TempMain = styled.div`
  font-size: 3rem;
`

export const Button = styled.button`
  grid-column-start: span 2;
  padding: .3rem .2rem;
  border-radius: 1rem;
  font-size: 1rem;
  width: 50%;
  margin: 0 auto;
  background-color: white;
  transition: all 200ms ease-in;

  :hover {
    background-color: black;
    color: white;
  }
`

export const TempHi = styled.div`
  align-self: end;
`

export const TempLo = styled.div`
  align-self: start;
  padding-top: .5rem;
`

export const Icon = styled.i`
  font-size: 3rem;
  padding-top: .2rem;
`

export const Weather = styled.div`
  padding: 0;
  padding-bottom: .2rem;
`