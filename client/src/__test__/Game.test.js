/* eslint-disable no-undef */
import React from 'react'
import Game from '../components/Game'
// import { shallow } from "enzyme"
import { shallowToJson } from "enzyme-to-json"
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import {render} from '@testing-library/react'

describe("app component", () => {

  const initialState = {
      number: 0,
      playerPos: 76,
      noMask: [28, 29, 32, 34],
      pharmacie: 4,
      gel: 5,
      mask: [],
      virus: []
  };
  const mockStore = configureStore();
  let store = mockStore(initialState);

  it("renders Game component without crashing", () => {
    render(
      <Provider store={store}>
        <Game />
      </Provider> 
    );
  })

  it("renders correcly", () => {
    const tree = render(
      <Provider store={store}>
        <Game />
      </Provider> 
    );
    expect(shallowToJson(tree)).toMatchSnapshot()
  })


})