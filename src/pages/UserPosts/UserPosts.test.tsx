import React from "react";
import { MemoryRouter } from "react-router-dom";
import { vi, it, describe } from "vitest";
import { render as renderComponent } from "@testing-library/react";
import UserPosts from "./UserPosts";
import * as logic from "./UserPosts.logic";

describe("UserPosts", () => {
  function render() {
    vi.spyOn(logic, "useUserPosts").mockReturnValue({
      onPostSubmit: vi.fn(),
      onPostDelete: vi.fn(),
      posts: [],
      page: 0,
      setPage: vi.fn(),
      totalPages: 0,
      user: null,
    });

    return renderComponent(
      <MemoryRouter>
        <UserPosts />
      </MemoryRouter>
    );
  }

  it("test", () => {
    const { debug } = render();

    debug();
  });
});
