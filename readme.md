# Notes App

This is a simple Notes application implemented in TypeScript using MongoDB and Jest testing. 
It provides functionality to add notes, mark notes as 'important', delete notes, and display one or all notes.

## Prerequisites

Before running the application, ensure you have the following prerequisites installed on your machine:

- [Node.js](https://nodejs.org/): A JavaScript runtime environment.
- [npm](https://www.npmjs.com/package/npm): The package manager for Node.js.

## Installation

To get started with the Notes app, follow these steps:

1. Clone the repository:

   ```shell
   git clone https://github.com/MiguelKummetz/Sprint-4
   ```

2. Navigate to the project directory:

   ```shell
   cd yourcomputerpath/Sprit-4
   ```

3. Install the dependencies:

   ```shell
   npm install
   ```
4. Rename '.env-template' to '.env' and complete the missig 'MONGO_DB_URI' and 'MONGO_DB_URI_TEST' values with a valid MongoDB URI

## Testing with Jest

1. The Notes app can use Jest to test all its functions using the next script:

   ```shell
   npm run test
   ```

## Testing with a Thunder Cliet

The Notes app can be maually tested usig Thuder Cliet. Follow the steps below to test the application:

1. Install the Visual Studio Code extension 'Thunder Client' (Extension ID:rangav.vscode-thunder-client)
2. Click on 'Colections' and select 'import'
3. Select the 'thunder-collection_Sprint4' file in '...yourcomputerpath/Sprit-4'
4. Connect to the server:

   ```shell
   npm run start
   ```
5. Test all the diferent requests of the app. 
   Some requests contain the value ':id' in the url, they need to be manually updated with a valid id
   example: 'http://localhost:3001/api/notes/:id' => 'http://localhost:3001/api/notes/6524feb985afa5eace4292e5'
