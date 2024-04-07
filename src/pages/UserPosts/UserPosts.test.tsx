import { MemoryRouter } from "react-router-dom";
import { vi, it, describe, expect } from "vitest";
import { render as renderComponent } from "@testing-library/react";
import UserPosts from "./UserPosts";
import * as logic from "./UserPosts.logic";
import { User } from "../../contexts/AuthContext/AuthContext";

describe("UserPosts", () => {
  function render({ user }: Partial<{ user: User | null }> = {}) {
    vi.spyOn(logic, "useUserPosts").mockReturnValue({
      onPostSubmit: vi.fn(),
      onPostDelete: vi.fn(),
      posts: [],
      page: 0,
      setPage: vi.fn(),
      totalPages: 0,
      user: user || null,
    });

    return renderComponent(
      <MemoryRouter>
        <UserPosts />
      </MemoryRouter>
    );
  }

  it("shows you are not logged message for user equals null", () => {
    const { getByText } = render();

    expect(getByText(/You are not logged/i)).toBeDefined();
  });

  it("shows blabla", () => {
    const user: User = {
      accessToken: "testuser",
      created: "testuser",
      firstName: "testuser",
      id: 5,
      lastName: "testuser",
      username: "testuser",
    };
    const { getByText } = render({ user });

    expect(getByText(/Create your post!/i)).toBeDefined();
  });
});
