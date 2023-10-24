import React from "react";
import AuthProvider from "../../src/components/AuthProvider";
import Blog from "../../src/components/Blog";
import { BlogType } from "../../src/lib/types";

const rootToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJvb3QiLCJpZCI6IjY1MjE4N2Q5MmY5M2I2ZjhiMmNmZTQ4YSIsImlhdCI6MTY5ODE3MTM0N30.raFLzDUzRpt1Dip8YfRTRaczwWQ07kinms4aHmcvO2g";

const rootId = "652187d92f93b6f8b2cfe48a";

before(() => {
  localStorage.setItem(
    "user",
    JSON.stringify({
      token: rootToken,
      username: "root",
      name: "root",
      id: rootId,
    }),
  );
});

describe("<Blog />", () => {
  it("opens to see the details", () => {
    const blog: BlogType = {
      title: "Updated Blog",
      author: "New Author",
      url: "http://newblog.com",
      likes: 5,
      user: {
        blogs: [
          "652187d92f93b6f8b2cfe48d",
          "652187d92f93b6f8b2cfe490",
          "652187d92f93b6f8b2cfe493",
          "652187d92f93b6f8b2cfe497",
          "6522e51e33a686bbe4f5b009",
          "6522e5cb33a686bbe4f5b015",
          "6522e60b33a686bbe4f5b01d",
          "6522e68e33a686bbe4f5b029",
        ],
        id: "652187d92f93b6f8b2cfe48a",
        name: "root",
        username: "root",
      },
      id: "652187d92f93b6f8b2cfe497",
    };

    cy.mount(
      <AuthProvider>
        <Blog blog={blog} />
      </AuthProvider>,
    );

    cy.get('[data-cy="hide-button"]').click();
    cy.get("b").should("exist");
    cy.get("b").should("have.length", 2);
  });
});
