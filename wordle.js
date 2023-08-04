const testWordList = [
    "apple","alley","paper","melon","zebra","books","cheap","beach", "candy", "dance", "fable", "glaze", "hazel", "image", "jolly", "kneel", "lemon", "merry", "novel", "ocean", "piano", "quilt", "rider", "sable", "tiger", "umbra", "vocal", "waste", "xenon", "yield", "zonal",
    "alarm", "baker", "civic", "dwarf", "eager", "frost", "gloom", "happy", "ivory", "jumbo", "kiosk", "laser", "mango", "noble", "olive", "pilot", "quack", "roast", "silly", "table", "urine", "virus", "wreck", "xerox", "yacht", "zesty",
    "amber", "bison", "caper", "daisy", "easel", "flame", "grape", "hiker", "icing", "jazzy", "karma", "leash", "mavis", "nexus", "onion", "panda", "query", "risky", "sugar", "tulip", "uncle", "vibes", "whale", "xylem", "yodel", "zilch",
    "ankle", "bliss", "chive", "dodge", "eager", "flair", "grind", "hatch", "issue", "jolly", "knack", "lunar", "mocha", "navel", "otter", "punch", "quell", "rally", "slave", "tulip", "uncut", "vegan", "wheat", "xenon", "yummy", "zesty",
    "alloy", "blaze", "candy", "drape", "elixir", "flask", "greet", "heist", "irate", "jokes", "knots", "lunch", "mummy", "nymph", "oxide", "plaza", "quart", "rival", "spoon", "trump", "usage", "vivid", "witty", "xenon", "youth", "zesty",
    "apron", "bluff", "caper", "dwell", "eagle", "flute", "gator", "honey", "irate", "joker", "knobs", "lunch", "merry", "nacho", "oasis", "paint", "query", "rider", "spice", "tulip", "uncle", "vault", "wince", "xenon", "yield", "zonal",
    "bloom", "candy", "drain", "elite", "flame", "giant", "hurry", "icing", "jolly", "knack", "lunar", "mocha", "noble", "onion", "pilot", "quack", "relic", "spicy", "tulip", "uncle", "vocal", "wedge", "xenon", "yacht", "zippy",
    "arcade", "blouse", "champ", "dwarf", "elbow", "friend", "grape", "humor", "image", "jolly", "keeper", "leash", "merry", "noble", "olive", "punch", "quell", "rider", "spice", "tulip", "uncle", "vocal", "witch", "xenon", "yield", "zesty",
    "baker", "cable", "daisy", "eager", "flute", "gloom", "hiker", "ivory", "jolly", "karma", "lemon", "merry", "nacho", "olive", "punch", "quart", "rider", "spice", "tulip", "uncut", "vegan", "waste", "xenon", "yummy", "zonal",
    "beard", "caper", "dodge", "easel", "flask", "gloom", "heist", "issue", "jolly", "kayak", "leash", "mavis", "nexus", "otter", "punch", "quill", "risky", "spoon", "tulip", "uncle", "vegan", "whirl", "xenon", "yield", "zonal",
    "banner", "caper", "dwarf", "eager", "flame", "grape", "hatch", "irons", "jolly", "knead", "lunar", "merry", "noble", "olive", "punch", "quell", "rider", "spice", "tulip", "uncle", "vocal", "wedge", "xenon", "yield", "zesty",
    "beast", "bliss", "candy", "drape", "easel", "flask", "gloom", "hurry", "icing", "jolly", "knock", "lemon", "merry", "nacho", "olive", "punch", "quart", "rider", "spice", "tulip", "uncle", "vocal", "witch", "xenon", "yield", "zonal",
    "bishop", "candy", "drain", "elite", "flame", "gator", "hiker", "ivory", "jolly", "karma", "leash", "merry", "noble", "onion", "punch", "quack", "rider", "spice", "tulip", "uncle", "vocal", "waste", "xenon", "yummy", "zonal",
    "blaze", "caper", "daisy", "eager", "flute", "grind", "heist", "irate", "jolly", "knock", "lemon", "merry", "noble", "oxide", "pilot", "quell", "rally", "spice", "tulip", "uncle", "vault", "wince", "xenon", "yield", "zonal",
    "cactus", "bluff", "caper", "dwell", "eagle", "flute", "gloom", "hurry", "image", "jolly", "kayak", "leash", "mavis", "noble", "onion", "punch", "quack", "relic", "spicy", "tulip", "uncle", "vocal", "witch", "xenon", "yield", "zonal",
    "camera", "blush", "champ", "dwarf", "elbow", "fable", "gator", "humor", "irate", "jolly", "keeper", "lemon", "merry", "noble", "olive", "punch", "quilt", "rider", "spice", "tulip", "uncle", "vocal", "waste", "xenon", "yield", "zesty",
    "cheer", "candy", "drain", "eager", "flame", "gator", "hatch", "issue", "jolly", "knack", "leash", "merry", "noble", "oxide", "punch", "quack", "rider", "spice", "tulip", "uncle", "vocal", "waste", "xenon", "yummy", "zesty",
    "cookie", "caper", "daisy", "eagle", "flask", "gloom", "heist", "icing", "jolly", "kayak", "laser", "merry", "noble", "oxide", "pilot", "quell", "rider", "spice", "tulip", "uncle", "vocal", "witch", "xenon", "yield", "zonal",
    "daisy", "blaze", "caper", "dwarf", "eagle", "flame", "gator", "hurry", "image", "jolly", "knack", "lemon", "merry", "noble", "olive", "punch", "quack", "rider", "spice", "tulip", "uncle", "vocal", "whirl", "xenon", "yield", "zesty",
    "dream", "candy", "drain", "eager", "flute", "gator", "hatch", "issue", "jolly", "kayak", "leash", "merry", "noble", "oxide"

];

