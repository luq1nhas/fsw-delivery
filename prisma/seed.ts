const { PrismaClient } = require("@prisma/client");

const prismaClient = new PrismaClient();

const descricao =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec nisl lorem. Praesent pharetra, sapien ut fringilla malesuada, nisi felis ullamcorper ex, eu consectetur elit dolor sed dolor. Praesent orci mi, auctor aliquet semper vitae, volutpat quis augue. Cras porta sapien nec pharetra laoreet. Sed at velit sit amet mauris varius volutpat sit amet id mauris. Maecenas vitae mattis ante. Morbi nulla quam, sagittis at orci eu, scelerisque auctor neque.";

const createBurguers = async (
  desertsCategoryId: string,
  juicesCategoryId: string,
) => {
  const burguersCategory = await prismaClient.categoria.create({
    data: {
      nome: "Hambúrgueres",
      imagemUrl:
        "https://utfs.io/f/92918634-fc03-4425-bc1f-d1fbc8933586-vzk6us.png",
    },
  });

  const burguerRestaurants = [
    {
      nome: "The Burguer King",
      imagemUrl:
        "https://utfs.io/f/020e448e-a7d8-433f-9622-cb3b68f34d48-p3apya.png",
      taxadeEntrega: 5,
      tempoDeEntrega: 30,
      categorias: {
        connect: {
          id: burguersCategory.id,
        },
      },
    },
    {
      nome: "Omni Burguer",
      imagemUrl:
        "https://utfs.io/f/d0c54665-78d0-41af-98a4-8d1f459c622c-p3apy9.png",
      taxadeEntrega: 5,
      tempoDeEntrega: 30,
      categorias: {
        connect: {
          id: burguersCategory.id,
        },
      },
    },
    {
      nome: "The Burguer Queen",
      imagemUrl:
        "https://utfs.io/f/d9834f2e-bc37-4c64-981b-cabf03018322-p3apy8.png",
      taxadeEntrega: 0,
      tempoDeEntrega: 45,
      categorias: {
        connect: {
          id: burguersCategory.id,
        },
      },
    },
    {
      nome: "Burguer House",
      imagemUrl:
        "https://utfs.io/f/9c193fc1-9dcb-4394-8be4-d783266134dc-p3apy7.png",
      taxadeEntrega: 10,
      tempoDeEntrega: 20,
      categorias: {
        connect: {
          id: burguersCategory.id,
        },
      },
    },
  ];

  for (const item of burguerRestaurants) {
    const restaurante = await prismaClient.restaurante.create({
      data: item,
    });

    await createDeserts(restaurante.id, desertsCategoryId);
    await createJuices(restaurante.id, juicesCategoryId);

    console.log(`Created ${restaurante.nome}`);

    const burguerProducts = [
      {
        nome: "Cheese Burguer",
        preco: 30,
        descricao: descricao,
        PorcentagemDeDesconto: 10,
        imagemUrl:
          "https://utfs.io/f/ae177fa1-129c-4f43-9928-aa8ac1080a18-yqapzx.png",
        restaurante: {
          connect: {
            id: restaurante.id,
          },
        },
        categoria: {
          connect: {
            id: burguersCategory.id,
          },
        },
      },
      {
        nome: "Double Cheese Burguer",
        preco: 40,
        descricao: descricao,
        PorcentagemDeDesconto: 7,
        imagemUrl:
          "https://utfs.io/f/dca007fe-0025-422e-9328-16d40f0a1792-yqapzy.png",
        restaurante: {
          connect: {
            id: restaurante.id,
          },
        },
        categoria: {
          connect: {
            id: burguersCategory.id,
          },
        },
      },
      {
        nome: "Bacon Burguer",
        preco: 35,
        descricao: descricao,
        PorcentagemDeDesconto: 5,
        imagemUrl:
          "https://utfs.io/f/4cb1ca21-0748-4296-a23d-88e52687506a-yqapzz.png",
        restaurante: {
          connect: {
            id: restaurante.id,
          },
        },
        categoria: {
          connect: {
            id: burguersCategory.id,
          },
        },
      },
      {
        nome: "Double Bacon Burguer",
        preco: 45,
        descricao: descricao,
        PorcentagemDeDesconto: 10,
        imagemUrl:
          "https://utfs.io/f/ed9fde1e-0675-4829-8001-a775e2825dc6-yqaq00.png",
        restaurante: {
          connect: {
            id: restaurante.id,
          },
        },
        categoria: {
          connect: {
            id: burguersCategory.id,
          },
        },
      },
      {
        nome: "Chicken Burguer",
        preco: 30,
        descricao: descricao,
        PorcentagemDeDesconto: 7,
        imagemUrl:
          "https://utfs.io/f/0aff860a-3e05-42fd-9b2a-53d03c744949-yqaq01.png",
        restaurante: {
          connect: {
            id: restaurante.id,
          },
        },
        categoria: {
          connect: {
            id: burguersCategory.id,
          },
        },
      },
      {
        nome: "Double Chicken Burguer",
        preco: 40,
        descricao: descricao,
        PorcentagemDeDesconto: 5,
        imagemUrl:
          "https://utfs.io/f/d2157790-fcb7-4d09-b074-80af4bfb9892-yqaq02.png",
        restaurante: {
          connect: {
            id: restaurante.id,
          },
        },
        categoria: {
          connect: {
            id: burguersCategory.id,
          },
        },
      },
    ];

    for (const produto of burguerProducts) {
      await prismaClient.produto.create({
        data: produto,
      });

      console.log(`Created ${produto.nome}`);
    }
  }
};

