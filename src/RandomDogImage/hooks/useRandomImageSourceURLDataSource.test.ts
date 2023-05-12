import { renderHook } from "@testing-library/react"
import { useRandomImageSourceURLDataSource } from "./useRandomImageSourceURLDataSource"
import { setupServer } from "msw/node"
import { rest } from "msw"


// this should not be configured this way - we want to test json-schema
// I don't know how to do it, yet, so it's just for presentation purposes
const mockServer = setupServer(
    rest.get("https://dog.ceo/api/breeds/image/random", (req, res, ctx) => {
        return res(ctx.json({ message: "mock source URL" }))
    })
)

describe("useRandomImageSourceURLDataSource", () => {
    beforeAll(() => { mockServer.listen() })
    afterEach(() => { mockServer.resetHandlers() })
    afterAll(() => { mockServer.close() })

    it("should call API to get the result", async () => {
        const { result } = renderHook(() => useRandomImageSourceURLDataSource())
        const sourceURL = await result.current.getNewImageSourceURL()
        expect(sourceURL).toEqual("mock source URL")
    })
})