import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import {fetchBubles as mockFetchBubles} from '../api/fetchBubles';
import userEvent from '@testing-library/user-event';

jest.mock('../api/fetchBubles');

const colors = [
  {
    color: "aliceblue",
    code: {
      hex: "#f0f8ff",
    },
    id: 1,
  },
  {
    color: "limegreen",
    code: {
      hex: "#99ddbc",
    },
    id: 2,
  },
  {
    color: "aqua",
    code: {
      hex: "#00ffff",
    },
    id: 3,
  }]

test("Renders BubblePage without errors", () => {
  mockFetchBubles.mockResolvedValueOnce(colors)
  // Finish this test
  render(<BubblePage />)
});

test("Fetches data and renders the bubbles on mounting", async() => {
  // Finish this test
  mockFetchBubles.mockResolvedValueOnce(colors)
  render(<BubblePage />)

});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading