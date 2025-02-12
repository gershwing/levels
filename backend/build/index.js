"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const productRouter_1 = require("./routers/productRouter");
const seedRouter_1 = require("./routers/seedRouter");
const userRouter_1 = require("./routers/userRouter");
const orderRouter_1 = require("./routers/orderRouter");
const keyRouter_1 = require("./routers/keyRouter");
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, '../.env') }); // Asegúrate de que esto esté al principio
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/levelsshopdb';
mongoose_1.default.set('strictQuery', true);
mongoose_1.default
    .connect(MONGODB_URI)
    .then(() => {
    console.log('connected to mongodb');
})
    .catch((error) => {
    console.log('error mongodb:', error);
});
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    credentials: true,
    origin: ['http://localhost:5173'],
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/api/products', productRouter_1.productRouter);
app.use('/api/users', userRouter_1.userRouter);
app.use('/api/seed', seedRouter_1.seedRouter);
app.use('/api/orders', orderRouter_1.orderRouter);
app.use('/api/keys', keyRouter_1.keyRouter);
app.use(express_1.default.static(path_1.default.join(__dirname, '../../frontend/dist')));
app.get('*', (req, res) => res.sendFile(path_1.default.join(__dirname, '../../frontend/dist/index.html')));
const PORT = parseInt((process.env.PORT || '4000'), 10);
app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`);
});
