"use strict";

const express = require('express');  // Importera express
const cors = require('cors');  // Importera CORS för att hantera cross-origin requests
const app = express();  // Använd express
const PORT = 3000;  // Port 3000 kommer att anvädas för servern

// Använd CORS och JSON middleware
app.use(cors());
app.use(express.json());


// Test route
app.get("/", (req, res) => {
    res.json({ message: "Välkommen till CV API" });
});

app.listen (PORT, () => {
    console.log(`Servern körs på port ${PORT}`);
});

// Funktion i API för att hämta användarens work experience
app.get("/api/workexperience", (req, res) => {
});

// Funktion i API för att lägga till work experience i databasen
app.post("/api/workexperience", (req, res) => {
    const { company_name, position, description, start_date, end_date, location } = req.body;

    // Validering så alla fält fylls i
    if (!company_name || !position || !description || !start_date || !end_date || !location) {
        return res.status(400).json({ error: "Alla fält måste fyllas i" });
    }

    // Validering så inte slutdatum anges före startdatum
    if (new Date(end_date) < new Date(start_date)) {
        return res.status(400).json({ error: "Slutdatum kan inte vara tidigare än startdatum." });
    }
});

// Funktion i API för att uppdatera en användaren work experience i databasen
app.put("/api/workexperience/:id", (req, res) => {
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
});

// Funktion i API för att ta bort en post från användaren
app.delete("/api/workexperience/:id", (req, res) => {
    const { id } = req.params;
});

// Funktion i API för att hämta en specifik post från användarenS work experience
app.get("/api/workexperience/:id", (req, res) => {
    const { id } = req.params;
});