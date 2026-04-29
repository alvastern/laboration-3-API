# Välkommen till CV API
Detta repository innehåller kod för en REST API som är framtagen med Express och NodeJs. API:et används för att hantera arbetserfarenheter (work experience) i ett CV. Funktioner för CRUD (Create, Read, Update, Delete) är implementerade. API:et stödjer även cross-origin requests (CORS), vilket gör att det kan användas från en separat frontend-applikation.

### Länk
APIet körs lokalt i port 3000: http://localhost:3000

### Installation
För att använda dett API ska detta repository klonas. Du behöver installera npm men npm install och servern startas genom npm run start (eller npm run dev med nodemon). Servern kommer att köras i porten 3000.

### Databas
Denna API använder en NoSQL databas i MongoDB via Mongoose och MongoDB Atlas. Databasen innehåller en collection med namnet workexperience. 

Databas: cv  
Collection: workexperience

| Fält          | Datatyp                | Krav        | Beskrivning                          |
|--------------|------------------------|------------|--------------------------------------|
| id           | OBJECT ID                | AUTOMATISERAD   | Unikt ID för varje post |
| company_name | STRING                   | OBLIGATORISK   | Namn på företag                     |
| position     | STRING                   | OBLIGATORISK   | Jobbtitel                           |
| description  | STRING                   | OBLIGATORISK   | Beskrivning av arbetet              |
| start_date   | DATE                   | OBLIGATORISK   | Startdatum för anställning          |
| end_date     | DATE                   | OBLIGATORISK   | Slutdatum för anställning           |
| location     | STRING                   | OBLIGATORISK   | Plats där arbetet utfördes          |

Ett objekt skickas som JSON-data med följande struktur:
{
  "company_name": "Mittuniversitetet",
  "position": "Senior Labbhandledare",
  "description": "Handledde ännu fler studenter",
  "start_date": "2019-01-01",
  "end_date": "2020-01-01",
  "location": "Sundsvall"
}

### Endpoints
| Metod | Endpoint                    | Beskrivning                         |
|------|----------------------------|-------------------------------------|
| GET  | /api/workexperience        | Hämtar alla arbetserfarenheter      |
| GET  | /api/workexperience/:id    | Hämtar en specifik arbetserfarenhet |
| POST | /api/workexperience        | Skapar en ny arbetserfarenhet       |
| PUT  | /api/workexperience/:id    | Uppdaterar en arbetserfarenhet      |
| DELETE | /api/workexperience/:id  | Tar bort en arbetserfarenhet        |

### Testning
APIet har testats genom verktyget Thunder Client i Visual Studio Code.
