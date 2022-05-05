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


for (let i = 0; i < teslas.length; i++) {

    let card = document.createElement('div');

    card.classList.add('card');

    // card.innerHTML = `<h2> ${teslas[i].model} </h2>`;
    
    card.style.backgroundImage = `url(${teslas[i].img})`

    document.querySelector('.gallery-grid').appendChild(card)



}