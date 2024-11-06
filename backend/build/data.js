"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sampleUsers = exports.sampleProducts = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
exports.sampleProducts = [
    {
        name: 'Nike',
        slug: 'nike',
        category: 'Shirts',
        image: '../images/p1.jpg',
        price: 15,
        countInStock: 10,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality shirt',
    },
    {
        name: 'Adidas Fit Shirt',
        slug: 'adidas-fit-shirt',
        category: 'Shirts',
        image: '../images/p2.jpg',
        price: 1,
        countInStock: 20,
        brand: 'Adidas',
        rating: 4.0,
        numReviews: 10,
        description: 'high quality product',
    },
    {
        name: 'Lacoste Free Pants',
        slug: 'lacoste-free-pants',
        category: 'Pants',
        image: '../images/p3.jpg',
        price: 2,
        countInStock: 0,
        brand: 'Lacoste',
        rating: 4.8,
        numReviews: 17,
        description: 'high quality product',
    },
    {
        name: 'Nike Slim Pant',
        slug: 'nike-slim-pant',
        category: 'Pants',
        image: '../images/p4.jpg',
        price: 3,
        countInStock: 15,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 14,
        description: 'high quality product',
    },
];
exports.sampleUsers = [
    {
        name: 'Joe',
        email: 'admin@example.com',
        password: bcryptjs_1.default.hashSync('123456'),
        isAdmin: true,
    },
    {
        name: 'John',
        email: 'user@example.com',
        password: bcryptjs_1.default.hashSync('123456'),
        isAdmin: false,
    },
];
