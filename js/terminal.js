var scanlines = $('.scanlines');

var tv = $('.tv');

function exit() {
    $('.tv').addClass('collapse');
    term.disable();
}

var commandText = function(text){
  return "[[g;#EEEEEE;]" + text + "]";
}

var titleText = function(text){
  return "[[u;inherit;]" + text + "]";
}

var hiddenLetter = function(text){
  return "[[g;#FF69B4;]" + text + "]";
}

var hiddenCount = [];

var App = {

  motd: function(ret){
      if (typeof ret === 'undefined') ret = false;
      var greetText = 
          "You are now connected to " + commandText('SRV OS') + " - VERSION 2.14 \n"+
          "\n" +
          "Please type " + commandText('menu') + " for a list of commands.\n" +
          "\nYou have found " + hiddenLetter(hiddenCount.length + " of 6 ") + "hidden commands so far!\n";

      if (!ret) {
          this.echo("\n" + greetText);
      } else {
          return greetText;
      }
  },


  menu: function(){
      this.echo();
      this.echo("|  " + commandText("motd") + "               - Display Message of the Day");
      this.echo();
      this.echo("|  " + commandText("about") + "              - About SRV OS");
      this.echo("|  " + commandText("ascii") + "              - All about ASCII art!");
      this.echo("|  " + commandText("attributes") + "         - Serval statistics");
      this.echo("|  " + commandText("clear") + "              - Clear the terminal");
      this.echo("|  " + commandText("coderain") + "           - The Matrix has you...");
      this.echo("|  " + commandText("prompt") + "             - Type prompt plus your name to change the prompt");
      this.echo();
      this.echo("|  " + commandText("contact") + "            - Contact me")
      this.echo("|  " + commandText("credits") + "            - Credits for this website");
      this.echo();
      this.echo("|  " + commandText("all") + "                - Run all commands");
      this.echo();
  },

  prompt: function(name) {
    if(name === undefined) {
      this.echo("Please enter a name");
    }else
    this.typing('prompt', 100, name + '>', function() {
    });
         
  },

  Leggy: function() {
    if (!hiddenCount.includes("Leggy")){
      hiddenCount.push("Leggy");
      this.echo("\nYou have found " + hiddenLetter(hiddenCount.length + " of 6 ") + "hidden commands so far!\n");
    }
       
    if (hiddenCount.length >= 5){
      this.echo("You have found enough hidden commands! You can now use the " + hiddenLetter("complete") + " command!");
    }

    const img = $('<img src="https://files.botsin.space/media_attachments/files/109/816/233/582/679/971/original/fa9babb8af64601c.jpg">');
    this.echo(img);
    },

    coderain: function() {
      window.location.href = "../Matrix/index.html";
    },

    

  2.14: function() {
    if (!hiddenCount.includes("2.14")){
      hiddenCount.push("2.14");
      this.echo("\nYou have found " + hiddenLetter(hiddenCount.length + " of 6 ") + "hidden commands so far!\n");
    }
        
    if (hiddenCount.length >= 5){
      this.echo("You have found enough hidden commands! You can now use the " + hiddenLetter("complete") + " command!");
    }

    const messages = [
      "You light up my life.",
      "Being with you makes me a better person.",
      "I appreciate how much effort you put into making me feel valued and respected.",
      "I do a little wiggle when I think about you.",
      "You are inspiring!",
      "I smile when I think about you",
      "I'm excited for our future adventures!",
      "You're incredibly huggable.",
      "*hands u a sparkly " + hiddenLetter("trophy") + "*",
    ];
  
    return messages[Math.floor(Math.random() * messages.length)];
    },

    pride: function() {
      if (!hiddenCount.includes("pride")){
        hiddenCount.push("pride");
        this.echo("\nYou have found " + hiddenLetter(hiddenCount.length + " of 6 ") + "hidden commands so far!\n");
      }
          
      if (hiddenCount.length >= 5){
        this.echo("You have found enough hidden commands! You can now use the " + hiddenLetter("complete") + " command!");
      }
        flags = [ 
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
        return flags[Math.floor(Math.random() * flags.length)];
    },

  ASCIItaka: function(){
    if (!hiddenCount.includes("ascii")){
      hiddenCount.push("ascii");
      this.echo("\nYou have found " + hiddenLetter(hiddenCount.length + " of 6 ") + "hidden commands so far!\n");
    }    
    if (hiddenCount.length >= 5){
      this.echo("You have found enough hidden commands! You can now use the " + hiddenLetter("complete") + " command!");
    }
    
    this.echo(",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n"+
    ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n" +
    ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n"+
    ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n"+
    ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,  ,,,,,,,,,. ( ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n"+
    ",,,,,,,,,,,,,,,,,,,,,,,,            (%  ,,. &%//(       .,,,,,,,,,,,,,,,,,,,,,,,\n"+
    ",,,,,,,,,,,,,.            %/////#%///////#///////////% .,,.,.,.,,,,,,,,.,,,,..,,\n"+
    ",,,,,,.,,, %,,,*,,***,,,**,*%/////////%///////%////%(//(/         ,,,,,,,,,,,,,,\n"+
    ",,,,,,,,, **#,.(,,***,(///////////////////////////////%*,*****,,,,,# .,,,,,.,,,,\n"+
    ",,,, ,,, %*#....,*****,,%///////////////////////////////%*,******,*,,..,,,,.,,,,\n"+
    ",,,,,,., /,,,.....%**%/////////////#%&///#(#////////////////%(....,*/ ,,,,,,,,,,\n"+
    ",,,, ,,,. %*,/.*...&/////////////%,,*,,*/***,%/////////////%..//..*,% .,,  ,,,,,\n"+
    ",,,,,,,,,, %*,,%..(/////////////#***********,*,%//////////////...%,% .,,,,,,,,,,\n"+
    ",,,,.,,,,,,  %**%/////////////%,*****************%(/%////#%///#**,%%  .,,,,,,,,.\n"+
    "              /%%%#///////%/%**,,**************,*@@/*,**,*,***,**#//(           \n"+
    "           %////%%//#//%%%%*//////,*************//////*,*******,,*#/////%       \n"+
    "           %////%%*,*,**,,*///////,***********,,////////,,**,*,**#///%%         \n"+
    "            #////%********..,//&&/,***********,,/&&/,...******(*%//////.        \n"+
    "               %//%*#,,**,*,..,/*.***,,*,,,***,,.//..,,*******%////%#((#        \n"+
    "               %/////(/,,,*****,*,,,*%..@@/..%,,*,,,******,,%//////%            \n"+
    " ..,,,,,,,,,,, &///#/(///%%**,**,,*,*,,,@@@.,*****,,,**&@@////.%%#(%            \n"+
    ",,,,,,,,.,,,,,,   ,. #@**&/////#///###(%#%%%%#&((@//&/////%  ..,,,..,,.,,,,,,,,,\n"+
    ",,,,,,,  .,.  ,,,, @,** @**& ,/////%@((@@////////////@(%&    %#  ,,,,,,,,,.  ,,,\n"+
    ",,,,,,,,,,,,,,,,, @**.  **@**& (///////////********@&////(,%////%% .,,,,,,,,,,,,\n"+
    ",,,,,,,,,, ,,,,, (,,*  **#%%/#*&#**************&(****#.(& %/&(%  /* .,,,,,,,,,,,\n"+
    ",,,,,,,,,,,,, ,&**,.  ***%&@  /****/,%//*///@,*,*%,**%% ,,.  ,. #,,*,,.  ,,,,,,,\n"+
    ",,,,,,,,,,,,,,,  @  ***%%%@ , &****,*&@&/@,****#*******(##(###/,,# ,,,,,,,,,,,,,\n"+
    ",,,,,,,,,,,,,,,,,,   &%%@ ,,,, (##*/@@,.(*,**,/%#%*****%,*,*(%* ,,,,,,,,,,,,,,,,\n"+
    ",,,,,,,,,,,,,,,,,,,,,. .,,,,,,,, *#(((%&@%**/%*(*//%#.  ,,,,,,,,,,,,,,,,,,,,,,,,\n"+
    ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n"+
    ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n"+
    ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,")
},

ASCIIbuck: function(){
  if (!hiddenCount.includes("ascii")){
    hiddenCount.push("ascii");
    this.echo("\nYou have found " + hiddenLetter(hiddenCount.length + " of 6 ") + "hidden commands so far!\n");
  }
      
  if (hiddenCount.length >= 5){
    this.echo("You have found enough hidden commands! You can now use the " + hiddenLetter("complete") + " command!");
  }

    this.echo(",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n"+
    ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,.,,,,,,,,,,,*,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n"+
    ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,*,,,,,,,,,\n"+
    ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,*,,,,,,,,,\n"+
    ",,,,,,,,,,,,,,,,,,,,..&#&,,,,,. ///*..,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n"+
    ",,,,,,,,,,...,,,,,,,,&##& ,,&&%%%%%%%%%%%%&#,,,,*&,,,,,,,,,,,,,,.,,,,,,,,,,,,,,,\n"+
    ",,,,,,,,,,,,,,*,,,,,&####&@&&%%%%&&&%%%%%%%%%%& ,&%&,,,,,,,,,.&##&,,,,,,,,,,,,,,\n"+
    ",,,,,,,,,,,,,,,,,,*,&&&(%%%%%%%%%%%%%%%&%%%%%%%%&.%%&,,,,,,,###%##&,,,,,,,,,,,,,\n"+
    ",,,,,,,,,,,,,,,,,, &#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%&%&@%%%#,%#&///#&.,,,,,,,,,,,,\n"+
    ",,,,,,,,,,,,,,,,.&%%%%%%%%%%%%%%%%%%%%%%%%%&%%%%%%%%%%&&&&&#&////&&(,,,,,,,,,,,,\n"+
    ",,,,,,,,,,,,,,,,,.&&%%%%%%%%%%%%%%%%%%&%%%%%%%%%%%%%%%%&#%#%//%//&#(,*,,,,,.,,,,\n"+
    ",,,,,,,,,,,,,,,,,.,&&%%%%%%%%%%%%%&%%%%%%%%%%%%%%%%%%&&####//(#//##&,,,,,..,,,,,\n"+
    ",,,,,,,,,,,,,....&(%%%%%%%&&%%%%%%%%%%%%%%%%%%%%%%%%%%%&#&&/////&#&(...,,,,,,,,,\n"+
    ",,,,,,,,,,......&%%%%%%&%%%%%%%%%%%%%&%%%%&&&&&%%%%%&%%%&%&/%//&##&,.......,,,,,\n"+
    ",,,,,,,........&%%%%%&%%%%%%%%%%%&%%%%%%&&%%%&#&%&&%&%%%&&%(/&###& ...........,,\n"+
    ",,,,..........&(%%%%&%%%%%%%%%%%%%%%%&&&%%&#####&%&&%%%%%&/%###%%%&&,...........\n"+
    ",,............&%&&%&%%%%%&&&&####(((&&(((#######&%&%%%%%%&###&%%%%%%&...........\n"+
    "................&%%&%%%%%%%######((((((((#######&&&%%%%%&#&&&&%%%%&%%&&.........\n"+
    "...............%%%%&%%%%%&# @#%@((((((((((@#######.%%%%&###&%%%%%%%%&...........\n"+
    "..............&%&%%%%%%%&%((((((((((((((#((@@@@@,  &%%&####&%%%%%%%%%%/.........\n"+
    ".................&&%%%&%###(((((((###(((((((((.    *% &######&%%%%%%%%&.........\n"+
    "..................&%%&#&%%%####%&%%%%%#####(@@.. ,@@,####%&&&&%%%%%%%%&.........\n"+
    ".................. &%&##&@%%%%%%&@%&#######@@@ .@&%%%%%%%&&&&%%%%%%%&#..........\n"+
    "..................&%%%&##//####//#########@        %%%%%%%%%%%%%%%&*............\n"+
    "..................%%%%%&&##############@@   #&&%&%%%%%%%%%%%%%%%%%%.. ..........\n"+
    " .............../#%%%%%%&   .@@@@@@@ @@    &%%%%&%%%%%%%%%%%%%%%%%%%&...........\n"+
    ".    ...  ... .###%%%%%%%%&              #&%%%%%&&%%%&%%%%%%%%%%%%%%%& . . . . .\n"+
    "    .,  . .   ##((//(##%%##%%&@       &&%&%%%&%%%%%%%%%%%%%%%%%%%&%%%%@.   .   .\n"+
    ",. ,.,,.  ..  ./%((((((#(#####%&%%%%%%%%%%&%%%%%%%%%%%%&%%%%&%%%%%&&%&          \n"+
    "..,,.,.,......&(%%%%%%%((//####%%%%%%%%%%&(%%%%%%%%%%%%&/%&%%(&%%%&#. .. .,.,...\n"+
    ".,.,,..... ../(%%%&&&#%%%%%/##%#%%%%%%%%%%&&&@%%%%%%%%&/((####/(((((#.....,.,,,.\n"+
    ",.,,............#//((&#%%%*/###%%%%%%%%%%%%%%%%%%&&%&#((/////*****(((%.....*,,,.\n"+
    ",*,..........  #//**/*/((/##(#%%%%%%%%%%%%%%%%%&#&(((##((((/*///****((#... ... .")
},
  

  ascii: function(){
      this.echo();
      this.echo(hiddenLetter("ASCII") + " ar" +hiddenLetter("t") + " is " +hiddenLetter("a") + " form of digital art that uses the characters from the ASCII character set to create images.\n" + 
    "The simplicity of ASCII art makes it accessible to anyone with a computer.\n");
    this.echo(); 
    this.echo("Despite its " +hiddenLetter("b") + "asic appearance, ASCII art has the power to evo" +hiddenLetter("k") + "e emotions and convey ide" +hiddenLetter("a") + "s through its imaginative " + hiddenLetter("u") + "se of lines and symbols.\n" +
    "Its versatility has made it popular in various forms of digital media including social media platforms instant messaging, and even email signatures.\n");  
    this.echo();
    this.echo("The " +hiddenLetter("c") + "reativity of ASCII artists never fails to impress, as they continue to find new and innovative ways to push the boundaries of what can be achieved using only ASCII.\n" +
    "Whether it's a whimsical cartoon, a " +hiddenLetter("k") + "ind portrait, or a detailed landscape, ASCII art never fails to be a source of inspiration and awe.\n");
      this.echo();
  },

  nerdy: function(){
    if (!hiddenCount.includes("nerdy")){
      hiddenCount.push("nerdy");
      this.echo("\nYou have found " + hiddenLetter(hiddenCount.length + " of 6 ") + "hidden commands so far!\n");
    }
    
    if (hiddenCount.length >= 5){
      this.echo("You have found enough hidden commands! You can now use the " + hiddenLetter("complete") + " command!");
    }

    this.echo("<3 <3 <3 <3 <3 <3")
    this.echo();
    this.echo("In binary code, the word " + commandText("love") + " is represented as " + commandText("01101100 01101111 01100101") + ". If you consider each " + commandText("1") + " to be a kiss and each " + commandText("0") + " to be a hug, you can see that the message behind " + commandText("love") + " is " + commandText("kiss-hug-kiss-kiss-hug-hug-kiss.\n") + "So in essence, every time someone says " + commandText("I love you") + " in binary code, they're actually saying " + commandText("I kiss-hug you.\n") + "\nIsn't that nerdy and romantic all at once?");
    this.echo();
    this.echo("<3 <3 <3 <3 <3 <3")
},

  about: function(){
      this.echo();
      this.echo("|  Product Name:   " + commandText('SRV OS'));
      this.echo("|  Version Number: " + hiddenLetter('2.14'));
      this.echo("|  Serial number:  " + commandText("sRtJDi3PFk7EAFKkZzWS"));
      this.echo();
      this.echo("|  History:\n" +   
      "SRV OS came about due to Skye wanting to learn more about " + hiddenLetter('nerdy') + " things and express their love for the people who inspire them every day.\n" +
      "At first, Skye was intimidated by the thought of learning something so complex, but they were determined to make something before valentines to show their love.\n" + 
      "Skye began browising forums and looking for ideas. Slowly but surely, they learned the basics of how to write simple Jquery stuff.\n" +
      "\nThey've taken great " + hiddenLetter('pride') + " in creating this, and hope that you enjoy it as much as they enjoyed making it.\n");
  },

  trophy: function(){
    if (!hiddenCount.includes("trophy")){
      hiddenCount.push("trophy");
      this.echo("\nYou have found " + hiddenLetter(hiddenCount.length + " of 6 ") + "hidden commands so far!\n");
      
      if (hiddenCount.length >= 5){
        this.echo("You have found enough hidden commands! You can now use the " + hiddenLetter("complete") + " command!");
      }

    this.echo('[[@;;;;https://images.squarespace-cdn.com/content/62418744eb964176d3b7c908/51769803-e090-4775-b1aa-6acc5d97676a/IMG_0123.PNG?content-type=image%2Fpng]]');
    this.echo('Image by @builtbyaxel on Twitter');
  }
},

  attributes: function(){
      this.echo();
      this.echo("|  " + commandText('Physical'));
      this.echo();
      this.echo("|  " + hiddenLetter('Leggy') + "                 ##[[g;#00DE12;]###############################################]    ##");
      this.echo("|  " + commandText('Catellites') + "             ##[[g;#00DE12;]###############################################]    ##");
      this.echo("|  " + commandText('Booper') + "                 ##[[g;#5BD100;]############################################]       ##");
      this.echo("|  " + commandText('Pawbs') + "                  ##[[g;#5BD100;]############################################]       ##");
      this.echo("|  " + commandText('Clawbs') + "                 ##[[g;#99D100;]#########################################]          ##");
      this.echo("|  " + commandText('Floof Duster') + "           ##[[g;#B2D100;]#######################################]            ##");
      this.echo("|  " + commandText('Alertness') + "              ##[[g;#D1B900;]############################]                       ##");
      this.echo("|  " + commandText('Mow volume') + "             ##[[g;#D16200;]###########]                                        ##");
      this.echo();
      this.echo("|  " + commandText("Skills"));
      this.echo();
      this.echo("|  " + commandText('Mental Health') + "          ##[[g;#42D100;]###############################################]    ##");
      this.echo("|  " + commandText('Cooking') + "                ##[[g;#42D100;]###############################################]    ##");
      this.echo("|  " + commandText('Hugs') + "                   ##[[g;#5BD100;]#############################################]      ##");
      this.echo("|  " + commandText('Sassiness') + "              ##[[g;#99D100;]#########################################]          ##");
      this.echo("|  " + commandText('Music Snobbery') + "         ##[[g;#B2D100;]########################################]           ##");
      this.echo("|  " + commandText('Stremches') + "              ##[[g;#D1B900;]################################]                   ##");
      this.echo("|  " + commandText('Multi-tasking') + "          ##[[g;#D1B900;]############################]                       ##");
      this.echo();
      this.echo("|  " + commandText("Romance"));
      this.echo();
      this.echo("|  " + commandText('Smoochability') + "          ##[[g;#5BD100;]############################################]       ##");
      this.echo("|  " + commandText('Butt Quality') + "           ##[[g;#B2D100;]#######################################]            ##");
      this.echo("|  " + commandText('Massage Skills') + "         ##[[g;#B2D100;]#######################################]            ##");
      this.echo("|  " + commandText('Flexibility') + "            ##[[g;#B2D100;]#####################################]              ##");
      this.echo("|  " + commandText('Body Odour') + "             ##[[g;#D13F00;]#########]                                          ##");
      this.echo();
  },

  contact: function(){
      this.echo();
      this.echo("|  " + commandText("Telegram") + ":      Removed as posted online for others.");
      this.echo("|  " + commandText("Discord") +  ":       Removed as posted online for others.");
      this.echo();
  },

  credits: function(){
      this.echo();
      this.echo("|  Site built by " + commandText('Skye Wright'));
      this.echo("|  Using " + commandText('Jquery Terminal Emulator') + " by " + commandText('Jakub Jankiewicz') + ": http://terminal.jcubic.pl");
      this.echo("|  Using " + commandText('Homepage Layout') + " by " + commandText('Ronnie Pyne') + ": https://github.com/perverse");
      this.echo();
  },

  complete: function(){
        let username = prompt("Please confirm your Telegram username without the @, this is case sensitive.");
        if (username == "ConstellationCollie") {
                window.location.href = "https://www.dropbox.com/s/f4uvqhq69pom88h/srvl-jakob-certificate.png?dl=0";
            } else if (username == "Takalion") {
                window.location.href = "https://www.dropbox.com/s/u7h3jjdeyugkpy0/srvl-taka-certificate.png?dl=0";
            } else {
                this.echo ("Good job! You've found the secret command, but you don't have the right username.");
            }
  },

  all: function(){
      this.clear();
      this.exec('motd');
      this.exec('about');
      this.exec('ascii');
      this.exec('attributes');
      this.exec('contact');
      this.exec('credits');
  },

  ls: function(){
      this.exec('menu');
  }
}

jQuery(document).ready(function($) {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      window.location.href = "https://lilpossum.xyz";
  } else {
      $('body').terminal(App, {
          greetings: function(cb){
              cb(App.motd(true));
          },

          onBlur: function() {
              // prevent loosing focus
              return false;
          },
          completion: true,
          checkArity: false
      });
  }
});