const createPizzas = async (
  desertsCategoryId: string,
  juicesCategoryId: string,
) => {
  const pizzasCategory = await prismaClient.categoria.create({
    data: {
      nome: "Pizzas",
      imagemUrl:
        "https://utfs.io/f/d9ca0163-6bc8-42dc-bbb3-377636849cd8-mtj7yz.png",
    },
  });

  const pizzaRestaurants = [
    {
      nome: "Pizza Hut",
      imagemUrl:
        "https://utfs.io/f/f50301c9-7968-4d76-b4a3-b8ed24e2089c-5p2j0.png",
      taxadeEntrega: 5,
      tempoDeEntrega: 30,
      categorias: {
        connect: {
          id: pizzasCategory.id,
        },
      },
    },
    {
      nome: "Omni Pizza",
      imagemUrl:
        "https://utfs.io/f/8a9eb9dc-6434-4246-91c9-1c0a60a6e5f0-5p2j1.png",
      taxadeEntrega: 5,
      tempoDeEntrega: 30,
      categorias: {
        connect: {
          id: pizzasCategory.id,
        },
      },
    },
    {
      nome: "The Pizza Queen",
      imagemUrl:
        "https://utfs.io/f/e83dc871-19e3-4d39-8163-fb2f1e24b6b1-5p2j2.png",
      taxadeEntrega: 0,
      tempoDeEntrega: 45,
      categorias: {
        connect: {
          id: pizzasCategory.id,
        },
      },
    },
    {
      nome: "Pizza House",
      imagemUrl:
        "https://utfs.io/f/a73ec63a-7fc8-4a23-8d03-62debee79e6a-5p2j3.png",
      taxadeEntrega: 10,
      tempoDeEntrega: 20,
      categorias: {
        connect: {
          id: pizzasCategory.id,
        },
      },
    },
  ];

  for (const item of pizzaRestaurants) {
    const restaurante = await prismaClient.restaurante.create({
      data: item,
    });

    await createDeserts(restaurante.id, desertsCategoryId);
    await createJuices(restaurante.id, juicesCategoryId);

    console.log(`Created ${restaurante.nome}`);

    const pizzaProducts = [
      {
        nome: "Pepperoni Pizza",
        preco: 45,
        descricao: descricao,
        PorcentagemDeDesconto: 0,
        imagemUrl:
          "https://utfs.io/f/645ba997-00b1-44ed-9928-b9eb41e93896-berpub.jpg",
        restaurante: {
          connect: {
            id: restaurante.id,
          },
        },
        categoria: {
          connect: {
            id: pizzasCategory.id,
          },
        },
      },
      {
        nome: "Margarita Pizza",
        preco: 40,
        descricao: descricao,
        PorcentagemDeDesconto: 5,
        imagemUrl:
          "https://utfs.io/f/4ee1f69b-e0a3-4166-bae5-b666996bcd3b-berpua.png",
        restaurante: {
          connect: {
            id: restaurante.id,
          },
        },
        categoria: {
          connect: {
            id: pizzasCategory.id,
          },
        },
      },
      {
        nome: "Hawaiian Pizza",
        preco: 45,
        descricao: "A delicious hawaiian pizza",
        PorcentagemDeDesconto: 5,
        imagemUrl:
          "https://utfs.io/f/0bb7a869-f369-4506-94ea-6cc23c8dd92f-berpu9.png",
        restaurante: {
          connect: {
            id: restaurante.id,
          },
        },
        categoria: {
          connect: {
            id: pizzasCategory.id,
          },
        },
      },
      {
        nome: "Vegetarian Pizza",
        preco: 35,
        descricao: descricao,
        PorcentagemDeDesconto: 0,
        imagemUrl:
          "https://utfs.io/f/1bb04a24-361c-4e3a-ad2f-81255f2d53b9-berpux.png",
        restaurante: {
          connect: {
            id: restaurante.id,
          },
        },
        categoria: {
          connect: {
            id: pizzasCategory.id,
          },
        },
      },
      {
        nome: "Meat Lovers Pizza",
        preco: 50,
        descricao: descricao,
        PorcentagemDeDesconto: 10,
        imagemUrl:
          "https://utfs.io/f/ead919ee-2e3d-423f-b294-e525f9d6a5b7-berpuy.png",
        restaurante: {
          connect: {
            id: restaurante.id,
          },
        },
        categoria: {
          connect: {
            id: pizzasCategory.id,
          },
        },
      },
    ];

    for (const produto of pizzaProducts) {
      await prismaClient.produto.create({
        data: produto,
      });

      console.log(`Created ${produto.nome}`);
    }
  }
};

