# Oste API Dokumentation 

## Ressourcer 

### GET /cheeses 

Ressourcen repræsentere alle oste i kartoteket. 
Ressourcen er formateren på følgende måde: 

```JSON
[ "varenr": 1243,
    "navn": "St clemens",
    "pris": 42.5,
    "type": "Blåskimmel",
    "producent": "St clemens",
    "antal": 15, 
    "beskrivelse": {
        "tekst": "Den ost er bare super smagfuld og dejlig indeni...",
        "smag": "mild",
        "vægt": 300,
        "billede": "stclemensblaaskimmel.jpg"
    }]
```

### GET /cheeses/\<varenummer> 

Ressourcen repræsentere et enkelt ost i kartoteket. 
Ressourcen er formarteret på følgende måde: 

```JSON
 [{
     "varenr": 1243,
    "navn": "St clemens",
    "pris": 42.5,
    "type": "Blåskimmel",
    "producent": "St clemens",
    "antal": 15, 
    "beskrivelse": {
        "tekst": "Den ost er bare super smagfuld og dejlig indeni...",
        "smag": "mild",
        "vægt": 300,
        "billede": "stclemensblaaskimmel.jpg"
    }]
```