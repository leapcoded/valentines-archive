var hiddenCount = [];
var HIDDEN_TOTAL = 6;
var HIDDEN_UNLOCK = 5;

function commandText(text) {
  return "[[g;#EEEEEE;]" + text + "]";
}

function hiddenLetter(text) {
  return "[[g;#FF69B4;]" + text + "]";
}

function hiddenProgressMessage() {
  return "\nYou have found " + hiddenLetter(hiddenCount.length + " of " + HIDDEN_TOTAL + " ") + "hidden commands so far!\n";
}

function recordHidden(name) {
  if (hiddenCount.includes(name)) {
    return false;
  }

  hiddenCount.push(name);
  return true;
}

function maybeRevealComplete(terminal) {
  if (hiddenCount.length >= HIDDEN_UNLOCK) {
    terminal.echo("You have found enough hidden commands! You can now use the " + hiddenLetter("complete") + " command!");
  }
}

function onHiddenFound(terminal, name) {
  if (recordHidden(name)) {
    terminal.echo(hiddenProgressMessage());
    maybeRevealComplete(terminal);
  }
}

function htopBar(percent) {
  var filled = Math.max(0, Math.min(20, Math.round(percent / 5)));
  return "[" + "#".repeat(filled) + "-".repeat(20 - filled) + "] " + percent.toFixed(1) + "%";
}

function randomPercent(min, max) {
  return min + Math.random() * (max - min);
}

function showLinks(terminal) {
  terminal.echo();
  terminal.echo("Places you can find Skye / Neri online:");
  terminal.echo();

  SOCIAL_LINKS.forEach(function(link) {
    terminal.echo("|  " + commandText(link.label.padEnd(18)) + " " + link.url);
  });

  terminal.echo();
  terminal.echo("GitHub is usually the best bet if you want to say hi about a project.");
  terminal.echo();
}

