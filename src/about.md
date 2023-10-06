## Components

The application is divided into several components:

- **App**: The main component that orchestrates the application's logic and layout.

- **Entry**: A component that provides an input field for users to enter a character's name and trigger the data retrieval process.

- **Info**: A component responsible for displaying character information based on the provided data.

- **Title**: A simple component used to render titles or headings with dynamic text content.

- **Api**: This file is responsible for running all the network opertaions asynchrously.

## Limitations ##

The application has a few limitations:

- **Data**: Unfortunately, the SWAPI API is relatively old, and it covers only the first six movies of the Star Wars franchise. As a result, any searches for characters from movies 7-9 or other newer Star Wars content will yield no results.

- **Priority Search**: In cases where multiple characters share the same last name, the application will select the first character with that name to display information. For example, if you search for "Skywalker," there are two possible results: Anakin Skywalker and Luke Skywalker. The character that will have information shown will be Luke Skywalker, as he is placed before Anakin in the structure of the API. If you wish to find Anakin Skywalker's information, you need to either spell out his name completely or search specifically for "Anakin."

- **Partial Search**: When a user partially spells out a name, the application will search for the first character in the API data structure that includes the provided string. The search result, similar to the priority search, depends on the API's data order. For precise results, it's recommended to use the full character name or a unique identifier.

