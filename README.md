# Technical Test - React Table Application

This project is a technical test to develop a React application that dynamically generates tables with income and expense entries. Users can add and remove blocks containing tables, each with randomly generated income and expense data.

## Table of Contents

- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Setup](#setup)
- [Example Tables](#example-tables)
- [Deploy to vercel](#example-tables)

### Deploy to Vercel, check the project online: 

[CLICK HERE!](https://tables-melo.vercel.app/)

## Overview

The application allows the user to dynamically manage blocks that contain tables with randomly generated income and expense data. Each block consists of a table with two sections:
- **Ingreso (Income)**: Displays randomly generated income data.
- **Egreso (Expense)**: Displays randomly generated expense data.

Users can add new blocks by clicking the `+` button, which generates new tables with random values, and remove blocks by clicking the `-` button.

## Technologies Used

This project utilizes the following technologies:

- **React**: Frontend framework used to build the UI components.
- **TypeScript**: Strongly typed language that enhances JavaScript by adding types.
- **Redux (Redux Toolkit)**: State management library used for managing the application's state.
- **CSS**: Styling for layout and UI components.

## Features

- **Add Block**: Adds a new block containing a table with random income and expense data.
- **Remove Block**: Removes the last added block.
- **Random Data**: Each table displays random entries for income and expenses.
- **Totals Calculation**: Each block displays the total income minus the total expenses.

## Setup

### Prerequisites

Ensure that you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or higher)
- [npm](https://www.npmjs.com/) (v6.x or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/react-table-app.git

2. Navigate to the project directory:
   ```bash
   cd react-table-app

3. Install dependencies:
   ```bash
   npm install

4. Navigate to the project directory:
   ```bash
   npm start

### Running the App

After running `npm start`, the app will be available at [http://localhost:3000/](http://localhost:3000/). Open your browser and access the app to interact with the dynamically generated tables.


### Example Tables:

```markdown
## Example Tables

Here’s an example of what the tables will look like when blocks are generated:

### Block Example

#### Ingreso (Income) and Egreso (Expense) Table

| **Concepto**      | **Valor**  | **Concepto**      | **Valor**  |
|-------------------|------------|-------------------|------------|
| concepto 1        | 5000       | concepto 1        | 1000       |
| concepto 2        | 2000       | concepto 2        | 1500       |

#### Totals
- **Total Income**: 5000 + 2000 = 7000
- **Total Expenses**: 1000 + 1500 = 2500
- **Final Total**: 7000 - 2500 = 4500

When you press the `+` button, a new block similar to the one above is created with 
randomly generated data. The `-` button removes the last block added.
```