var TAKA_ASCII = ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n" +
  ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n" +
  ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n" +
  ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n" +
  ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,  ,,,,,,,,,. ( ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n" +
  ",,,,,,,,,,,,,,,,,,,,,,,,            (%  ,,. &%//(       .,,,,,,,,,,,,,,,,,,,,,,,\n" +
  ",,,,,,,,,,,,,.            %/////#%///////#///////////% .,,.,.,.,,,,,,,,.,,,,..,,\n" +
  ",,,,,,.,,, %,,,*,,***,,,**,*%/////////%///////%////%(//(/         ,,,,,,,,,,,,,,\n" +
  ",,,,,,,,, **#,.(,,***,(///////////////////////////////%*,*****,,,,,# .,,,,,.,,,,\n" +
  ",,,, ,,, %*#....,*****,,%///////////////////////////////%*,******,*,,..,,,,.,,,,\n" +
  ",,,,,,., /,,,.....%**%/////////////#%&///#(#////////////////%(....,*/ ,,,,,,,,,,\n" +
  ",,,, ,,,. %*,/.*...&/////////////%,,*,,*/***,%/////////////%..//..*,% .,,  ,,,,,\n" +
  ",,,,,,,,,, %*,,%..(/////////////#***********,*,%//////////////...%,% .,,,,,,,,,,\n" +
  ",,,,.,,,,,,  %**%/////////////%,*****************%(/%////#%///#**,%%  .,,,,,,,,.\n" +
  "              /%%%#///////%/%**,,**************,*@@/*,**,*,***,**#//(           \n" +
  "           %////%%//#//%%%%*//////,*************//////*,*******,,*#/////%       \n" +
  "           %////%%*,*,**,,*///////,***********,,////////,,**,*,**#///%%         \n" +
  "            #////%********..,//&&/,***********,,/&&/,...******(*%//////.        \n" +
  "               %//%*#,,**,*,..,/*.***,,*,,,***,,.//..,,*******%////%#((#        \n" +
  "               %/////(/,,,*****,*,,,*%..@@/..%,,*,,,******,,%//////%            \n" +
  " ..,,,,,,,,,,, &///#/(///%%**,**,,*,*,,,@@@.,*****,,,**&@@////.%%#(%            \n" +
  ",,,,,,,,.,,,,,,   ,. #@**&/////#///###(%#%%%%#&((@//&/////%  ..,,,..,,.,,,,,,,,,\n" +
  ",,,,,,,  .,.  ,,,, @,** @**& ,/////%@((@@////////////@(%&    %#  ,,,,,,,,,.  ,,,\n" +
  ",,,,,,,,,,,,,,,,, @**.  **@**& (///////////********@&////(,%////%% .,,,,,,,,,,,,\n" +
  ",,,,,,,,,, ,,,,, (,,*  **#%%/#*&#**************&(****#.(& %/&(%  /* .,,,,,,,,,,,\n" +
  ",,,,,,,,,,,,, ,&**,.  ***%&@  /****/,%//*///@,*,*%,**%% ,,.  ,. #,,*,,.  ,,,,,,,\n" +
  ",,,,,,,,,,,,,,,  @  ***%%%@ , &****,*&@&/@,****#*******(##(###/,,# ,,,,,,,,,,,,,\n" +
  ",,,,,,,,,,,,,,,,,,   &%%@ ,,,, (##*/@@,.(*,**,/%#%*****%,*,*(%* ,,,,,,,,,,,,,,,,\n" +
  ",,,,,,,,,,,,,,,,,,,,,. .,,,,,,,, *#(((%&@%**/%*(*//%#.  ,,,,,,,,,,,,,,,,,,,,,,,,\n" +
  ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n" +
  ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n" +
  ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,";

var BUCK_ASCII = ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n" +
  ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,.,,,,,,,,,,,*,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n" +
  ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,*,,,,,,,,,\n" +
  ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,*,,,,,,,,,\n" +
  ",,,,,,,,,,,,,,,,,,,,..&#&,,,,,. ///*..,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n" +
  ",,,,,,,,,,...,,,,,,,,&##& ,,&&%%%%%%%%%%%%&#,,,,*&,,,,,,,,,,,,,,.,,,,,,,,,,,,,,,\n" +
  ",,,,,,,,,,,,,,*,,,,,&####&@&&%%%%&&&%%%%%%%%%%& ,&%&,,,,,,,,,.&##&,,,,,,,,,,,,,,\n" +
  ",,,,,,,,,,,,,,,,,,*,&&&(%%%%%%%%%%%%%%%&%%%%%%%%&.%%&,,,,,,,###%##&,,,,,,,,,,,,,\n" +
  ",,,,,,,,,,,,,,,,,, &#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%&%&@%%%#,%#&///#&.,,,,,,,,,,,,\n" +
  ",,,,,,,,,,,,,,,,.&%%%%%%%%%%%%%%%%%%%%%%%%%&%%%%%%%%%%&&&&&#&////&&(,,,,,,,,,,,,\n" +
  ",,,,,,,,,,,,,,,,,.&&%%%%%%%%%%%%%%%%%%&%%%%%%%%%%%%%%%%&#%#%//%//&#(,*,,,,,.,,,,\n" +
  ",,,,,,,,,,,,,,,,,.,&&%%%%%%%%%%%%%&%%%%%%%%%%%%%%%%%%&&####//(#//##&,,,,,..,,,,,\n" +
  ",,,,,,,,,,,,,....&(%%%%%%%&&%%%%%%%%%%%%%%%%%%%%%%%%%%%&#&&/////&#&(...,,,,,,,,,\n" +
  ",,,,,,,,,,......&%%%%%%&%%%%%%%%%%%%%&%%%%&&&&&%%%%%&%%%&%&/%//&##&,.......,,,,,\n" +
  ",,,,,,,........&%%%%%&%%%%%%%%%%%&%%%%%%&&%%%&#&%&&%&%%%&&%(/&###& ...........,,\n" +
  ",,,,..........&(%%%%&%%%%%%%%%%%%%%%%&&&%%&#####&%&&%%%%%&/%###%%%&&,...........\n" +
  ",,............&%&&%&%%%%%&&&&####(((&&(((#######&%&%%%%%%&###&%%%%%%&...........\n" +
  "................&%%&%%%%%%%######((((((((#######&&&%%%%%&#&&&&%%%%&%%&&.........\n" +
  "...............%%%%&%%%%%&# @#%@((((((((((@#######.%%%%&###&%%%%%%%%&...........\n" +
  "..............&%&%%%%%%%&%((((((((((((((#((@@@@@,  &%%&####&%%%%%%%%%%/.........\n" +
  ".................&&%%%&%###(((((((###(((((((((.    *% &######&%%%%%%%%&.........\n" +
  "..................&%%&#&%%%####%&%%%%%#####(@@.. ,@@,####%&&&&%%%%%%%%&.........\n" +
  ".................. &%&##&@%%%%%%&@%&#######@@@ .@&%%%%%%%&&&&%%%%%%%&#..........\n" +
  "..................&%%%&##//####//#########@        %%%%%%%%%%%%%%%&*............\n" +
  "..................%%%%%&&##############@@   #&&%&%%%%%%%%%%%%%%%%%%.. ..........\n" +
  " .............../#%%%%%%&   .@@@@@@@ @@    &%%%%&%%%%%%%%%%%%%%%%%%%&...........\n" +
  ".    ...  ... .###%%%%%%%%&              #&%%%%%&&%%%&%%%%%%%%%%%%%%%& . . . . .\n" +
  "    .,  . .   ##((//(##%%##%%&@       &&%&%%%&%%%%%%%%%%%%%%%%%%%&%%%%@.   .   .\n" +
  ",. ,.,,.  ..  ./%((((((#(#####%&%%%%%%%%%%&%%%%%%%%%%%%&%%%%&%%%%%&&%&          \n" +
  "..,,.,.,......&(%%%%%%%((//####%%%%%%%%%%&(%%%%%%%%%%%%&/%&%%(&%%%&#. .. .,.,...\n" +
  ".,.,,..... ../(%%%&&&#%%%%%/##%#%%%%%%%%%%&&&@%%%%%%%%&/((####/(((((#.....,.,,,.\n" +
  ",.,,............#//((&#%%%*/###%%%%%%%%%%%%%%%%%%&&%&#((/////*****(((%.....*,,,.\n" +
  ",*,..........  #//**/*/((/##(#%%%%%%%%%%%%%%%%%&#&(((##((((/*///****((#... ... .";

var PRIDE_FLAGS = [
  "[[g;#FF218C;]#############################\n" +
  "[[g;#FFD800;]#############################\n" +
  "[[g;#21B1FF;]#############################\n",

  "[[g;#FFF430;]#############################\n" +
  "[[g;#FFFFFF;]#############################\n" +
  "[[g;#9D59D2;]#############################\n" +
  "[[g;#000000;]#############################\n",

  "[[g;#E40002;]#############################\n" +
  "[[g;#FF8B00;]#############################\n" +
  "[[g;#FEED01;]#############################\n" +
  "[[g;#027F23;]#############################\n" +
  "[[g;#004DFF;]#############################\n" +
  "[[g;#750689;]#############################\n",

  "[[g;#5BCEFA;]#############################\n" +
  "[[g;#F5A8B8;]#############################\n" +
  "[[g;#FFFFFF;]#############################\n" +
  "[[g;#F5A8B8;]#############################\n" +
  "[[g;#5BCEFA;]#############################\n"
];

var LOVE_MESSAGES = [
  "You light up my life.",
  "Being with you makes me a better person.",
  "I appreciate how much effort you put into making me feel valued and respected.",
  "I do a little wiggle when I think about you.",
  "You are inspiring!",
  "I smile when I think about you",
  "I'm excited for our future adventures!",
  "You're incredibly huggable.",
  "*hands u a sparkly " + hiddenLetter("trophy") + "*"
];

var POSSUM_FACTS = [
  "Opossums have fifty teeth. That is a lot of teeth for one small possum.",
  "Servals have the longest legs of any cat, relative to body size. Very leggy.",
  "Opossums are immune to most snake venom. Built different.",
  "A serval can leap over nine feet in a single bound. Boing.",
  "Opossums play dead so convincingly that predators often leave them alone.",
  "Servals catch prey by pouncing with up to a fifty percent success rate.",
  "Baby opossums are called joeys and ride around in pouches.",
  "SRV OS is powered by caffeine, curiosity, and at least one wiggle."
];

var JQUERY_FACTS = [
  "jQuery launched in 2006 with the motto: write less, do more.",
  "The dollar sign alias exists because typing jQuery() gets old fast.",
  "jQuery Terminal turns any DOM element into a command line. SRV OS runs on it.",
  "Chaining is a core jQuery idea: $(element).addClass('retro').fadeIn().",
  "jQuery selectors use CSS syntax, which made the early web feel suddenly approachable.",
  "This site still loads jQuery 3.3.1. Old habits, cozy terminals.",
  "jQuery was created by John Resig when the DOM was wild and inconsistent.",
  "Under the hood, jQuery normalises browser quirks so you can focus on ideas instead of edge cases."
];

var SOCIAL_LINKS = [
  { label: "Website", url: "https://lilpossum.xyz" },
  { label: "GitHub", url: "https://github.com/leapcoded" },
  { label: "Bluesky", url: "https://bsky.app/profile/lilpossum.bsky.social" },
  { label: "Bandcamp", url: "https://lilpossum.bandcamp.com" },
  { label: "Valentine terminal", url: "https://valentine.lilpossum.xyz" },
  { label: "Become a cat", url: "https://cat.lilpossum.xyz" }
];

var FORTUNES = [
  "A cozy blanket and good company are closer than they appear.",
  "Your next adventure begins with one brave little command.",
  "Someone nearby thinks you are doing better than you realise.",
  "Good things come to those who type " + commandText("menu") + " and explore.",
  "The matrix has you, but hugs are still free.",
  "A warm drink and a silly website will improve this week.",
  "You will soon discover a command you did not expect.",
  "Leggy energy is strong with you today."
];

var HUG_ART = [
  "(づ｡◕‿‿◕｡)づ  *offers hug*",
  "   \\   ^__^",
  "    \\  (oo)\\_______",
  "       (__)\\       )\\/\\",
  "           ||----w |",
  "           ||     ||",
  "",
  "Hug deployed successfully."
];

var App = {
  motd: function(ret) {
    if (typeof ret === "undefined") {
      ret = false;
    }

    var greetText =
      "You are now connected to " + commandText("SRV OS") + " - VERSION 2.14 \n" +
      "\n" +
      "Please type " + commandText("menu") + " for a list of commands.\n" +
      "\nYou have found " + hiddenLetter(hiddenCount.length + " of " + HIDDEN_TOTAL + " ") + "hidden commands so far!\n";

    if (!ret) {
      this.echo("\n" + greetText);
      return;
    }

    return greetText;
  },

  menu: function() {
    this.echo();
    this.echo("|  " + commandText("motd") + "               - Display Message of the Day");
    this.echo();
    this.echo("|  " + commandText("about") + "              - About SRV OS");
    this.echo("|  " + commandText("origin") + "             - Why this site exists");
    this.echo("|  " + commandText("ascii") + "              - All about ASCII art!");
    this.echo("|  " + commandText("attributes") + "         - Serval statistics");
    this.echo("|  " + commandText("clear") + "              - Clear the terminal");
    this.echo("|  " + commandText("coderain") + "           - The Matrix has you...");
    this.echo("|  " + commandText("home") + "                - Back to lilpossum.xyz");
    this.echo("|  " + commandText("fact") + "                - Random possum and serval facts");
    this.echo("|  " + commandText("jquery") + "              - jQuery facts and lore");
    this.echo("|  " + commandText("hug") + "                 - Receive a virtual hug");
    this.echo("|  " + commandText("fortune") + "             - Open a digital fortune cookie");
    this.echo("|  " + commandText("date") + "                - Display system date and time");
    this.echo("|  " + commandText("htop") + "               - Mock system process monitor");
    this.echo("|  " + commandText("cat") + "                 - Visit cat.lilpossum.xyz");
    this.echo("|  " + commandText("sysinfo") + "             - Display SRV OS system information");
    this.echo("|  " + commandText("links") + "               - Where to find me online");
    this.echo("|  " + commandText("prompt") + "             - Type prompt plus your name to change the prompt");
    this.echo();
    this.echo("|  " + commandText("credits") + "            - Credits for this website");
    this.echo();
    this.echo("|  " + commandText("all") + "                - Run all commands");
    this.echo();
  },

  prompt: function(name) {
    if (name === undefined) {
      this.echo("Please enter a name");
      return;
    }

    this.typing("prompt", 100, name + ">", function() {});
  },

  Leggy: function() {
    onHiddenFound(this, "Leggy");
    this.echo($('<img src="https://files.botsin.space/media_attachments/files/109/816/233/582/679/971/original/fa9babb8af64601c.jpg">'));
  },

  coderain: function() {
    window.location.href = "../Matrix/index.html";
  },

  home: function() {
    window.location.href = "https://lilpossum.xyz";
  },

  fact: function() {
    return POSSUM_FACTS[Math.floor(Math.random() * POSSUM_FACTS.length)];
  },

  jquery: function() {
    return JQUERY_FACTS[Math.floor(Math.random() * JQUERY_FACTS.length)];
  },

  origin: function() {
    this.echo();
    this.echo("|  " + commandText("Why SRV OS exists"));
    this.echo();
    this.echo("At the start of the year, Skye made a resolution to learn skills that might help with switching careers.");
    this.echo("They were already studying web development at university and wanted a project that actually used what they were learning.");
    this.echo();
    this.echo("Valentine's Day was getting close. Skye is a notoriously hopeless romantic, so the idea became obvious:");
    this.echo("build a cute terminal website for the people they love, full of hidden commands, ASCII art, and very sincere feelings.");
    this.echo();
    this.echo("What started as \"this will be a piece of cake\" turned into boot screens, morphing ASCII, retro scanlines, and a lot of jQuery rabbit holes.");
    this.echo("Forum posts, documentation tabs, and borrowed inspiration from jQuery Terminal, ASCII Morph, and Ronnie Pyne's homepage layout all got stitched together.");
    this.echo();
    this.echo("Years later it lives on at " + commandText("valentine.lilpossum.xyz") + " — still part opossum, part serval, still powered by too much caffeine.");
    this.echo();
  },

  hug: function() {
    this.echo(HUG_ART.join("\n"));
  },

  fortune: function() {
    this.echo();
    this.echo("  .---.");
    this.echo(" /     \\");
    this.echo("|       |");
    this.echo(" \\     /");
    this.echo("  '---'");
    this.echo();
    return FORTUNES[Math.floor(Math.random() * FORTUNES.length)];
  },

  date: function() {
    var now = new Date();
    this.echo("|  System date: " + commandText(now.toLocaleDateString()));
    this.echo("|  System time: " + commandText(now.toLocaleTimeString()));
    this.echo("|  Timezone:    " + commandText(Intl.DateTimeFormat().resolvedOptions().timeZone));
  },

  htop: function() {
    var cpu = randomPercent(8, 42);
    var mem = randomPercent(28, 76);
    var swap = randomPercent(0, 12);

    this.echo();
    this.echo("  SRV OS process monitor                    Tasks: 6 total, 2 wiggling, 4 vibing");
    this.echo("  CPU " + htopBar(cpu) + "   Mem " + htopBar(mem) + "   Swap " + htopBar(swap));
    this.echo();
    this.echo("  PID   USER       CPU%  MEM%  COMMAND");
    this.echo("  420   possum     " + randomPercent(4, 18).toFixed(1).padStart(4) + "  " + randomPercent(8, 24).toFixed(1).padStart(4) + "  love-daemon");
    this.echo("  1337  serval     " + randomPercent(2, 12).toFixed(1).padStart(4) + "  " + randomPercent(5, 16).toFixed(1).padStart(4) + "  leggy.service");
    this.echo("  2014  skye       " + randomPercent(1, 8).toFixed(1).padStart(4) + "  " + randomPercent(4, 12).toFixed(1).padStart(4) + "  jquery-terminal");
    this.echo("  2602  caffeine   " + randomPercent(10, 35).toFixed(1).padStart(4) + "  " + randomPercent(12, 30).toFixed(1).padStart(4) + "  brew --foreground");
    this.echo("  3141  ascii      " + randomPercent(1, 6).toFixed(1).padStart(4) + "  " + randomPercent(2, 10).toFixed(1).padStart(4) + "  morph --loop");
    this.echo("  9999  hidden     " + randomPercent(0, 4).toFixed(1).padStart(4) + "  " + randomPercent(1, 5).toFixed(1).padStart(4) + "  secrets --count=" + hiddenCount.length);
    this.echo();
    this.echo("  Press " + commandText("q") + " to pretend to quit. This is a mock htop. Nothing is actually monitored.");
  },

  cat: function(arg) {
    if (arg === "go") {
      window.location.href = "https://cat.lilpossum.xyz";
      return;
    }

    this.echo();
    this.echo("Become a cat. Go on. You know you want to.");
    this.echo();
    this.echo("|  Project: " + commandText("become-cat"));
    this.echo("|  URL:     " + commandText("https://cat.lilpossum.xyz"));
    this.echo();
    this.echo("Type " + commandText("cat go") + " to be teleported there immediately.");
  },

  sysinfo: function() {
    this.echo();
    this.echo("       _____");
    this.echo("      /     \\");
    this.echo("     | o   o |   " + commandText("SRV OS 2.14"));
    this.echo("      \\ ___ /    possum-serval edition");
    this.echo();
    this.echo("|  Host:      " + commandText(window.location.hostname || "valentine.lilpossum.xyz"));
    this.echo("|  Shell:     " + commandText("jQuery Terminal"));
    this.echo("|  Kernel:    " + commandText("love.js"));
    this.echo("|  Uptime:    " + commandText("since Valentine's Day, forever"));
    this.echo("|  Packages:  " + commandText(hiddenCount.length + " hidden commands found"));
    this.echo("|  Theme:     " + commandText("retro green"));
    this.echo();
  },

  links: function() {
    showLinks(this);
  },

  contact: function() {
    this.echo("Try the " + commandText("links") + " command for where to find me online.");
    showLinks(this);
  },

  "2.14": function() {
    onHiddenFound(this, "2.14");
    return LOVE_MESSAGES[Math.floor(Math.random() * LOVE_MESSAGES.length)];
  },

  pride: function() {
    onHiddenFound(this, "pride");
    return PRIDE_FLAGS[Math.floor(Math.random() * PRIDE_FLAGS.length)];
  },

  ASCIItaka: function() {
    onHiddenFound(this, "ascii");
    this.echo(TAKA_ASCII);
  },

  ASCIIbuck: function() {
    onHiddenFound(this, "ascii");
    this.echo(BUCK_ASCII);
  },

  ascii: function() {
    this.echo();
    this.echo(hiddenLetter("ASCII") + " ar" + hiddenLetter("t") + " is " + hiddenLetter("a") + " form of digital art that uses the characters from the ASCII character set to create images.\n" +
      "The simplicity of ASCII art makes it accessible to anyone with a computer.\n");
    this.echo();
    this.echo("Despite its " + hiddenLetter("b") + "asic appearance, ASCII art has the power to evo" + hiddenLetter("k") + "e emotions and convey ide" + hiddenLetter("a") + "s through its imaginative " + hiddenLetter("u") + "se of lines and symbols.\n" +
      "Its versatility has made it popular in various forms of digital media including social media platforms instant messaging, and even email signatures.\n");
    this.echo();
    this.echo("The " + hiddenLetter("c") + "reativity of ASCII artists never fails to impress, as they continue to find new and innovative ways to push the boundaries of what can be achieved using only ASCII.\n" +
      "Whether it's a whimsical cartoon, a " + hiddenLetter("k") + "ind portrait, or a detailed landscape, ASCII art never fails to be a source of inspiration and awe.\n");
    this.echo();
  },

  nerdy: function() {
    onHiddenFound(this, "nerdy");
    this.echo("<3 <3 <3 <3 <3 <3");
    this.echo();
    this.echo("In binary code, the word " + commandText("love") + " is represented as " + commandText("01101100 01101111 01100101") + ". If you consider each " + commandText("1") + " to be a kiss and each " + commandText("0") + " to be a hug, you can see that the message behind " + commandText("love") + " is " + commandText("kiss-hug-kiss-kiss-hug-hug-kiss.\n") + "So in essence, every time someone says " + commandText("I love you") + " in binary code, they're actually saying " + commandText("I kiss-hug you.\n") + "\nIsn't that nerdy and romantic all at once?");
    this.echo();
    this.echo("<3 <3 <3 <3 <3 <3");
  },

  about: function() {
    this.echo();
    this.echo("|  Product Name:   " + commandText("SRV OS"));
    this.echo("|  Version Number: " + hiddenLetter("2.14"));
    this.echo("|  Serial number:  " + commandText("sRtJDi3PFk7EAFKkZzWS"));
    this.echo();
    this.echo("|  History:\n" +
      "SRV OS came about due to Skye wanting to learn more about " + hiddenLetter("nerdy") + " things and express their love for the people who inspire them every day.\n" +
      "At first, Skye was intimidated by the thought of learning something so complex, but they were determined to make something before valentines to show their love.\n" +
      "Skye began browsing forums and looking for ideas. Slowly but surely, they learned the basics of how to write simple jQuery stuff.\n" +
      "\nThey've taken great " + hiddenLetter("pride") + " in creating this, and hope that you enjoy it as much as they enjoyed making it.\n");
    this.echo("Type " + commandText("origin") + " for the longer version of how this project came to be.");
  },

  trophy: function() {
    onHiddenFound(this, "trophy");
    this.echo("[[@;;;;https://images.squarespace-cdn.com/content/62418744eb964176d3b7c908/51769803-e090-4775-b1aa-6acc5d97676a/IMG_0123.PNG?content-type=image%2Fpng]]");
    this.echo("Image by @builtbyaxel on Twitter");
  },

  attributes: function() {
    this.echo();
    this.echo("|  " + commandText("Physical"));
    this.echo();
    this.echo("|  " + hiddenLetter("Leggy") + "                 ##[[g;#00DE12;]###############################################]    ##");
    this.echo("|  " + commandText("Catellites") + "             ##[[g;#00DE12;]###############################################]    ##");
    this.echo("|  " + commandText("Booper") + "                 ##[[g;#5BD100;]############################################]       ##");
    this.echo("|  " + commandText("Pawbs") + "                  ##[[g;#5BD100;]############################################]       ##");
    this.echo("|  " + commandText("Clawbs") + "                 ##[[g;#99D100;]#########################################]          ##");
    this.echo("|  " + commandText("Floof Duster") + "           ##[[g;#B2D100;]#######################################]            ##");
    this.echo("|  " + commandText("Alertness") + "              ##[[g;#D1B900;]############################]                       ##");
    this.echo("|  " + commandText("Mow volume") + "             ##[[g;#D16200;]###########]                                        ##");
    this.echo();
    this.echo("|  " + commandText("Skills"));
    this.echo();
    this.echo("|  " + commandText("Mental Health") + "          ##[[g;#42D100;]###############################################]    ##");
    this.echo("|  " + commandText("Cooking") + "                ##[[g;#42D100;]###############################################]    ##");
    this.echo("|  " + commandText("Hugs") + "                   ##[[g;#5BD100;]#############################################]      ##");
    this.echo("|  " + commandText("Sassiness") + "              ##[[g;#99D100;]#########################################]          ##");
    this.echo("|  " + commandText("Music Snobbery") + "         ##[[g;#B2D100;]########################################]           ##");
    this.echo("|  " + commandText("Stremches") + "              ##[[g;#D1B900;]################################]                   ##");
    this.echo("|  " + commandText("Multi-tasking") + "          ##[[g;#D1B900;]############################]                       ##");
    this.echo();
    this.echo("|  " + commandText("Romance"));
    this.echo();
    this.echo("|  " + commandText("Smoochability") + "          ##[[g;#5BD100;]############################################]       ##");
    this.echo("|  " + commandText("Butt Quality") + "           ##[[g;#B2D100;]#######################################]            ##");
    this.echo("|  " + commandText("Massage Skills") + "         ##[[g;#B2D100;]#######################################]            ##");
    this.echo("|  " + commandText("Flexibility") + "            ##[[g;#B2D100;]#####################################]              ##");
    this.echo("|  " + commandText("Body Odour") + "             ##[[g;#D13F00;]#########]                                          ##");
    this.echo();
  },

  credits: function() {
    this.echo();
    this.echo("|  Site built by " + commandText("Skye Wright"));
    this.echo("|  Using " + commandText("Jquery Terminal Emulator") + " by " + commandText("Jakub Jankiewicz") + ": http://terminal.jcubic.pl");
    this.echo("|  Using " + commandText("Homepage Layout") + " by " + commandText("Ronnie Pyne") + ": https://github.com/perverse");
    this.echo();
  },

  complete: function() {
    if (hiddenCount.length < HIDDEN_UNLOCK) {
      this.echo("Keep exploring! You've only found " + hiddenLetter(hiddenCount.length + " of " + HIDDEN_TOTAL + " ") + "hidden commands so far.");
      return;
    }

    this.echo("Thanks for playing!");
  },

  all: function() {
    this.clear();
    this.exec("motd");
    this.exec("about");
    this.exec("ascii");
    this.exec("attributes");
    this.exec("links");
    this.exec("credits");
  },

  ls: function() {
    this.exec("menu");
  }
};

jQuery(document).ready(function($) {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    window.location.href = "https://lilpossum.xyz";
    return;
  }

  $("body").terminal(App, {
    greetings: function(cb) {
      cb(App.motd(true));
    },
    onBlur: function() {
      return false;
    },
    completion: true,
    checkArity: false
  });
});
