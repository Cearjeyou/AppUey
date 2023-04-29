import { ApolloServer, gql } from "apollo-server";

const simpleProducts = [
  {
    id: "092c498a-e5fe-11ed-a05b-0242ac120003",
    name: "Vino",
    seller: "Pepito Perez",
    urlImage:
      "https://img.freepik.com/foto-gratis/copa-vino-tinto-barra-bar_107420-65844.jpg?w=360&t=st=1682711748~exp=1682712348~hmac=cf41b4d73afdffc53a2571a70835d4b18e6fef2260431634e1db893ac40ec1ee",
    price: 57000,
    stock: 14,
  },
  {
    id: "13fc5872-e5ff-11ed-a05b-0242ac120003",
    name: "Champagne",
    seller: "Jhon Velez",
    urlImage:
      "https://cdn.pixabay.com/photo/2017/01/09/02/02/pink-wine-1964457_1280.jpg",
    price: 57000,
    stock: 25,
  },
  {
    id: "beb48a90-e600-11ed-a05b-0242ac120003",
    name: "Tequila",
    seller: "Sara Cox",
    urlImage:
      "https://cdn.pixabay.com/photo/2020/04/02/10/20/bottle-4994445_1280.png",
    price: 58000,
    stock: 30,
  },
  {
    id: "d3cb73ca-e60b-11ed-a05b-0242ac120003",
    name: "Gaseosas",
    seller: "Juana Lopez",
    urlImage:
      "https://cdn.pixabay.com/photo/2019/11/23/19/11/glasses-of-mint-4647914_1280.jpg",
    price: 45000,
    stock: 34,
  },
];

const rentalProducts = [
  {
    id: "08f87adc-e60e-11ed-a05b-0242ac120003",
    name: "Mesas",
    seller: "Juan Ruiz",
    urlImage:
      "https://images.unsplash.com/photo-1605317039225-0001f706cdef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    price: 14000,
    typeRent: "Noche",
    availability: true,
  },
  {
    id: "ea5d2d4c-e60e-11ed-a05b-0242ac120003",
    name: "Equipos de sonido",
    seller: "Lorena Gomez",
    urlImage:
      "https://images.unsplash.com/photo-1544785349-c4a5301826fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 200000,
    typeRent: "Noche",
    availability: true,
  },
  {
    id: "f3ce9d7a-e60e-11ed-a05b-0242ac120003",
    name: "Decoración para muebles",
    seller: "Jimena Guitierrez",
    urlImage:
      "https://images.unsplash.com/photo-1510076857177-7470076d4098?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    price: 50000,
    typeRent: "Noche",
    availability: true,
  },
  {
    id: "01678e38-e60f-11ed-a05b-0242ac120003",
    name: "Sillas",
    seller: "Tomas Lopez",
    urlImage:
      "https://images.unsplash.com/photo-1506326426992-32b61983f2fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
    price: 5000,
    typeRent: "Noche",
    availability: true,
  },
];

const placeProducts = [
  {
    id: "fabc6da8-e611-11ed-a05b-0242ac120003",
    name: "Salon Deseos",
    seller: "Rosa Lopez",
    urlImage:
      "https://images.unsplash.com/photo-1561912774-79769a0a0a7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    price: 400000,
    location: "Calle 47",
    availability: true,
  },
  {
    id: "02025fe6-e612-11ed-a05b-0242ac120003",
    name: "Discoteca Dance",
    seller: "Mayra Gomez",
    urlImage:
      "https://media.istockphoto.com/id/1053940970/es/foto/pista-de-baile-discoteca-vac%C3%ADa.jpg?s=612x612&w=is&k=20&c=iZ80wUFNPDdMJ-cltfr8RVQ2KL9H56MvOyxuXDS020U=",
    price: 500000,
    location: "Calle 47",
    availability: true,
  },
  {
    id: "0755ac46-e612-11ed-a05b-0242ac120003",
    name: "Auditorio Planet",
    seller: "Rosa Lopez",
    urlImage:
      "https://cdn.pixabay.com/photo/2013/02/26/01/10/auditorium-86197_1280.jpg",
    price: 510000,
    location: "Calle 47",
    availability: true,
  },
  {
    id: "0e2969cc-e612-11ed-a05b-0242ac120003",
    name: "Finca Brisas",
    seller: "Andres Lopez",
    urlImage:
      "https://cdn.pixabay.com/photo/2016/07/14/02/22/living-room-1515976_1280.jpg",
    price: 400000,
    location: "Calle 47",
    availability: true,
  },
];

const typeDefinitions = gql`
  interface Producto {
    id: ID!
    name: String!
    seller: String!
    urlImage: String!
    price: Float!
  }

  type Simple implements Producto {
    id: ID!
    name: String!
    seller: String!
    urlImage: String!
    price: Float!
    stock: Int!
  }

  type Rentable implements Producto {
    id: ID!
    name: String!
    seller: String!
    urlImage: String!
    price: Float!
    typeRent: String!
    availability: Boolean!
  }

  type Place implements Producto {
    id: ID!
    name: String!
    seller: String!
    urlImage: String!
    price: Float!
    location: String!
    availability: Boolean!
  }

  type Query {
    allProductSimples: [Simple]!
    allProductRentals: [Rentable]!
    allProductPlaces: [Place]!
    findByIdSimpleProduct(id: ID!): Simple
    findByIdRentalProduct(id: ID!): Rentable
    findByIdPlaceProduct(id: ID!): Place
  }
`;

const resolvers = {
  Query: {
    allProductSimples: () => simpleProducts,
    allProductRentals: () => rentalProducts,
    allProductPlaces: () => placeProducts,
    findByIdSimpleProduct: (root, args) => {
      const { id } = args;
      return simpleProducts.find((simpleProduct) => simpleProduct.id === id);
    },
    findByIdRentalProduct: (root, args) => {
      const { id } = args;
      return rentalProducts.find((rentalProduct) => rentalProduct.id === id);
    },
    findByIdPlaceProduct: (root, args) => {
      const { id } = args;
      return placeProducts.find((placeProduct) => placeProduct.id === id);
    },
  },
};

const server = new ApolloServer({
  typeDefs: typeDefinitions,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
