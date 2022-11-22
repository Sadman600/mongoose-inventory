const mongoose = require('mongoose');

// Schema Design
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name for this product"],
        trim: true,
        unique: [true, "Name must be unique"],
        minLength: [3, "Name at least 5 character"],
        maxLength: [20, "Name is too large"]
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: [0, "Price can't be negative"]
    },
    unit: {
        type: String,
        required: true,
        enum: {
            values: ["kg", "liter", "pcs"],
            message: "Unit value can't be {VALUE}, must be kg/liter/pcs"
        }
    },
    quantity: {
        type: Number,
        required: true,
        min: [0, "Quantity can't be negative"],
        validate: {
            validator: (value) => {
                const isInteger = Number.isInteger(value);
                if (isInteger) {
                    return true;
                } else {
                    return false;
                }
            },
            message: "Quantity must be an integer"
        }
    },
    status: {
        type: String,
        required: true,
        enum: {
            values: ['in-stock', 'out-of-stock', 'discontinue'],
            message: "Statue can't be {VALUE}"
        }
    },
    // supplier: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "supplier"
    // },
    // categories: [{
    //     name: {
    //         type: String,
    //         required: true
    //     },
    //     _id: mongoose.Schema.Types.ObjectId
    // }],

}, {
    timestamps: true,
});

// Create middleware
productSchema.pre('save', function (next) {
    console.log("Befor Save");
    if (this.quantity == 0) {
        this.status = "out-of-stock"
    }
    next()
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

