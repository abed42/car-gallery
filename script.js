// our data
let teslas = [
    {
      model: "Model S",
      doors: 4,
      img:
        "https://tesla-cdn.thron.com/delivery/public/image/tesla/32e5e0f3-5c04-42ef-8f8f-c6b1c26f8a9e/bvlatuR/std/2880x1800/ms-main-hero-desktop"
    },
    {
      model: "Model 3",
      doors: 4,
      img:
        "https://tesla-cdn.thron.com/delivery/public/image/tesla/859f1cff-928a-479c-a1e5-f92cfc7d3c69/bvlatuR/std/2880x1800/model-3-main-hero-b-desktop"
    },
    {
      model: "Model X",
      doors: 4,
      img:
        "https://tesla-cdn.thron.com/delivery/public/image/tesla/da705069-91b5-41cb-86f3-86a585c6fdf3/bvlatuR/std/2880x1800/MX-Hero-Desktop"
    },
    {
      model: "Model Y",
      doors: 4,
      img:
        "https://tesla-cdn.thron.com/delivery/public/image/tesla/0cf18940-c0bf-45f7-b2d8-46c3bc693c65/bvlatuR/std/0x0/model-y_R1@2"
    },
    {
      model: "cybertruck",
      doors: "∞",
      img:
        "https://tesla-cdn.thron.com/delivery/public/image/tesla/0f22af4d-15e0-452d-ba66-1359490b4a0b/bvlatuR/std/2880x1800/Cybertruck-Hero-Desktop"
    },
    {
        model: "Model S",
        doors: 4,
        img:
          "https://tesla-cdn.thron.com/delivery/public/image/tesla/32e5e0f3-5c04-42ef-8f8f-c6b1c26f8a9e/bvlatuR/std/2880x1800/ms-main-hero-desktop"
      },
      {
        model: "Model 3",
        doors: 4,
        img:
          "https://tesla-cdn.thron.com/delivery/public/image/tesla/859f1cff-928a-479c-a1e5-f92cfc7d3c69/bvlatuR/std/2880x1800/model-3-main-hero-b-desktop"
      },
      {
        model: "Model X",
        doors: 4,
        img:
          "https://tesla-cdn.thron.com/delivery/public/image/tesla/da705069-91b5-41cb-86f3-86a585c6fdf3/bvlatuR/std/2880x1800/MX-Hero-Desktop"
      },
      {
        model: "Model Y",
        doors: 4,
        img:
          "https://tesla-cdn.thron.com/delivery/public/image/tesla/0cf18940-c0bf-45f7-b2d8-46c3bc693c65/bvlatuR/std/0x0/model-y_R1@2"
      },
      {
        model: "cybertruck",
        doors: "∞",
        img:
          "https://tesla-cdn.thron.com/delivery/public/image/tesla/0f22af4d-15e0-452d-ba66-1359490b4a0b/bvlatuR/std/2880x1800/Cybertruck-Hero-Desktop"
      },
      {
        model: "Model S",
        doors: 4,
        img:
          "https://tesla-cdn.thron.com/delivery/public/image/tesla/32e5e0f3-5c04-42ef-8f8f-c6b1c26f8a9e/bvlatuR/std/2880x1800/ms-main-hero-desktop"
      },
      {
        model: "Model 3",
        doors: 4,
        img:
          "https://tesla-cdn.thron.com/delivery/public/image/tesla/859f1cff-928a-479c-a1e5-f92cfc7d3c69/bvlatuR/std/2880x1800/model-3-main-hero-b-desktop"
      },
      {
        model: "Model X",
        doors: 4,
        img:
          "https://tesla-cdn.thron.com/delivery/public/image/tesla/da705069-91b5-41cb-86f3-86a585c6fdf3/bvlatuR/std/2880x1800/MX-Hero-Desktop"
      },
      {
        model: "Model Y",
        doors: 4,
        img:
          "https://tesla-cdn.thron.com/delivery/public/image/tesla/0cf18940-c0bf-45f7-b2d8-46c3bc693c65/bvlatuR/std/0x0/model-y_R1@2"
      },
      {
        model: "cybertruck",
        doors: "∞",
        img:
          "https://tesla-cdn.thron.com/delivery/public/image/tesla/0f22af4d-15e0-452d-ba66-1359490b4a0b/bvlatuR/std/2880x1800/Cybertruck-Hero-Desktop"
      }
  ];

// example object of how a built in obj looks like
// card = {
// type : 'div',
// classList : {classes:[], add : (className) => // class.push(className),}, 
// innerHTML : '',
// innerText: '',
// style: {..., ..., backgroundImage: '', color: '', },
// ...,
// // +200
}

for (let i = 0; i < teslas.length; i++) {

    let card = document.createElement('div'); // creating basic div === <div> </div>

    card.classList.add('card'); // adding class to it ==== <div class="card" > </div>
    //         our result so far
    // card === <div class="card" > </div>
     
    card.innerHTML = `<h2> ${teslas[i].model} </h2>`;

    // add an h2 tag in it === <div class="card"> <h2> model 3 </h2> </div>

    card.style.backgroundImage = `url(${teslas[i].img})`

// change the style === 
//  <div
//  style="background-image: url('https://tesla-cdn.thron.com/delivery/public/image/tesla/32e5e0f3-5c04-42ef-8f8f-c6b1c26f8a9e/bvlatuR/std/2880x1800/ms-main-hero-desktop');" 
//  class="card"> 
// <h2> model 3 </h2> 
// </div>


    document.querySelector('.gallery-grid').appendChild(card)

// document.querySelector('.gallery-grid')  === targets the section in the html aka this one : <section class="gallery-grid"> </section>
// after the append child method ==== below

// <section class="gallery-grid"> 

//  <div
//  style="background-image: url('https://tesla-cdn.thron.com/delivery/public/image/tesla/32e5e0f3-5c04-42ef-8f8f-c6b1c26f8a9e/bvlatuR/std/2880x1800/ms-main-hero-desktop');" 
//  class="card"> 
// <h2> model 3 </h2> 
// </div>

// </section>
}
