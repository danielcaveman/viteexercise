import { expect, it, describe, vi } from "vitest";
import { renderHook } from "@testing-library/react";
import { useLogin } from "./Login.logic";

describe("useLogin", () => {
  function render() {
    vi.mock("react-router-dom", () => ({
      useNavigate: () => vi.fn(),
    }));

    const hookResult = renderHook(useLogin);

    return {
      ...hookResult,
    };
  }

  it("returns empty values for form fields", () => {
    const { result } = render();

    expect(result.current.username).toBe("");
    expect(result.current.password).toBe("");
  });
});
