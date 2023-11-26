import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import HomePage from "./HomePage.tsx";
import SVG from "../../core/svg.ts";

describe("<HomePage />", () => {
  test("should render HomePage  page", () => {
    const homePage = render(<HomePage />);
    const { container, presentation, svg } = pageObject(homePage.container);
    const rootAsset = (svg as HTMLImageElement).src.split("/src")[1];

    expect(container).not.toEqual(null);
    expect(svg).not.toEqual(null);
    expect("/src" + rootAsset).toEqual(SVG.LARRY_SHARING_PAYMENT);
    expect(presentation).not.toEqual(null);
  });
});

function pageObject(template: HTMLElement) {
  return {
    container: template.querySelector(".container"),
    presentation: template.querySelector("article"),
    svg: template.querySelector("img"),
  };
}
