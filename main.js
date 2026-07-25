const word_bank = [
    "aback", "abase", "abash", "abbey", "abeam",
    "abide", "abler", "abuse", "abuts", "ached",
    "acrid", "admit", "adopt", "adult", "afoot",
    "afoul", "agate", "alias", "allay", "allow",
    "amble", "amigo", "among", "amuse", "angry",
    "apace", "aphid", "appal", "apple", "apply",
    "apter", "arced", "armor", "arose", "ashen",
    "asked", "asset", "atone", "attic", "audio",
    "audit", "aught", "aural", "avast", "avert",
    "award", "awing", "awoke", "bacon", "bakes",
    "balmy", "banal", "banjo", "barfs", "baron",
    "basic", "baste", "bathe", "batty", "bauds",
    "bayou", "beach", "beady", "bebop", "beech",
    "beefs", "befog", "besom", "billy", "black",
    "bleak", "bleed", "blend", "bless", "blest",
    "blimp", "blind", "blink", "blown", "bobby",
    "bogus", "boink", "booed", "boozy", "boron",
    "bosun", "bowel", "bower", "braid", "brand",
    "brash", "brief", "bring", "briny", "broke",
    "broom", "bulge", "burrs", "busby", "bused",
    "butch", "bylaw", "cacao", "cairn", "calyx",
    "caned", "canny", "carry", "cased", "caste",
    "catch", "cater", "cavil", "cedar", "cedes",
    "chaos", "chart", "chary", "chasm", "chest",
    "chewy", "chief", "china", "chink", "chive",
    "choir", "chuck", "clang", "clean", "clime",
    "cling", "clipt", "cloak", "clock", "clued",
    "coach", "coded", "comet", "comic", "conga",
    "cooed", "coops", "cough", "craft", "cramp",
    "crawl", "crazy", "creak", "crime", "croak",
    "crumb", "cubed", "curer", "curie", "curry",
    "daddy", "dared", "delve", "denim", "dense",
    "derby", "dicky", "dilly", "dimer", "dirty",
    "dizzy", "dodgy", "doped", "dorks", "dough",
    "downy", "doyen", "drain", "dried", "drill",
    "drily", "dully", "dummy", "dwarf", "dwelt",
    "eager", "eaten", "edged", "elder", "emcee",
    "emoji", "empty", "erupt", "evade", "excel",
    "exude", "fagot", "fasts", "fazed", "feces",
    "fiber", "fight", "filet", "first", "fjord",
    "flack", "flail", "flair", "fleet", "flora",
    "flubs", "forge", "forty", "frags", "freer",
    "frets", "froth", "frump", "gazed", "geeky",
    "girth", "glitz", "glows", "glued", "gorps",
    "gourd", "gouty", "graft", "grasp", "grass",
    "graze", "grief", "gripe", "groin", "grove",
    "grown", "grunt", "guild", "gummy", "guppy",
    "gushy", "gybes", "haiku", "hairy", "halts",
    "halve", "handy", "harem", "harpy", "hates",
    "heady", "heals", "heard", "heave", "heavy",
    "hello", "hence", "hewed", "hippo", "hived",
    "hoist", "honed", "hooch", "hopes", "hotly",
    "hound", "hussy", "ideal", "igloo", "impel",
    "inced", "incur", "ingot", "inure", "irony",
    "jello", "jells", "jihad", "khaki", "kicky",
    "kinda", "kitty", "knell", "knock", "laden",
    "largo", "laxly", "leads", "leash", "least",
    "leery", "levee", "lexer", "light", "linen",
    "lisps", "lithe", "loafs", "loamy", "lobby",
    "longs", "lorry", "louse", "loves", "loxes",
    "lucky", "lupin", "lusty", "macaw", "maced",
    "manga", "manse", "march", "mason", "maxed",
    "meant", "meaty", "mecca", "medic", "merit",
    "merry", "meted", "milch", "miler", "mimic",
    "miner", "minty", "mixer", "mixes", "moans",
    "model", "molar", "molts", "mooed", "mosey",
    "motto", "moved", "mover", "movie", "muddy",
    "music", "mutes", "nabob", "nadir", "naked",
    "nexus", "nicer", "niece", "niter", "noted",
    "notes", "nudge", "oaken", "ochre", "offer",
    "oiled", "oldie", "omega", "onion", "opted",
    "ovary", "ovoid", "paced", "paged", "panty",
    "papal", "pasha", "patio", "paves", "peace",
    "peony", "perch", "perky", "peter", "pilaf",
    "pilau", "pinch", "piper", "piton", "plaza",
    "pleat", "poise", "puked", "pwned", "quiet",
    "ratio", "razed", "recur", "renal", "right",
    "roams", "robed", "route", "rowed", "rower",
    "ruddy", "ruder", "rummy", "saber", "saith",
    "seedy", "seize", "semen", "serum", "shady",
    "shake", "sheer", "shlep", "shock", "shoed",
    "shoos", "skill", "slash", "sleep", "sleet",
    "slobs", "slosh", "slunk", "small", "smash",
    "sneer", "sniff", "spawn", "spear", "sperm",
    "spiky", "spilt", "splay", "spout", "stink",
    "stuff", "suing", "surly", "sweat", "sweet",
    "tenor", "thorn", "thyme", "tidal", "tiger",
    "timed", "timid", "toned", "toner", "toted",
    "totem", "trash", "tread", "tress", "trial",
    "trite", "tromp", "trues", "truly", "tryst",
    "tubby", "tuber", "tummy", "tunny", "tweed",
    "twink", "unify", "union", "upend", "using",
    "uteri", "value", "vaped", "vaunt", "venal",
    "vetch", "vexes", "viand", "viola", "voter",
    "wacko", "wacks", "wades", "wafts", "waged",
    "waltz", "wanna", "wants", "water", "waved",
    "waxed", "wears", "wedge", "weedy", "weeps",
    "welds", "whack", "wharf", "whiny", "whist",
    "white", "whizz", "windy", "worry", "worse",
    "would", "wrote", "wryer", "yanks", "zebra"
];

