import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Mathewq",
      email: "Mathew@gmail.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "Adeyemi",
      email: "adeyemi@gmail.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],

  products: [
    {
      name: "man-shirt",
      slug: "man-shirt",
      category: "Shirts",
      image: "/images/p1.jpg", // 679px × 829px
      price: 120,
      countInStock: 10,
      brand: "unknown",
      rating: 4.5,
      numReviews: 10,
      description: "high quality shirt",
    },
    {
      name: "white-top",
      slug: "white-top",
      category: "top",
      image: "/images/p2.jpg",
      price: 250,
      countInStock: 15,
      brand: "unknown",
      rating: 1.0,
      numReviews: 15,
      description: "high quality product",
    },
    {
      name: "brown-shirt",
      slug: "brown-shirt",
      category: "Shirts",
      image: "/images/p3.jpg",
      price: 25,
      countInStock: 15,
      brand: "unknown",
      rating: 1.5,
      numReviews: 14,
      description: "high quality product",
    },
    {
      name: "man-suit",
      slug: "man-suit",
      category: "suit",
      image: "/images/p4.jpg",
      price: 65,
      countInStock: 0,
      brand: "Puma",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
  ],
};
export default data;
