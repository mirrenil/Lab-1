// global variabel
let username;

/*Starta spelet*/
function main() {
    alert('Hej!! Vilken tur att du kunde komma med så kortvarsel, vi hoppas att du kommer att trivas bra här!')
    const answer = prompt('Gud jag är så stressad att jag glömt vad du heter, påminn mig är du snäll');
    
    if (answer === "") {
        alert('var god ange ditt namn')
        main();
    }
    username = answer
    prepareStory();
}

function prepareStory() {
    alert('Välkommen ' + username + ' ' + ' vi har hört att du är en otroligt skicklig programmerare');
    
    const answer = prompt('Du ska undervisa klass FED21G idag, vill du hälsa på klassen eller gå till personalrummet? Skriv "hälsa" eller "personalrummet"');

    if (answer === 'hälsa') {
        sayHello();
    } else if (answer === 'personalrummet') {
        teachersRoom();
    } else {
        alert('Var god välj att hälsa på klassen eller personalrummet');
        prepareStory();
    }
}   

function sayHello() {
    alert('Du följer efter damen och stiger in i sal 7 på Medieinstitutet, Det är den vackrasta klassen du någonsin sett!');

    const answer = prompt('Du behehöver lära eleverna allt du kan om javascript och GitHub, vad vill du börja med? Skriv "javascript", "github"');

    if (answer === 'javascript') {
        teachJavascript();
    } else if (answer === 'github') {
        showGithub();
    } else {
        alert('Var god ange "javascript" eller "github"');
        sayHello();
    } 
}

function teachersRoom() {
    alert('Du går in personalrummet och möts av en stark doft av kaffe, och du ser dina nya kollegor sitta och stirra på sina skärmar. Du harklar dig och presenterar dig för kollegorna');

    const answer = prompt('Du blir medbjuden på lunch på "Vällaget", vill du följa med? Skriv "ja" eller "nej"');

    if (answer === 'ja') {
        goToLunch();
    } else if (answer === 'nej') {
        sayHello();
    } else {
        alert ('Var god ange "ja" eller "nej"');
        teachersRoom();
    }
}

function goToLunch() {
    alert('Det är lunchdags och ni promenerar i rask takt till Vällagat');
     
    const answer = prompt('Det luktar gott och du känner att det kurrar i magen, vill du ha kött, fisk eller veg?');
     if (answer === 'kött') {
         alert('Idag serveras det köttbullar med klassiska tillbehör');
         eatLunch();
     } else if (answer === 'fisk') {
        alert('Idag serveras det fisk- och skaldjursgryta');
        eatLunch();
     } else if (answer === 'veg') {
         alert('Idag serverar vi veggobullar med klassiska tillbehör');
         eatLunch();
     } else {
         alert ('Var god välj "kött", "fisk", eller "veg"');
         goToLunch();
     }
}

function eatLunch() {
    alert('Du är väldigt nöjd med ditt val, hit kommer du att gå flera gånger!');
    alert('Nu är lunchen slut och du måste skynda dig tillbaka till skolan, det ska bli så kul att hälsa på din nya klass!');
    sayHello();
}

function teachJavascript() {
    alert('Javascript är ett programmeringsspråk, ni kommer att få lära er massa nytt som ni kommer ha användning av under er LIA');

    alert('En elev räcker upp en hand och frågar: "Vad är skillnaden mellan Java och Javascript?"');

    alert('Du skrattar lite men inser snart att eleven är seriös!');

    const answer = prompt('Du berättar att Java och Javascript är två helt olika programmeringsspråk. Det finns likheter men det är absolut inte samma sak. Berätta om javascripts grundare eller javascript syntax. Skriv "grundare" eller "syntax"');
    
    if (answer === 'grundare') {
        alert('ZZZZzzzzzhhhhhh. Du hör att någon i klassen somnat och nu snarkar högt, du måste byta ämne och prata om något roligare');
        teachJavascript();
    } else if (answer === 'syntax') {
        alert('Hela klassen är knäpptyst och lyssnar när du pratar om syntax');
        takeShortBreak();
    } else {
        alert('Var god ange "grundare" eller "syntax"');
        teachJavascript();
    }
}

function showGithub() {
    alert('Du visar din GitHub profil för klassen och förklarar hur viktigt det är med repositories');

    const answer = prompt('Vill du fortsätta lektionen eller ta en bensträckare? Skriv "fortsätta" eller "bensträckare"'); 

    if (answer === 'fortsätta') {
        alert('ZZZZzzzzzhhhhhh. Du hör att någon i klassen somnat och nu snarkar högt, du måste byta ämne och prata om något roligare')
        takeShortBreak();
    } else if (answer === 'bensträckare') {
        alert('Klassen jublar!! Dags för kaffe och lite friskluft');
        takeShortBreak();
    } else {
        alert('Var god ange "fortsätta" eller "bensträckare"')
    }   showGithub();
}

function takeShortBreak() {
    alert('Dags för en liten rast, vad skönt tänker du men när du ser att en elev kommer och vill prata med dig på din rast blir du svimmfärdig');
    const answer = prompt('Du har 10 sekunder på dig att springa därifrån eller att gömma dig. Skriv "spring" eller "göm dig"');

    if (answer === 'spring') {
        alert('Du sprang till toaletten och låste in dig, här får du vara i lugn och ro');
        finishLecture();
       
    } else if (answer === 'göm dig') {
        alert('Du fick sparken för att du inte pratade med eleven som behövde hjälp');
    }
}

function finishLecture() {
    alert('Benstärckaren var välbehövlig, nu har du energi att undervisa och köra en demo');
    alert('Alla elever verkar nöjda och visar framsteg, detta kommer att bli en spännande resa att ta del av!');
    alert('Tack och hej FED21G, vi ses imorgon!!');
}
