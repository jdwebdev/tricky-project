/* eslint-disable no-undef */
import React from 'react'
import Tile from '../components/Tile'
import { shallow } from "enzyme"
import { shallowToJson } from "enzyme-to-json"
import emptyTile from "../images/empty_tile.png"

describe("app component", () => {
  it("renders Tile component without crashing", () => {
    shallow(<Tile
      id={1}
      imgSrc={emptyTile}
      type={"empty"}
    />)
  })

  it("renders correcly", () => {
    const tree = shallow(<Tile
      id={1}
      imgSrc={emptyTile}
      type={"empty"}
    />)
    expect(shallowToJson(tree)).toMatchSnapshot()
  })

})