const createJapanese = async (
  desertsCategoryId: string,
  juicesCategoryId: string,
) => {
  const japaneseCategory = await prismaClient.categoria.create({
    data: {
      nome: "Japonesa",
      imagemUrl:
        "https://utfs.io/f/ccc2351a-49b0-4613-a233-3b3b3bd6a47c-yd9ii3.png",
    },
  });

  const japaneseRestaurants = [
    {
      nome: "Sushi House",
      imagemUrl:
        "https://utfs.io/f/7f52b936-9f7a-40cc-b22f-b62727ddb9cc-fu3r05.png",
      taxadeEntrega: 5,
      tempoDeEntrega: 30,
      categorias: {
        connect: {
          id: japaneseCategory.id,
        },
      },
    },
    {
      nome: "Omni Sushi",
      imagemUrl:
        "https://utfs.io/f/f809b477-7cf1-47f5-8664-0a4566225867-fu3r06.png",
      taxadeEntrega: 5,
      tempoDeEntrega: 30,
      categorias: {
        connect: {
          id: japaneseCategory.id,
        },
      },
    },
    {
      nome: "The Sushi Queen",
      imagemUrl:
        "https://utfs.io/f/42bb722a-0b76-40e8-8251-cee9093bed38-fu3r07.png",
      taxadeEntrega: 0,
      tempoDeEntrega: 45,
      categorias: {
        connect: {
          id: japaneseCategory.id,
        },
      },
    },
    {
      nome: "Sushi House",
      imagemUrl:
        "https://utfs.io/f/de37be82-23bf-4901-aeea-b93c281bf401-fu3r08.png",
      taxadeEntrega: 10,
      tempoDeEntrega: 20,
      categorias: {
        connect: {
          id: japaneseCategory.id,
        },
      },
    },
  ];

  for (const item of japaneseRestaurants) {
    const restaurante = await prismaClient.restaurante.create({
      data: item,
    });

    console.log(`Created ${restaurante.nome}`);

    await createDeserts(restaurante.id, desertsCategoryId);
    await createJuices(restaurante.id, juicesCategoryId);

    const japaneseProducts = [
      {
        nome: "Sushi Combo",
        preco: 30,
        descricao: descricao,
        PorcentagemDeDesconto: 5,
        imagemUrl:
          "https://utfs.io/f/5ef70d5c-892b-424d-8655-6bc2716411e1-1lryd0.png",
        restaurante: {
          connect: {
            id: restaurante.id,
          },
        },
        categoria: {
          connect: {
            id: japaneseCategory.id,
          },
        },
      },
      {
        nome: "Sashimi Combo",
        preco: 40,
        descricao: descricao,
        PorcentagemDeDesconto: 10,
        imagemUrl:
          "https://utfs.io/f/e8b2fb18-d636-477f-8bed-cfe85358246f-1lryd1.png",
        restaurante: {
          connect: {
            id: restaurante.id,
          },
        },
        categoria: {
          connect: {
            id: japaneseCategory.id,
          },
        },
      },
      {
        nome: "Nigiri Combo",
        preco: 35,
        descricao: descricao,
        PorcentagemDeDesconto: 7,
        imagemUrl:
          "https://utfs.io/f/fd9458a3-153b-4833-aca1-61a882da1ce6-1lryd2.png",
        restaurante: {
          connect: {
            id: restaurante.id,
          },
        },
        categoria: {
          connect: {
            id: japaneseCategory.id,
          },
        },
      },
      {
        nome: "Temaki Combo",
        preco: 45,
        descricao: descricao,
        PorcentagemDeDesconto: 0,
        imagemUrl:
          "https://utfs.io/f/eec36a13-de2d-48ed-92d2-4f74477dad83-1lryd3.png",
        restaurante: {
          connect: {
            id: restaurante.id,
          },
        },
        categoria: {
          connect: {
            id: japaneseCategory.id,
          },
        },
      },
      {
        nome: "Uramaki Combo",
        preco: 30,
        descricao: descricao,
        PorcentagemDeDesconto: 10,
        imagemUrl:
          "https://utfs.io/f/c04a5df1-c1ac-4e28-ba48-27d856caa553-1lryd4.png",
        restaurante: {
          connect: {
            id: restaurante.id,
          },
        },
        categoria: {
          connect: {
            id: japaneseCategory.id,
          },
        },
      },
      {
        nome: "Hosomaki Combo",
        preco: 40,
        descricao: descricao,
        PorcentagemDeDesconto: 0,
        imagemUrl:
          "https://utfs.io/f/fd147569-14c6-428d-9a54-df64c61c6bb6-1lryd5.png",
        restaurante: {
          connect: {
            id: restaurante.id,
          },
        },
        categoria: {
          connect: {
            id: japaneseCategory.id,
          },
        },
      },
    ];

    for (const produto of japaneseProducts) {
      await prismaClient.produto.create({
        data: produto,
      });

      console.log(`Created ${produto.nome}`);
    }
  }
};

