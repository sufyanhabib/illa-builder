import { WrappedImage } from "../index"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

test("Image render", () => {
  const handleUpdateDSL = jest.fn()
  render(
    <WrappedImage
      height="200px"
      width="200px"
      imageSrc="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
      handleUpdateDsl={handleUpdateDSL}
    />,
  )
  expect(screen.getByRole("img")).toHaveAttribute(
    "src",
    "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
  )
})

test("Image render with radius", () => {
  const handleUpdateDSL = jest.fn()
  render(
    <WrappedImage
      height="200px"
      width="200px"
      imageSrc="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
      handleUpdateDsl={handleUpdateDSL}
      styles={{ radius: "20" }}
    />,
  )
  expect(screen.getByRole("img")).toHaveAttribute(
    "src",
    "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
  )
  expect(screen.getByRole("img")).toHaveStyle({
    "border-radius": "20px",
  })
})