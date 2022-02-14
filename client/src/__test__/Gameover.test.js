/* eslint-disable no-undef */
import React from 'react'
import Gameover from '../components/Gameover'
// import { shallow } from "enzyme"
import { shallowToJson } from "enzyme-to-json"
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import {render} from '@testing-library/react'

describe("Game component", () => {

  const initialState = { 
    stats: {
      score: 0,
      timer: 0,
      gel: 0,
      noMask: 0,
      virus: 0
    }
  };
  const mockStore = configureStore();
  let store = mockStore(initialState);

  it("renders Gameover component without crashing", () => {
    render(
      <Provider store={store}>
        <Gameover retry={jest.fn()}/>
      </Provider> 
    );
  })

  it("renders correctly", () => {
    const tree = render(
      <Provider store={store}>
        <Gameover retry={jest.fn()} />
      </Provider> 
    );
    expect(shallowToJson(tree)).toMatchSnapshot()
  })


})