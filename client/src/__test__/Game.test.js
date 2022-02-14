/* eslint-disable no-undef */
import React from 'react'
import Game from '../components/Game'
import { shallowToJson } from "enzyme-to-json"
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import {render} from '@testing-library/react'

describe("Game component", () => {

  const initialState = { 
    gameState: {
      number: 0,
      playerPos: 76,
      noMask: [28, 29, 32, 34],
      pharmacie: 4,
      gel: 5,
      mask: [],
      virus: [],
      goal: -1,
      sick: -1
    },
    stats: {
      score: 0,
      timer: 0
    }
  };
  const mockStore = configureStore();
  let store = mockStore(initialState);

  it("renders Game component without crashing", () => {
    render(
      <Provider store={store}>
        <Game finishGame={jest.fn()}/>
      </Provider> 
    );
  })

  it("renders correctly", () => {
    const tree = render(
      <Provider store={store}>
        <Game finishGame={jest.fn()} />
      </Provider> 
    );
    expect(shallowToJson(tree)).toMatchSnapshot()
  })


})