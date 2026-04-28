"use strict";

const mongoose = require("mongoose");

const workexperienceSchema = new mongoose.Schema({
    company_name: { type: String,
    required: [true, "Företagsnamn måste anges"]
    },
    position: {type: String,
    required: [true, "Position måste anges"]
    },
    description: {
        type: String,
        required: [true, "Beskrivning måste anges"]
    },
    start_date: {
        type: Date,
        required: [true, "Startdatum måste anges"]
    },
    end_date: {
        type: Date,
        required: [true, "Slutdatum måste anges"]
    },
    location: {
        type: String,
        required: [true, "Plats måste anges"]
    },
},  {
    timestamps: true
});

module.exports = mongoose.model("workexperience", workexperienceSchema);