const createBrazilian = async (
  desertsCategoryId: string,
  juicesCategoryId: string,
) => {
  const brazilianCategory = await prismaClient.categoria.create({
    data: {
      nome: "Brasileira",
      imagemUrl:
        "https://utfs.io/f/d84e3a7a-fcf6-4d3d-86bf-d62c0b1febdc-m1yv44.png",
    },
  });

  const brazilianRestaurants = [
    {
      nome: "Churrascaria House",
      imagemUrl:
        "https://utfs.io/f/5a090f6e-520f-418a-a42a-043b512314a2-n9n78u.png",
      taxadeEntrega: 5,
      tempoDeEntrega: 30,
      categorias: {
        connect: {
          id: brazilianCategory.id,
        },
      },
    },
    {
      nome: "Omni Churrascaria",
      imagemUrl:
        "https://utfs.io/f/87338583-660e-47f1-a80d-6ea804298bd5-n9n78v.png",
      taxadeEntrega: 5,
      tempoDeEntrega: 30,
      categorias: {
        connect: {
          id: brazilianCategory.id,
        },
      },
    },
    {
      nome: "The Churrascaria Queen",
      imagemUrl:
        "https://utfs.io/f/b26b00ca-5041-46cb-9b68-a1856ed064ad-n9n78w.png",
      taxadeEntrega: 0,
      tempoDeEntrega: 45,
      categorias: {
        connect: {
          id: brazilianCategory.id,
        },
      },
    },
    {
      nome: "Churrascaria House",
      imagemUrl:
        "https://utfs.io/f/c1f279ea-ac09-4e4f-9757-30018cb4c7bc-n9n78x.png",
      taxadeEntrega: 10,
      tempoDeEntrega: 20,
      categorias: {
        connect: {
          id: brazilianCategory.id,
        },
      },
    },
  ];

  for (const item of brazilianRestaurants) {
    const restaurante = await prismaClient.restaurante.create({
      data: item,
    });

    console.log(`Created ${restaurante.nome}`);

    await createDeserts(restaurante.id, desertsCategoryId);
    await createJuices(restaurante.id, juicesCategoryId);

    const brazilianProducts = [
      {
        nome: "Camarão Citrus",
        preco: 40,
        descricao: descricao,
        PorcentagemDeDesconto: 5,
        imagemUrl:
          "https://utfs.io/f/cecdeeb8-10e6-4be8-8553-0a120717d194-xf34p9.png",
        restaurante: {
          connect: {
            id: restaurante.id,
          },
        },
        categoria: {
          connect: {
            id: brazilianCategory.id,
          },
        },
      },
      {
        nome: "Picanha Especial",
        preco: 45,
        descricao: descricao,
        PorcentagemDeDesconto: 5,
        imagemUrl:
          "https://utfs.io/f/089299df-fcb9-446a-a8cc-75e4e26b7357-xf34p8.png",
        restaurante: {
          connect: {
            id: restaurante.id,
          },
        },
        categoria: {
          connect: {
            id: brazilianCategory.id,
          },
        },
      },
      {
        nome: "Macarrão com Carne",
        preco: 35,
        descricao: descricao,
        PorcentagemDeDesconto: 5,
        imagemUrl:
          "https://utfs.io/f/891eb8aa-635e-4cb3-b7fd-eb8d1c9f14e1-xf34p7.png",
        restaurante: {
          connect: {
            id: restaurante.id,
          },
        },
        categoria: {
          connect: {
            id: brazilianCategory.id,
          },
        },
      },
      {
        nome: "Carne com Salada",
        preco: 35,
        descricao: descricao,
        PorcentagemDeDesconto: 5,
        imagemUrl:
          "https://utfs.io/f/43d9e18a-4ba9-47b6-9a87-6d4fedbd6f41-xf34ol.png",
        restaurante: {
          connect: {
            id: restaurante.id,
          },
        },
        categoria: {
          connect: {
            id: brazilianCategory.id,
          },
        },
      },
      {
        nome: "Filé Mignon com Fritas",
        preco: 40,
        descricao: descricao,
        PorcentagemDeDesconto: 0,
        imagemUrl:
          "https://utfs.io/f/0cfa51a6-1a88-4114-a6c6-bf607a5a1cb0-xf34ok.png",
        restaurante: {
          connect: {
            id: restaurante.id,
          },
        },
        categoria: {
          connect: {
            id: brazilianCategory.id,
          },
        },
      },
      {
        nome: "Frango ao Molho",
        preco: 40,
        descricao: descricao,
        PorcentagemDeDesconto: 5,
        imagemUrl:
          "https://utfs.io/f/9158a622-4b87-4ec6-a726-569dee27a093-xf34oj.png",
        restaurante: {
          connect: {
            id: restaurante.id,
          },
        },
        categoria: {
          connect: {
            id: brazilianCategory.id,
          },
        },
      },
    ];

    for (const produto of brazilianProducts) {
      await prismaClient.produto.create({
        data: produto,
      });

      console.log(`Created ${produto.nome}`);
    }
  }
};

