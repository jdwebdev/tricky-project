/* eslint-disable no-undef */
import React from 'react'
import Game from '../components/Game'
import { shallow } from "enzyme"
import { shallowToJson } from "enzyme-to-json"


describe("app component", () => {
  it("renders Game component without crashing", () => {
    shallow(<Game />)
  })

  it("renders correcly", () => {
    const tree = shallow(<Game />)
    expect(shallowToJson(tree)).toMatchSnapshot()
  })


})