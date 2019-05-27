import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "reducers";
import Root from "Root";
let wrapper;
beforeEach(() => {
  wrapper = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});
it("has a text area and a button", () => {
  // const wrapper = mount(<CommentBox />);
  expect(wrapper.find("textarea").length).toEqual(1);
  expect(wrapper.find("button").length).toEqual(1);
});

describe("the text area", () => {
  beforeEach(() => {
    wrapper
      .find("textarea")
      .simulate("change", { target: { value: "new comment" } });
    wrapper.update();
  });
  it("has a text area where user can type in", () => {
    expect(wrapper.find("textarea").prop("value")).toEqual("new comment");
  });

  it("should return empty string when form is submitted", () => {
    wrapper.find("textarea").simulate("submit");
    wrapper.update();
    expect(wrapper.find("textarea").prop("value")).toEqual("");
  });
});
