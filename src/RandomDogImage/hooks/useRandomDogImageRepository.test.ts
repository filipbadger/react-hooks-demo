import { renderHook, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useRandomDogImageRepository } from "./useRandomDogImageRepository";


jest.mock("./useRandomImageSourceURLDataSource", () => ({
    useRandomImageSourceURLDataSource: () => ({
        getNewImageSourceURL: async () => "mock result"
    })
}))


describe("useRandomDogImageRepository", () => {
    it("should use data source to retrieve data", async () => {
        const { result } = renderHook(() => useRandomDogImageRepository())

        act(() => {
            result.current.getNewImageSource();
        })

        await waitFor(() => expect(result.current.source).toEqual("mock result"));
    })
});