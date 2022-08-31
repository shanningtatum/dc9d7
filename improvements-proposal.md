    Right now the data for the posts is coming from a json file. What changes would you have to make to the application if it came from an API? In what type of hook should you use to fetch the data and why? What other considerations would you have to make?

    -- The changes that I would make to the application if it came from an API would be to make use of the useEffect hook from react. That would also be the hook that I would use to fetch the data so I can load the data on page load. The reason being would be not needing to work out of an array that has 650 separate objects and having to refer to it each time the user changes the page or changes the number of results per page. Some considerations that I would have to make is the dependencies for the useEffect since we also need the data from the API as the user interacts with the next/previous button, selects a specific page number, or adjusts the number of blog posts that they wish to see per page

    Part of this application uses the package nanoid to generate keys. What issue would this cause for generating keys in React?

    -- This would cause issues because the keys are randomly generated each time. It will lead to performance issues since React will not know which elements have been added, removed, or reordered.
