/* eslint-disable no-undef */
import React from 'react'
import Timer from '../components/Timer'
// import { shallow } from "enzyme"
import { shallowToJson } from "enzyme-to-json"
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import {render} from '@testing-library/react'

describe("Timer component", () => {
  const initialState = { 
    stats: {
      timer: 0
    }
  };
  const mockStore = configureStore();
  let store = mockStore(initialState);

  it("renders Timer component without crashing", () => {
    render(
      <Provider store={store}>
        <Timer stopTimer={true}/>
      </Provider> 
    );
  })

  it("renders correctly", () => {
    const tree = render(
      <Provider store={store}>
        <Timer stopTimer={true} />
      </Provider> 
    );
    expect(shallowToJson(tree)).toMatchSnapshot()
  })
})