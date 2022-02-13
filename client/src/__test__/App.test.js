/* eslint-disable no-undef */
import React from 'react'
import App from '../App'
import { shallow } from "enzyme"
import { shallowToJson } from "enzyme-to-json"


describe("app component", () => {
  it("renders App component without crashing", () => {
    shallow(<App />)
  })

  it("renders correctly", () => {
    const tree = shallow(<App />)
    expect(shallowToJson(tree)).toMatchSnapshot()
  })

  let appWrapper;
  beforeEach(() => {
    appWrapper = shallow(<App />)
  })

  it("h1 displays game title", () => {
    const title = appWrapper.find('h1').text()
    expect(title).toEqual("Tricky Project")
  })

  // it("Start button disappear after click", () => {
  //   const button = appWrapper.find("button")
  //   button.simulate("click")
  //   expect(appWrapper.find("button").exists()).toBeFalsy()
  // })
})