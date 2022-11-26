// async function getRecipe() {
//   const response = await fetch(
//     "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=coffee&number=1&ignorePantry=true&ranking=1",
//     {
//       method: "GET",
//       headers: {
//         "X-RapidAPI-Key": process.env.NODE_ENV.SECRET_KEY,
//         "X-RapidAPI-Host":
//           "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
//       },
//     }
//   );
//   const button = document.createElement;

//   const data = await response.json();
//   const toasted = data[0].image;
//   console.log(data);
// }
// getRecipe();

// const browse = document.getElementById("test");
// export function test() {
//   console.log("test");
//   browse.addEventListener("click", test());
// }

function test() {
  console.log("yes");
}
test();
console.log("working");
