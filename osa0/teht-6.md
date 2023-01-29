# Tehtävä 0.6


```mermaid
sequenceDiagram
    participant user
    participant browser
    participant server
    
    Note left of user: Käyttäjä kirjoittaa uuden muistiinpanon
    user->>browser: Save-nappia painetaan
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    server->>browser: vastauskoodi 201

```
