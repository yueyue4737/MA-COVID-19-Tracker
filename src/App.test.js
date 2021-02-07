import { render, screen } from "@testing-library/react";
import App from "./App";
import Dashboard from "./pages/Dashboard";

test("renders guest button", () => {
  render(<App />);
  const guestButtonElement = screen.getByText(/Guest Login/i);
  expect(guestButtonElement).toBeInTheDocument();
});

test("renders default user name", () => {
  render(<App />);
  const usernameElement = screen.getByDisplayValue("admin");
  expect(usernameElement).toBeInTheDocument();
});

test("renders author react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Yue Liu/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders a guest login button", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", {
    name: "Guest Login"
  });
  expect(buttonElement).toBeInTheDocument();
});

test("renders an add limit button", () => {
  render(<Dashboard />);
  const buttonElement = screen.getByRole("button", {
    name: "Add"
  });
  expect(buttonElement).toBeInTheDocument();
});

test("renders a search bar", () => {
  render(<Dashboard />);
  const searchBarElement = screen.getByLabelText("Search:");
  expect(searchBarElement).toBeInTheDocument();
});

test("renders a functionaligy search bar", () => {
  render(<Dashboard />);
  const inputNode = screen.getByPlaceholderText("Sample ID");
  expect(inputNode).toBeInTheDocument();
});

test("renders a table", () => {
  render(<Dashboard />);
  const tableHeaderElement = screen.getByText("igg_agree");
  expect(tableHeaderElement).toBeInTheDocument();
});

test("renders a pagination component", () => {
  render(<Dashboard />);
  const buttonElement = screen.getByRole("TablePagination", {
    name: "Rows per page"
  });
  expect(buttonElement).toBeInTheDocument();
});

test("renders data endpoint react link", () => {
  render(<Dashboard />);
  const linkElement = screen.getByText(/Data Endpoint/i);
  expect(linkElement).toBeInTheDocument();
});
