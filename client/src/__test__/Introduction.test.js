/* eslint-disable no-undef */
import React from 'react'
import Introduction from '../components/Introduction'
import { shallow } from "enzyme"
import { shallowToJson } from "enzyme-to-json"


describe("Introduction component", () => {
  it("renders Introduction component without crashing", () => {
    shallow(<Introduction onClick={jest.fn()}/>)
  })

  let introWrapper;
  beforeEach(() => {
    introWrapper = shallow(<Introduction onClick={jest.fn()}/>)
  })

  it("renders correctly", () => {
    expect(shallowToJson(introWrapper)).toMatchSnapshot()
  })

  it('display first phrase correctly', () => {
    const p = introWrapper.find('p').text()
    expect(p).toEqual("Bienvenue dans Tricky Project")    
  })

  it('display next phrase on click', () => {
    const button = introWrapper.find('.nextButton')
    button.simulate("click")
    expect(introWrapper.find('p').text()).toEqual('Le but du jeu est simple : vous devez vous rendre à la pharmacie afin de recevoir votre dose de vaccin.')
  })

})