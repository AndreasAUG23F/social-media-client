import { logout } from "./logout";
import { remove } from "../../storage/index.js";

jest.mock("../../storage/index.js", () => ({
  remove: jest.fn(),
}));

describe("logout function", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("clears the token from browser storage", () => {
    logout();

    expect(remove).toHaveBeenCalledWith("token");
  });
});
