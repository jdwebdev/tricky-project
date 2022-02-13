/* eslint-disable no-undef */
import React from 'react'
import Score from '../components/Score'
import { shallow } from "enzyme"
// import { shallowToJson } from "enzyme-to-json"
// import {render} from '@testing-library/react'


describe("Score component", () => {


  it("renders Score component without crashing", () => {
    shallow(<Score />)
  })

  it("Displayed score is correct", () => {
    const scoreWrapper = shallow(<Score score={30} />)
    const p = scoreWrapper.find('p').text()
    expect(p).toEqual("Score : 30")
  })

})