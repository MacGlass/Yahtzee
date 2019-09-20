import React from 'react';
import { shallow, mount } from "enzyme";
// import App from './App';
import Game from './Game';
import Die from './Die'


it('renders without crashing', () => {
  shallow(<Game />);
});

it("simulates click and checks that dice has been toggled", function () {
  let wrapper = mount(<Game />);
  wrapper.find("button").first()
    .simulate("click");
  expect(wrapper.state().locked).toEqual([true, false, false, false, false])
})

it("simulates click when numRolls is zero and checks that dice can't be untoggled", function () {
  let wrapper = mount(<Game />);
  let rollButton = wrapper.find('button.Game-reroll').first()
  rollButton.simulate("click").simulate("click").simulate("click");
  wrapper.find("button").first()
    .simulate("click");
  rollButton.simulate("click")
  expect(wrapper.state().locked).toEqual([true, true, true, true, true])
  expect(wrapper.state().rollsLeft).toEqual(0)
})


