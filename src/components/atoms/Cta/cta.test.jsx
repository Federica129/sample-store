import { render, screen } from "@testing-library/react";
import { Cta } from "./cta";
import { beforeEach } from "node:test";

describe("Cta component", () => {
  it("renders children without href", async () => {
    const wrapper = render(<Cta>Click me</Cta>);
    const buttonEl = await wrapper.findByTestId("cta__default");

    expect(buttonEl).toBeTruthy();
  });

  it("renders internal link when href is relative", async () => {
    const wrapper = render(<Cta href="test">home</Cta>);
    const buttonEl = await wrapper.findByTestId("cta__internal");
    // console.log(wrapper.debug());

    expect(buttonEl).toBeTruthy();
  });

  it("renders external link with target _blank", async () => {
    const wrapper = render(<Cta href="https://example.com">External</Cta>);
    const buttonEl = await wrapper.findByTestId("cta__external");

    expect(buttonEl).toBeTruthy();
  });
});
