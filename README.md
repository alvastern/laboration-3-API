# Välkommen till CV API
Detta repository innehåller kod för en REST API som är framtagen med Express, NodeJs och MongoDB som databas. API:et används för att hantera arbetserfarenheter (work experience) i ett CV. Funktioner för CRUD (Create, Read, Update, Delete) är implementerade.

### Länk
APIet kärs lokalt i port 3000: http://localhost:3000

### Installation
För att använda APIet ska detta repository klonas. Du behöver även installera beroenden med npm install och starta servern genom npm run start (eller npm run dev med nodemon). Servern kommer att köras i port 3000. Sedan behöver du också skapa en .env fil och lägga in denna connection string:

MONGODB_URI=mongodb://DITT_ANVÄNDARNAMN:DITT_LÖSENORD@ac-1vytctv-shard-00-00.kufsz43.mongodb.net:27017,ac-1vytctv-shard-00-01.kufsz43.mongodb.net:27017,ac-1vytctv-shard-00-02.kufsz43.mongodb.net:27017/?ssl=true&replicaSet=atlas-1ukexq-shard-0&authSource=admin&appName=laboration-3-backend

### Databas
API:et använder en NoSQL-databas genom MongoDB och Mongoose för schemavalidering.

Databas: cv  
Collection: workexperience

| Fält         | Datatyp                | Krav              | Beskrivning                          |
|--------------|------------------------|-------------------|--------------------------------------|
| id           | OBJECTID               | SKAPAS AUTOMATISKT| Unikt ID för varje post |
| company_name | STRING                 | REQUIRED          | Namn på företag                     |
| position     | STRING                 | REQUIRED          | Jobbtitel                           |
| description  | STRING                 | REQUIRED          | Beskrivning av arbetet              |
| start_date   | DATE                   | REQUIRED          | Startdatum för anställning          |
| end_date     | DATE                   | REQUIRED          | Slutdatum för anställning           |
| location     | STRING                 | REQUIRED          | Plats där arbetet utfördes          |

Exempel på JSON-data:
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