let wordList = {valid: [], playable: []};

const rating = {
    unknown: 0,
    absent: 1,
    present: 2,
    correct: 3,
};

function startGame(round) {
    // 8. load or start the game
    let {
        attemptCount,
        userAttempts,
        highlightedRows,
        keyboard,
        answer,
        status,
    } = loadOrStartGame();

    // 6. stop game if user reached maximum rounds or status is failure or success
    while (attemptCount <= round && status === "in-progress") {
        let currentGuess = prompt("Guess a five letter word: ");
        // 1. Check if word is in word list
        if (isInputCorrect(currentGuess)) {
            // 2. absent (grey), present (yellow), correct (green)
            const highlightedCharacters = getCharactersHighlight(
                currentGuess,
                answer
            );
            highlightedRows.push(highlightedCharacters);
            // 3. highlight keyboard
            keyboard = updateKeyboardHighlights(
                keyboard,
                currentGuess,
                highlightedCharacters
            );
            // 4. update status
            status = updateGameStatus(
                currentGuess,
                answer,
                attemptCount,
                round - 1
            );
            // 5. Update attempt count
            attemptCount = attemptCount + 1;
            // 6. save game
            saveGame({
                attemptCount,
                userAttempts,
                highlightedRows,
                keyboard,
                status,
            });
        } else {
            retry(currentGuess);
        }
    }
    if (status === "success") {
        alert("Congratulations");
    } else {
        alert(`The word is ${answer}`);
    }
}

function isInputCorrect(word) {
    return wordList.playable.includes(word) || wordList.valid.includes(word);
}

function retry(word) {
    alert(`${word} is not in word list`);
}

function getCharactersHighlight(word, answer) {
    // 1. split word into characters
    const charactersArray = word.split("");
    const result = [];

    // 2. check order of characters
    charactersArray.forEach((character, index) => {
        if (character === answer[index]) {
            // 2a. correct = index of word equal index of answer
            result.push("correct");
        } else if (answer.includes(character)) {
            // 2b. present = if not correct, character is part of answer
            result.push("present");
        } else {
            // 2c. absent = else, it must be absent
            result.push("absent");
        }
    });

    return result;
}

function getKeyboard() {
    const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
    const entries = [];
    for (const alphabet of alphabets) {
        entries.push([alphabet, "unknown"]);
    }
    return Object.fromEntries(entries);
}

function updateKeyboardHighlights(
    keyboard,
    currentGuess,
    highlightedCharacter
) {
    // 5a. use currentGuess ("apple") highlightedCharacters (["correct", "present"...])
    // 5b. compare keyboard["a"] with "correct",
    // if keyboard status < "correct", update keyboard
    const newKeyboard = Object.assign({}, keyboard);

    for (let i = 0; i < highlightedCharacter.length; i++) {
        const character = currentGuess[i]; // R
        const nextStatus = highlightedCharacter[i]; // absent
        const nextRating = rating[nextStatus]; // 1
        const previousStatus = newKeyboard[character]; // unknown
        const previousRating = rating[previousStatus]; // 0

        if (nextRating > previousRating) {
            newKeyboard[character] = nextStatus;
        }
    }

    return newKeyboard;
}

function updateGameStatus(currentGuess, answer, attemptCount, round) {
    if (currentGuess === answer) {
        return "success";
    }
    if (attemptCount === round) {
        return "failure";
    }
    return "in-progress";
}

function saveGame(gameState) {
    window.localStorage.setItem("PREFACE_WORDLE", JSON.stringify(gameState));
}

function getTodaysAnswer() {
    // Starting point of your game
    const offsetFromDate = new Date(2023, 0, 1).getTime();
    // Get today
    const today = new Date().getTime();
    // Calculate ms offset
    const msOffset = today - offsetFromDate;
    // Calculate how many days has pass
    const daysOffset = msOffset / 1000 / 60 / 60 / 24;
    const answerIndex = Math.floor(daysOffset);
    return wordList.playable[answerIndex];
}

function isToday(timestamp) {
    const today = new Date();
    const check = new Date(timestamp);
    return today.toDateString() === check.toDateString();
}

async function loadOrStartGame(debug) {
    wordList = await fetch("./src/fixtures/words.json")
        .then(response => {
            return response.json();
        })
        .then(json => {
            return json;
        });

    let answer;

    if (debug) {
        answer = testWordList[0];
    } else {
        answer = getTodaysAnswer();
    }
    const prevGame = JSON.parse(window.localStorage.getItem("PREFACE_WORDLE"));

    if (prevGame && isToday(prevGame.timestamp)) {
        return {
            ...prevGame,
            answer,
        };
    }
    return {
        attemptCount: 0,
        userAttempts: [],
        highlightedRows: [],
        keyboard: getKeyboard(),
        answer,
        status: "in-progress",
    };
}
