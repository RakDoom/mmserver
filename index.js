const express =require("express");
const cors =require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/mm", (req,res) => {
   let msgs=[
  "Channel your inner warrior and code like you're in the battle of your life!",
  "Forge your code with the fire of determination and the steel of resilience.",
  "In the arena of coding, unleash your ferocity and conquer every challenge that stands in your way.",
  "Let your code roar with the intensity of a champion, leaving a legacy that echoes through the digital realms.",
  "Embrace the intensity of coding like a warrior in the heat of combat, seizing victory with every line of code.",
  "Fuel your coding journey with the hunger of a relentless warrior, hungry for mastery and unfazed by obstacles.",
  "Rise to the challenge of coding like a phoenix from the ashes, stronger and fiercer with every setback.",
  "Forge your path in coding with the unyielding determination of a warrior, carving through barriers with sheer willpower.",
  "In the coding arena, be the gladiator of innovation, fearlessly pushing the boundaries of what's possible.",
  "Unleash the beast within and code with the primal fury of a predator, hunting down bugs and conquering challenges with relentless precision."
]
 let r =parseInt(Math.random()* msgs.length);
 res.send({"msg":msgs[r]});
 res.send();
});
app.listen(9000,() => {console.log("read@9000");});