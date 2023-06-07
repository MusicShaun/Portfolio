
import styled from 'styled-components';
import { colorCream } from '../helpers/colors';


import React from 'react'

function ErrorPage() {
  return (
    <Head >
      <h1 style={{marginRight: '0rem', color: colorCream}}>404 <br /></h1>
      <h2 style={{color: colorCream}}>Oopsy! This page does not exist</h2>
      

    </Head>
  )
}

export default ErrorPage


const Head = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  & h1 {
    font-size: 6.5rem;
    padding: 0 3rem;

  }
  & h2 { 
    font-size: 2.6rem;
    padding: 0 3rem;
  }
  /* background-color: white; */

  @media (max-width: 768px) {
    flex-direction: column;

    & h1 {
      font-size: 3rem;
    }
    & h2 {
      font-size: 1.8rem;
      text-align: center;
      padding: 0 1rem;
    }
  }


  `