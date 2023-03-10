import { describe, test, expect, vi } from "vitest";
import Switcher from "../components/Switcher";
import { render, userEvent } from "./utils/test-utils";

describe("<Switcher />", () => {
  it("Switcher mounts properly, button is present and toggles icons from sun to moon", async () => {
    const wrapper = render(<Switcher />);
    expect(wrapper).toBeTruthy();

    const button = await wrapper.getByRole("button");
    expect(button).toBeTruthy();
    expect(button.id).toBe("theme-toggle");

    expect(await wrapper.container.querySelector("#sun-icon")).toBeFalsy();
    expect(await wrapper.container.querySelector("#moon-icon")).toBeTruthy();

    await userEvent.click(button);
    expect(await wrapper.container.querySelector("#sun-icon")).toBeTruthy();
  });
});
