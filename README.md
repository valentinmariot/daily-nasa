# Daily Nasa 🚀
      
<details>
  <summary>Click to read the assignment</summary>     
     <br> 

Expectations :      
- Create an app that use the APOD NASA Api => [NASA API](https://api.nasa.gov/),     
- Show the daily image with his title and description,     
- Use a date picker library to show linked content to the picked date      
     
</details>

## Live version

This project has been deployed with Vercel and you can [check it out here](https://daily-nasa.vercel.app/).   

## Tooling

- [Vite](https://vitejs.dev/)
- [React](https://beta.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Sass](https://sass-lang.com/)

## Running locally

- Clone the repo
- Execute `npm i`
- Then `npm run dev`
- Open http://localhost:1958

## Develoment process

⏱️ Did in 5 hours. 

1. Bootstrap the project with `npm create vite@latest daily-nasa --template react-ts`.
2. Setup folders structure and tsconfig.
3. Build the UI w/ Sass.
4. Add aliases for imports.
5. Create the ApiProvider to facilitate data manipulation.
6. Did a quick test to check if the `formatDate()` helper function return what I need.

## Potential improvements

- I didn't have time to do a better UI so some part of the design could be improved.
- Show loading effect until data has arrived.
- Add an error management system.