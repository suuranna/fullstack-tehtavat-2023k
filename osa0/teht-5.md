# Tehtävä 0.5


```mermaid
sequenceDiagram
    participant user
    participant browser
    participant server
    
    user->>browser: Käyttäjä menee sivulle
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    server->>browser: palauttaa HTML-dokumentin
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    server-->>browser: palauttaa css-tiedoston
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    server-->>browser: palauttaa JavaScript-tiedoston
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]

```
