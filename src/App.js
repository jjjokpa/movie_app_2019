import React from 'react';

function Food({ name, picture }) {
  return (
  <div>
    <h3>I like { name }</h3>
    <img src={picture} />
  </div>
  );
}

const foodILike = [
  {
    name: "Kimchi",
    image:
      "https://www.maangchi.com/wp-content/uploads/2014/06/whole-cabbage-kimchi-590x466.jpg"
  },
  {
    name: "Samgyeopsal",
    image:
      "https://i2.wp.com/www.gildedgingerbread.com/wp-content/uploads/2017/08/Samgyeopsal-1.jpg?resize=750%2C600&ssl=1"
  },
  {
    name: "Bibimbap",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Dolsot-bibimbap.jpg/220px-Dolsot-bibimbap.jpg"
  },
  {
    name: "Doncasu",
    image:
      "https://jesswitkins.files.wordpress.com/2012/04/100_2023.jpg?w=620"
  },
  {
    name: "Kimbap",
    image:
      "https://www.thespruceeats.com/thmb/maodj14S9_EbvG4_3fAz8v5rMxY=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/kimbap-korean-sushi-rolls-2118795-Hero-5b7dbdd346e0fb00250718b8.jpg"
  }
]

function App() {
  return (
    <div>
      {foodILike.map(dish => <Food name={dish.name} picture={dish.image} />)}

    </div>
  );
}

export default App;
