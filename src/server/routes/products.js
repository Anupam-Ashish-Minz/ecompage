import { Router } from 'express';

const router = Router();

const listOfProducts = [
    {id: "1", name: "one", image: "/assets/images/cards_lowres.jpg", descp: "Dolor aut in praesentium earum repellendus. Sed vero at aliquid nobis cumque laborum in error illo omnis Magni eius beatae at consectetur perspiciatis. Facere consequatur assumenda atque necessitatibus enim Expedita architecto impedit ipsum quod maxime Adipisci consequatur voluptatibus rem illo iste deserunt a Nesciunt nesciunt voluptate eum recusandae dignissimos quibusdam", price: 5000},
    {id: "2", name: "two", image: "/assets/images/fireplace_lowres.jpg", descp: "Ipsum quis sint laudantium natus consectetur, alias tempore necessitatibus Ullam.", price: 5000},
    {id: "3", name: "three", image: "/assets/images/cards_lowres.jpg", descp: "Sit facilis voluptates quos quasi sapiente Temporibus dolores maxime nemo magnam minima? Voluptatum fugiat esse voluptatem voluptas provident. Dicta asperiores libero natus libero quam veniam labore ullam quasi. Harum doloribus", price: 5000},
    {id: "4", name: "four", image: "/assets/images/cards_lowres.jpg", descp: "Lorem possimus mollitia facilis et voluptatibus reiciendis enim consequatur dolorem Perferendis quaerat quos veniam voluptatibus consectetur animi. Dolorem quis nihil?", price: 5000},
    {id: "5", name: "five", image: "/assets/images/cards_lowres.jpg", descp: "Dolor aut in praesentium earum repellendus. Sed vero at aliquid nobis cumque laborum in error illo omnis Magni eius beatae at consectetur perspiciatis. Facere consequatur assumenda atque necessitatibus enim Expedita architecto impedit ipsum quod maxime Adipisci consequatur voluptatibus rem illo iste deserunt a Nesciunt nesciunt voluptate eum recusandae dignissimos quibusdam", price: 5000},
    {id: "6", name: "six", image: "/assets/images/cards_lowres.jpg", descp: "Ipsum quis sint laudantium natus consectetur, alias tempore necessitatibus Ullam.", price: 5000},
    {id: "7", name: "seven", image: "/assets/images/cards_lowres.jpg", descp: "Sit facilis voluptates quos quasi sapiente Temporibus dolores maxime nemo magnam minima? Voluptatum fugiat esse voluptatem voluptas provident. Dicta asperiores libero natus libero quam veniam labore ullam quasi. Harum doloribus", price: 5000},
    {id: "8", name: "eight", image: "/assets/images/cards_lowres.jpg", descp: "Lorem possimus mollitia facilis et voluptatibus reiciendis enim consequatur dolorem Perferendis quaerat quos veniam voluptatibus consectetur animi. Dolorem quis nihil?", price: 5000},
];

router.get("/", (_req, res) => {
    res.send(listOfProducts);
})

router.get("/:id", (req, res) => {
    res.send(
        listOfProducts.filter(x=> x.id === req.params.id.toString())
    );
})

export { router };
