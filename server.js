"use strict";

// Använda och importera mongoDB och mongoose för att hantering av databasen
require("dotenv").config();
const mongoose = require("mongoose");

const express = require('express');  // Importera express
const cors = require('cors');  // Importera CORS för att hantera cross-origin requests
const app = express();  // Använd express
const PORT = 3000;  // Port 3000 kommer att anvädas för servern

// Använd CORS och JSON middleware
app.use(cors());
app.use(express.json());

// Databasanslutning
mongoose.connect(process.env.MONGODB_URI, {
    serverSelectionTimeoutMS: 5000
})

.then(() => console.log("Ansluten till MongoDB databas"))
.catch((error) => console.error("Fel vid anslutning:", error.message));

const workexperience = require("./models/workexperience");

// Test route
app.get("/", (req, res) => {
    res.json({ message: "Välkommen till CV API" });
});

// Funktion i API för att hämta användarens work experience
app.get("/api/workexperience", async (req, res) => {
    try {
        const data = await workexperience.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({error: "Fel vid hämtning av data"});
    }
});

// Funktion i API för att lägga till work experience i databasen
app.post("/api/workexperience", async (req, res) => {
    const { company_name, position, description, start_date, end_date, location } = req.body;

    // Validering så alla fält fylls i
    if (!company_name || !position || !description || !start_date || !end_date || !location) {
        return res.status(400).json({ error: "Alla fält måste fyllas i" });
    }

    // Validering så inte slutdatum anges före startdatum
    if (new Date(end_date) < new Date(start_date)) {
        return res.status(400).json({ error: "Slutdatum kan inte vara tidigare än startdatum." });
    }

    try {
        const newWorkExperience = await workexperience.create(req.body);
        res.status(201).json(newWorkExperience);
    } catch (error) {
        res.status(500).json({error: "Kunde inte spara datan"})
    }
});

// Funktion i API för att uppdatera en användaren work experience i databasen
app.put("/api/workexperience/:id", async (req, res) => {
    const { id } = req.params;
    const { company_name, position, description, start_date, end_date, location } = req.body;

    // Validering så alla fält fylls i
    if (!company_name || !position || !description || !start_date || !end_date || !location) {
        return res.status(400).json({ error: "Alla fält måste fyllas i" });
    }

    // Validering så inte slutdatum anges före startdatum
    if (new Date(end_date) < new Date(start_date)) {
        return res.status(400).json({ error: "Slutdatum kan inte vara tidigare än startdatum." });
    }

    try {
        const updated = await workexperience.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!updated) {
            return res.status(404).json({ error: "Hittades inte" });
        }

        res.json(updated);
    } catch (error) {
        res.status(500).json({ error: "Kunde inte uppdatera" });
    }
});

// Funktion i API för att ta bort en post från användaren
app.delete("/api/workexperience/:id", async (req, res) => {
    const { id } = req.params;

    try {
        await workexperience.findByIdAndDelete(req.params.id);
        res.json({message: "Posten har tagits bort"})
    } catch (error) {
        res.status(500).json({error: "Kunde inte ta bort posten"})
    }
});

// Funktion i API för att hämta en specifik post från användarens work experience
app.get("/api/workexperience/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const data = await workexperience.findById(id);
        res.json(data);
    } catch (error) {
        res.status(500).json({error: "Fel vid hämtning av data"});
    }
});

// Startar servern på den definierade porten
app.listen (PORT, () => {
    console.log(`Servern körs på port ${PORT}`);
});