const random = Math.floor(Math.random() * word_bank.length);

const chosen_word = word_bank[random];

const allCells = document.querySelectorAll('.cell');

let row = 0;
let cell = 0;

document.addEventListener('keydown', (event) => {
    const key = event.key.toUpperCase();
    const index = row * 5 + cell;

    if (/^[A-Z]$/.test(key)) {
        if (cell < 5) {
            allCells[index].textContent = key;
            cell++;
        }
    }
    else if (key === 'BACKSPACE') {
        if (cell > 0) {
            cell--;
            allCells[index - 1].textContent = '';

        }
    }
    else if (key === 'ENTER') {
        if (cell === 5) {
            wordCheker();
            row++;
            cell = 0;
        }
    }
})

//checks if the word submitted is correct, incorrect, or applicable
function wordCheker() {
    let guess = '';
    for (let i = 0; i < 5; i++) {
        guess += allCells[row * 5 + i].textContent;
    }
    guess = guess.toLocaleLowerCase();

    if (guess === chosen_word) {
        setTimeout(() => alert("Correct!"), 10);
    }

    for (let i = 0; i < 5; i++) {

        //checks for letter in correct position (green)
        if (guess[i] === chosen_word[i]) {
            allCells[row * 5 + i].classList.add('correct');
        }

        //checks for misplaced letters (orange)
        if (chosen_word.includes(guess[i]) && guess[i] !== chosen_word[i]) {
            allCells[row * 5 + i].classList.add('hint');
        }

        //checks which letter is wrong
        if (!chosen_word.includes(guess[i]) && guess[i] !== chosen_word[i]) {
            allCells[row * 5 + i].classList.add('wrong');
        }
    }
}