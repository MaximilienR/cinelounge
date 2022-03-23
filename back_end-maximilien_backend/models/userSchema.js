const Mongoose = require("mongoose");
const { isEmail } = require("validator")
const bcrypt = require('bcrypt')
const Schema = Mongoose.Schema

const userSchema = Schema({

    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [isEmail, 'invalid email']
    },
    password: {
        type: String,
        required: true
    },
    role: { type: Array },
    avatar: { type: String },
    mainAdress: {
        id: Number,
    },
    paiementInfos: {
        creditCart: Number,
    },
    authentificationMethod: String,
    cgu: Boolean,
    newsletter: Boolean,
    wishList: Array,
    createdAt: { type: Date, default: Date.now() },
    updatedAt: Date,
    deletedAt: Date,
    adresses: {
        id: Number,
        user: Number,
        adress: String,
        city: String,
    },
    commands: {
        id: Number,
        user: Number,
        state: String,
        confirmationMail: Boolean,
        gift: Boolean,
        StringCard: String,
        adress: Number,
        deliveryType: String,
        createdAt: { type: Date, default: Date.now() },
    },
    commandsLine: {
        id: Number,
        // Quantité
        command: Number,
        product: Number,
        quantity: Number,
    },
    commandsToProducts: {
        id: Number,
        command: Number,
        product: Number,
        quantity: Number,
    },
    // 
    contactMails: {
        id: Number,
        user: Number,
        firstName: String,
        lastName: String,
        subject: String,
        content: String,
        file: String,
        fileType: String,
        createdAt: { type: Date, default: Date.now() },
    },
    discounts: {
        id: Number,
        product: Number,
        discount: Number,
        startDate: Date,
        endDate: Date,
    },
    giftCards: {
        id: Number,
        amount: Number,
        token: String,
        used: Boolean,
    },
    newsLetters: {
        id: Number,
        String: String,
        draft: Boolean,
        sendDate: Date,
        createdAt: { type: Date, default: Date.now() },
    },
    products: {
        _id: Number,
        name: String,
        description: String,
        caracteristics: String,
        categories: String,
        subcategories1: String,
        subcategories2: String,
        subcategories3: String,
        tags: Array,
        licence: String,
        price: Number,
        stock: Number,
        image: String,
        etat: Boolean,
    },
    rates: {
        id: Number,
        user: Number,
        product: Number,
        rate: Number,
        comment: String,
        createdAt: { type: Date, default: Date.now() },
    },
    returns: {
        id: Number,
        user: Number,
        product: Number,
        returnReason: String,
        precisions: String,
        file: String,
        fileType: String,
        createdAt: { type: Date, default: Date.now() },
    },
    returnReaons: {
        id: Number,
        description: String,
    },
    shoppingCartToProducts: {
        id: Number,
        user: Number,
        product: Number,
        quantity: Number,
    }
}
)

const userModel = Mongoose.model('user', userSchema);
module.exports = userModel