const createDeserts = async (restauranteId: string, categoriaId: string) => {
  await prismaClient.restaurante.update({
    where: {
      id: restauranteId,
    },
    data: {
      categorias: {
        connect: {
          id: categoriaId,
        },
      },
    },
  });

  const desertProducts = [
    {
      nome: "Sorvete Especial",
      preco: 30,
      descricao: descricao,
      PorcentagemDeDesconto: 10,
      imagemUrl:
        "https://utfs.io/f/b703fcaa-eb9c-4257-a08e-fba0f0e12fc1-pr8gxl.png",
      restaurante: {
        connect: {
          id: restauranteId,
        },
      },
      categoria: {
        connect: {
          id: categoriaId,
        },
      },
    },
    {
      nome: "Bolo de Chocolate",
      preco: 40,
      descricao: descricao,
      PorcentagemDeDesconto: 7,
      imagemUrl:
        "https://utfs.io/f/029befff-aba7-49b3-91c4-8da022e699b0-pr8gxm.png",
      restaurante: {
        connect: {
          id: restauranteId,
        },
      },
      categoria: {
        connect: {
          id: categoriaId,
        },
      },
    },
    {
      nome: "Petit Gateau",
      preco: 55,
      descricao: descricao,
      PorcentagemDeDesconto: 5,
      imagemUrl:
        "https://utfs.io/f/98f262f6-dc35-428b-bac9-ac443f9f41bb-pr8gxn.png",
      restaurante: {
        connect: {
          id: restauranteId,
        },
      },
      categoria: {
        connect: {
          id: categoriaId,
        },
      },
    },
    {
      nome: "Bolo de Morango",
      preco: 35,
      descricao: descricao,
      PorcentagemDeDesconto: 5,
      imagemUrl:
        "https://utfs.io/f/6e6ad97a-f1f1-4d4b-bb40-f5ff25ba97d4-pr8gxo.png",
      restaurante: {
        connect: {
          id: restauranteId,
        },
      },
      categoria: {
        connect: {
          id: categoriaId,
        },
      },
    },
    {
      nome: "Biscoito de Chocolate",
      preco: 30,
      descricao: descricao,
      PorcentagemDeDesconto: 7,
      imagemUrl:
        "https://utfs.io/f/4b8d0b7c-daa9-46f6-aebd-385cf5e086f7-pr8gxp.png",
      restaurante: {
        connect: {
          id: restauranteId,
        },
      },
      categoria: {
        connect: {
          id: categoriaId,
        },
      },
    },
    {
      nome: "Torta de Morango",
      preco: 45,
      descricao: descricao,
      PorcentagemDeDesconto: 5,
      imagemUrl:
        "https://utfs.io/f/4caadde1-0a1c-45a6-895b-4bfb6986099d-pr8gxq.png",
      restaurante: {
        connect: {
          id: restauranteId,
        },
      },
      categoria: {
        connect: {
          id: categoriaId,
        },
      },
    },
  ];

  for (const produto of desertProducts) {
    await prismaClient.produto.create({
      data: produto,
    });

    console.log(`Created ${produto.nome}`);
  }
};

