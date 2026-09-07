## Projekt Alexandras hemsida    
På den här webbsidan kan man läsa kort om mig, min skidsatsning samt hitta mina kontaktuppgifter.

#### Det här projektet finns till för att:
* Jag ska lära mig att **programmera webbsidor**
* Jag ska kunna testa flera olika moment som ingår i kursen  

#### Vilka tekniker har använts på hemsidan?
Just nu har bara html använts, men längre fram kommer vi implementera även CSS och JavaScript.
Readme-filen är skriven med markdown language.

#### Länkar till de publicerade versionerna:

#### Svar kortfattat på följande frågor om git:
1. _Vad är skillnaden mellan git add och git commit?_  
  Git add stagear och git commit commitar - stagear är som att samla på det som ska commitas i en korg och commita är tömma korgen mot Github eller liknande.
2. _Varför använder man branches istället för att jobba direkt i main?_  
  Det finns flera fördelar med att jobba i en branch istället för direkt i main. Bland annat:
  * Om den feature man jobbar med gör att hela projektet slutar fungera kan man enkelt gå tillbaka till hur det var innan.
  * Om man är flera som jobbar med projektet trampar man inte varandra på tårna - var och en kan helt enkelt jobba med sin del tills det är klart. 
  * Om hemsidan man jobbar med är publicerad och man har valt att den ska uppdateras varje gång man pushar till main riskerar man att publicera en hemsida med ofärdiga features/buggar. Om man jobbar i en branch kan man göra klar sin del, testa den lokalt och sedan mergea till main när man vet att allting fungerar som man hade tänkt sig.
3. _Vad händer rent praktiskt när man gör en merge?_  
  När man gör en merge går man till sin main och väljer att slå ihop den med den gren man vill mergea med. Då kommer koden från branchen in i main.
4. _Vad är skillnaden mellan att pusha till GitHub och att publicera direkt på t.ex. Netlify?_  
  ?
5. _Om du vill exkludera någon fil i projektet från versionshanteringen, hur gör du då?_  
  Då döper man filen så att den har ändelsen .gitignore ?
