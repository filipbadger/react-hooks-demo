import { fireEvent, render } from "@testing-library/react";
import { RandomDogImageView } from "./RandomDogImageView";

    
const mockgetNewImage = jest.fn() // this name needs to start with "mock"!!!

jest.mock("../hooks/useRandomDogImageViewController", () => ({ // only for this test file
    useRandomDogImageViewController: () => ({
        source: "",
        getNewImageSource: mockgetNewImage,
    })
}))


describe("RandomDogImageView", () => {

    it("should render a dog image", () => {
        const { getByRole } = render(RandomDogImageView());
        const image = getByRole("img");
        expect(image).not.toBeNull();
    });

    it("should render a new dog image button", () => {
        const { getByRole } = render(RandomDogImageView());
        const button = getByRole("button");
        expect(button).not.toBeNull();
    })

    it("should get new image when button clicked", ()=> {
        const { getByRole } = render(RandomDogImageView());
        const button = getByRole("button");
        fireEvent.click(button);
        expect(mockgetNewImage).toHaveBeenCalledTimes(1);
    })

    // // this test redundant for presentation purposes
    // it("should get new image when button clicked (repeated)", ()=> {
    //     const { getByRole } = render(RandomDogImageView());
    //     const button = getByRole("button");
    //     fireEvent.click(button);
    //     expect(mockgetNewImage).toHaveBeenCalledTimes(1); // still passes!
    // })
});