const createJuices = async (restauranteId: string, categoriaId: string) => {
  await prismaClient.restaurante.update({
    where: {
      id: restauranteId,
    },
    data: {
      categorias: {
        connect: {
          id: categoriaId,
        },
      },
    },
  });

  const juiceProducts = [
    {
      nome: "Suco de Cenoura",
      preco: 15,
      descricao: descricao,
      PorcentagemDeDesconto: 5,
      imagemUrl:
        "https://utfs.io/f/5126e950-40ca-4ef1-a166-16274fec16bc-6b2vea.png",
      restaurante: {
        connect: {
          id: restauranteId,
        },
      },
      categoria: {
        connect: {
          id: categoriaId,
        },
      },
    },
    {
      nome: "Suco Cítrico",
      preco: 20,
      descricao: descricao,
      PorcentagemDeDesconto: 7,
      imagemUrl:
        "https://utfs.io/f/6dbe915d-af87-4f2a-b841-864ba9427da8-6b2ve9.png",
      restaurante: {
        connect: {
          id: restauranteId,
        },
      },
      categoria: {
        connect: {
          id: categoriaId,
        },
      },
    },
    {
      nome: "Suco de Limão",
      preco: 12,
      descricao: descricao,
      PorcentagemDeDesconto: 5,
      imagemUrl:
        "https://utfs.io/f/03aa4137-c949-4d2c-bdf2-bad6dd1f565e-6b2ve7.png",
      restaurante: {
        connect: {
          id: restauranteId,
        },
      },
      categoria: {
        connect: {
          id: categoriaId,
        },
      },
    },
    {
      nome: "Suco de Laranja",
      preco: 12,
      descricao: descricao,
      PorcentagemDeDesconto: 5,
      imagemUrl:
        "https://utfs.io/f/ce2b8e30-b922-4b1e-bdde-656348cd25c3-6b2ve6.png",
      restaurante: {
        connect: {
          id: restauranteId,
        },
      },
      categoria: {
        connect: {
          id: categoriaId,
        },
      },
    },
    {
      nome: "Suco de Abacaxi",
      preco: 12,
      descricao: descricao,
      PorcentagemDeDesconto: 7,
      imagemUrl:
        "https://utfs.io/f/c4202826-7014-4368-8941-fa1af9b9c8b2-6b2ve5.png",
      restaurante: {
        connect: {
          id: restauranteId,
        },
      },
      categoria: {
        connect: {
          id: categoriaId,
        },
      },
    },
    {
      nome: "Suco de Melancia",
      preco: 12,
      descricao: descricao,
      PorcentagemDeDesconto: 5,
      imagemUrl:
        "https://utfs.io/f/a9ba878f-79a8-4c25-883c-5c2e1670b256-6b2ve4.png",
      restaurante: {
        connect: {
          id: restauranteId,
        },
      },
      categoria: {
        connect: {
          id: categoriaId,
        },
      },
    },
  ];

  for (const produto of juiceProducts) {
    await prismaClient.produto.create({
      data: produto,
    });

    console.log(`Created ${produto.nome}`);
  }
};

const main = async () => {
  const desertsCategory = await prismaClient.categoria.create({
    data: {
      nome: "Sobremesas",
      imagemUrl:
        "https://utfs.io/f/0f81c141-4787-4a81-abce-cbd9c6596c7a-xayf5d.png",
    },
  });

  const juicesCategory = await prismaClient.categoria.create({
    data: {
      nome: "Sucos",
      imagemUrl:
        "https://utfs.io/f/9f3013bf-0778-4d80-a330-4da2682deaf9-o41y62.png",
    },
  });

  await createBurguers(desertsCategory.id, juicesCategory.id);
  await createPizzas(desertsCategory.id, juicesCategory.id);
  await createJapanese(desertsCategory.id, juicesCategory.id);
  await createBrazilian(desertsCategory.id, juicesCategory.id);
};

main()
  .then(() => {
    console.log("Seed do banco de dados realizado com sucesso!");
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prismaClient.$disconnect();
  });