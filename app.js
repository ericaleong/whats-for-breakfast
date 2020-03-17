// const randomGenerator = document.querySelector('.breakfast');

const breakfast = [
  {
    breakfastType: 'All American breakfast',
    img: 'https://i.picsum.photos/id/579/200/200.jpg',
    description: 'Your classic bacon, eggs, and toast'
  },
  {
    breakfastType: 'Eggs Benedict',
    img: 'https://i.picsum.photos/id/579/200/200.jpg',
    description: 'Extra hollandaise sauce please'
  },
  {
    breakfastType: 'Breakfast Burrito',
    img: 'https://i.picsum.photos/id/579/200/200.jpg',
    description: 'The best combination of so many good ingredients'
  },
  {
    breakfastType: 'Fruit Salad',
    img: 'https://i.picsum.photos/id/579/200/200.jpg',
    description: 'Refreshing and low in the cals'
  },
  {
    breakfastType: 'Cold Pizza',
    img: 'https://i.picsum.photos/id/579/200/200.jpg',
    description: 'Breakfast of champions'
  },
  {
    breakfastType: 'Pancakes',
    img: 'https://i.picsum.photos/id/579/200/200.jpg',
    description: 'Stacking up your breakfast high'
  },
  {
    breakfastType: 'Waffles',
    img: 'https://i.picsum.photos/id/579/200/200.jpg',
    description: 'A cousin of your classic pancake - just square'
  },
  {
    breakfastType: 'Oatmeal',
    img: 'https://i.picsum.photos/id/579/200/200.jpg',
    description: `A breakfast when you're desparate and in a hurry`
  },
  {
    breakfastType: 'Yogurt & Berries',
    img: 'https://i.picsum.photos/id/579/200/200.jpg',
    description: 'Your classic bacon, eggs, and toast'
  },
  {
    breakfastType: 'Cereal',
    img: 'https://i.picsum.photos/id/579/200/200.jpg',
    description: 'The laziest of breakfasts'
  },
  {
    breakfastType: 'Sushi',
    img: 'https://i.picsum.photos/id/579/200/200.jpg',
    description: 'Very unconventional'
  },
  {
    breakfastType: 'Steak & Eggs',
    img: 'https://i.picsum.photos/id/579/200/200.jpg',
    description: 'When you want a touch of dinner for breakfast'
  },
  {
    breakfastType: 'Can of Beer',
    img: 'https://i.picsum.photos/id/579/200/200.jpg',
    description: 'Not here judge'
  },
]

function breakfastFood() {
  const randomNumber = Math.floor(Math.random() * (breakfast.length));
  document.getElementById('breakfast-type').innerHTML = breakfast[randomNumber];
  document.getElementById('photo').src = breakfast[randomNumber];
  document.getElementById('description').innerHTML = breakfast[randomNumber];
}

// function getData() {
//   randomGenerator.innerHTML = `
//   <h1 id='breakfast-type'>${breakfast.breakfastType}</h1>
//   <img id='photo' src="https://i.picsum.photos/id/611/200/200.jpg" alt="">
//   <p id='description'>Paragraph about eggs</p>
//   <button id='button'>What's For Breakfast?</button>
//   `

  // document.getElementById('breakfast-type').src = breakfast.breakfastType;
  // document.getElementById('photo').src = breakfast.img;
  // document.getElementById('description').src = breakfast.description;

  // console.log()
// }

// getData()