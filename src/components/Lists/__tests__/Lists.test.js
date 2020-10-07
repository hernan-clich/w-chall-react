/* eslint-disable no-undef */
import React from 'react';
import Lists from '../Lists';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';


describe('Lists component test', ()=>{
  test('Snapshot of Lists', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Lists/>
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });    

  test('Finding title with TestId', () =>{
    const { getByTestId } = render(
      <BrowserRouter>
        <Lists/>
      </BrowserRouter>
    );
    expect(getByTestId('tipo')).toHaveTextContent(/^Nombre$/);
  });

  test('Check if p tag text changes after click', () =>{
    const { getByTestId } = render(
      <BrowserRouter>
        <Lists/>
      </BrowserRouter>
    );
    const pTag = getByTestId('list-sorting');
    userEvent.click(pTag);
    expect(pTag).toHaveTextContent('Ordenando de forma descendente');
  });
});