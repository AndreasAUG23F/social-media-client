import { login } from "./login";
import * as storage from "../../storage/index.js";
import * as headersModule from "../headers.js";

jest.mock("../../storage/index.js", () => ({
  save: jest.fn(),
  load: jest.fn(),
}));

jest.mock("../headers.js", () => ({
  headers: jest.fn(() => ({})),
}));

global.fetch = jest.fn();

describe("login function", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("stores the token in storage if credentials are correct", async () => {
    const mockProfile = {
      accessToken: "mock-token",
      name: "John Doe",
    };

    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce(mockProfile),
    });

    storage.load.mockReturnValue(null);

    await login("test@example.com", "password123");

    expect(storage.save).toHaveBeenCalledWith("token", "mock-token");
  });
});
