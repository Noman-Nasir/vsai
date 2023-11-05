## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployed on Vercel

Click [here](https://vsai-9i3b.vercel.app/) to open the deployed app on Vercel.

## Possible improvements that can be made


| Feature                                                | Difficulty | Approach                                                                               |
|--------------------------------------------------------|------------|----------------------------------------------------------------------------------------|
| Assign an already uploaded photo to an existing group. | Easy       | Remove the file url from the current property list and add to the new property list.   |
| Remove photos from a property.                         | Easy       | Remove file url from firebase and file from the cloud storage.                         |
| Add a search feature for easy group retrieval.         | Easy       | Allow users to search properties by name as there can be many properties.              |
| Better error handling                                  | Medium     | We can have better error handling and display the feedback to the user for a better UX |
| Realtime Upload progress                               | Medium     | We can display a realtime upload progress bar to the user for a better UX              |
