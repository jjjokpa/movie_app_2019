import React from 'react';

const foodILike = [
  {
    id:1,
    name: "Kimchi",
    image:
      "https://www.maangchi.com/wp-content/uploads/2014/06/whole-cabbage-kimchi-590x466.jpg",
    rating:5
    },
  {
    id:2,
    name: "Samgyeopsal",
    image:
      "https://i2.wp.com/www.gildedgingerbread.com/wp-content/uploads/2017/08/Samgyeopsal-1.jpg?resize=750%2C600&ssl=1",
      rating:4
  },
  {
    id:3,
    name: "Bibimbap",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Dolsot-bibimbap.jpg/220px-Dolsot-bibimbap.jpg",
      rating:5.5
  },
  {
    id:4,
    name: "Doncasu",
    image:
      "https://jesswitkins.files.wordpress.com/2012/04/100_2023.jpg?w=620",
      rating:4.7
  },
  {
    id:5,
    name: "Kimbap",
    image:
      "https://www.thespruceeats.com/thmb/maodj14S9_EbvG4_3fAz8v5rMxY=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/kimbap-korean-sushi-rolls-2118795-Hero-5b7dbdd346e0fb00250718b8.jpg",
      rating:3
  }
]

function Food({ name, picture }) {
  return (
  <div>
    <h3>I like { name }</h3>
    <img src={picture} alt={name} />
  </div>
  );
}

function renderFood(dish) {
  return <Food key={dish.id} name={dish.name} picture={dish.image} />
}

function App() {
  return (
    <div>
      {console.log(foodILike.map(renderFood))}
      {foodILike.map(renderFood)}

    </div>
  );
}

export default App;
