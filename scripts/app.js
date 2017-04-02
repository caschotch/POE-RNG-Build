var poeClass = [
  {
    class: "Witch",
    ascendancy: "Necromancer",
    images: "images/witch-necromancer.png"
  },
  {
    class: "Witch",
    ascendancy: "Occultist",
    images: "images/witch-occultist.png"
  },
  {
    class: "Witch",
    ascendancy: "Elementalist",
    images: "images/witch-elementalist.png"
  },
  {
    class: "Duelist",
    ascendancy: "Champion",
    images: "images/duel-champion.png"
  },
  {
    class: "Duelist",
    ascendancy: "Gladiator",
    images: "images/duel-gladiator.png"
  },
  {
    class: "Duelist",
    ascendancy: "Slayer",
    images: "images/duel-slayer.png"
  },
  {
    class: "Marauder",
    ascendancy: "Berserker",
    images: "images/mar-berserker.png"
  },
  {
    class: "Marauder",
    ascendancy: "Chieftain",
    images: "images/mar-chieftain.png"
  },
  {
    class: "Marauder",
    ascendancy: "Juggernaut",
    images: "images/mar-juggernaut.png"
  },
  {
    class: "Ranger",
    ascendancy: "Deadeye",
    images: "images/ranger-deadeye.png"
  },
  {
    class: "Ranger",
    ascendancy: "Pathfinder",
    images: "images/ranger-pathfinder.png"
  },
  {
    class: "Ranger",
    ascendancy: "Raider",
    images: "images/ranger-raider.png"
  },
  {
    class: "Shadow",
    ascendancy: "Assassin",
    images: "images/shad-assasin.png"
  },
  {
    class: "Shadow",
    ascendancy: "Saboteur",
    images: "images/shadow-saboteur.png"
  },
  {
    class: "Shadow",
    ascendancy: "Trickster",
    images: "images/shadow-trickster.png"
  },
  {
    class: "Templar",
    ascendancy: "Guardian",
    images: "images/temp-guardian.png"
  },
  {
    class: "Templar",
    ascendancy: "Hierophant",
    images: "images/temp-hierophant.png"
  },
  {
    class: "Templar",
    ascendancy: "Inquisitor",
    images: "images/temp-inquisitor.png"
  },
  {
    class: "Scion",
    ascendancy: "Ascendant",
    images: "images/scion-ascendant.png"
  }
];

function randomGen(array) {
  var num = Math.floor(Math.random() * array.length);
  return array[num];
}


var poeGen = document.getElementById('rollClass');

poeGen.addEventListener('click', function(e) {
  var selection = randomGen(poeClass);
  document.getElementById('className').innerHTML = selection.class;
  document.getElementById('classImage').innerHTML = "<img src='" + selection.images + "'>";
  document.getElementById('classAscendancy').innerHTML = selection.ascendancy;
});
