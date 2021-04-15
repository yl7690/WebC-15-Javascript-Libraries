let galleryElement = document.getElementById('champGallery');

let champJSON = [
  {
    "epithet": "THE LADY OF LUMINOSITY",
    "name": "Lux",
    "difficulty": ["1", "1", "0.3", "moderate"],
    "bgStory": "Luxanna Crownguard hails from Demacia, an insular realm where magical abilities are viewed with fear and suspicion. Able to bend light to her will, she grew up dreading discovery and exile, and was forced to keep her power secret, in order to preserve her family's noble status. Nonetheless, Lux's optimism and resilience have led her to embrace her unique talents, and she now covertly wields them in service of her homeland.",
    "imgUrl": "url(img/mages/lux/lux.png)",
    "bgColor": "#fdde51",
    "abiOrder": ["Passive", "Q", "W", "E", "R"],
    "abilities": [
      {
        "picUrl": "img/mages/lux/passive.png",
        "name": "ILLUMINATION",
        "description": "Lux's damaging spells charge the target with energy for 6 seconds. Lux's next attack ignites the energy, dealing bonus magic damage (depending on Lux's level) to the target."
      },
      {
        "picUrl": "img/mages/lux/Q.png",
        "name": "LIGHT BINDING",
        "description": "Lux releases a sphere of light that binds and deals damage to up to two enemy units."
      },
      {
        "picUrl": "img/mages/lux/W.png",
        "name": "PRISMATIC BARRIER",
        "description": "Lux throws her wand and bends the light around any friendly target it touches, protecting them from enemy damage."
      },
      {
        "picUrl": "img/mages/lux/E.png",
        "name": "LUCENT SINGULARITY",
        "description": "Fires an anomaly of twisted light to an area, which slows nearby enemies. Lux can detonate it to damage enemies in the area of effect."
      },
      {
        "picUrl": "img/mages/lux/R.png",
        "name": "FINAL SPARK",
        "description": "After gathering energy, Lux fires a beam of light that deals damage to all targets in the area. In addition, triggers Lux's passive ability and refreshes the Illumination debuff duration."
      }
    ]
  },
  {
  "epithet": "THE BURNING VENGEANCE",
  "name": "Brand",
  "difficulty": ["1", "1", "0.3", "moderate"],
  "bgStory": "Once a tribesman of the icy Freljord named Kegan Rodhe, the creature known as Brand is a lesson in the temptation of greater power. Seeking one of the legendary World Runes, Kegan betrayed his companions and seized it for himself—and, in an instant, the man was no more. His soul burned away, his body a vessel of living flame, Brand now roams Valoran in search of other Runes, swearing revenge for wrongs he could never possibly have suffered in a dozen mortal lifetimes.",
  "imgUrl": "url(img/mages/brand/brand.png)",
  "bgColor": "#240201",
  "abiOrder": ["Passive", "Q", "W", "E", "R"],
  "abilities": [
      {
        "picUrl": "img/mages/brand/passive.png",
        "name": "BLAZE",
        "description": "Brand's spells light his targets ablaze, dealing damage over 4 seconds, stacking up to 3 times. If Brand kills an enemy while it is ablaze he regains mana. When Blaze reaches max stacks on a Champion, siege minion, or large monster, it becomes unstable. It detonates in 2 seconds, applying spell effects and dealing massive damage in an area around the victim."
      },
      {
        "picUrl": "img/mages/brand/Q.png",
        "name": "SEAR",
        "description": "Brand launches a ball of fire forward that deals magic damage. If the target is ablaze, Sear will stun the target for 1.5 seconds."
      },
      {
        "picUrl": "img/mages/brand/W.png",
        "name": "PILLAR OF FLAME",
        "description": "After a short delay, Brand creates a Pillar of Flame at a target area, dealing magic damage to enemy units within the area. Units that are ablaze take an additional 25% damage."
      },
      {
        "picUrl": "img/mages/brand/E.png",
        "name": "CONFLAGRATION",
        "description": "Brand conjures a powerful blast at his target that spreads to nearby enemies, dealing magic damage. If the target is ablaze, Conflagration's spread is doubled."
      },
      {
        "picUrl": "img/mages/brand/R.png",
        "name": "PYROCLASM",
        "description": "Brand unleashes a devastating torrent of fire that bounces up to 5 times off of Brand and nearby enemies, dealing magic damage to enemies each time bounce. Bounces prioritize stacking Blaze to max on Champions. If a target is ablaze, Pyroclasm will briefly slow them."
      }
    ]
  },
  {
  "epithet": "THE REVERED INVENTOR",
  "name": "Heimerdinger",
  "difficulty": ["1", "1", "1", "high"],
  "bgStory": "A brilliant yet eccentric yordle scientist, Professor Cecil B. Heimerdinger is one of the most innovative and esteemed inventors Piltover has ever known. Relentless in his work to the point of neurotic obsession, he thrives on answering the universe's most impenetrable questions. Though his theories often appear opaque and esoteric, Heimerdinger has crafted some of Piltover's most miraculous—not to mention lethal—machinery, and constantly tinkers with his inventions to make them even more efficient.",
  "imgUrl": "url(img/mages/heim/heim.png)",
  "bgColor": "#a94835",
  "abiOrder": ["Passive", "Q", "W", "E", "R"],
  "abilities": [
      {
        "picUrl": "img/mages/heim/passive.png",
        "name": "HEXTECH AFFINITY",
        "description": "Gain Movement Speed while near allied towers and turrets deployed by Heimerdinger."
      },
      {
        "picUrl": "img/mages/heim/Q.png",
        "name": "H-28 G EVOLUTION TURRET",
        "description": "Heimerdinger lays down a rapid-fire cannon turret equipped with a secondary pass-through beam attack (turrets deal half damage to towers)."
      },
      {
        "picUrl": "img/mages/heim/W.png",
        "name": "HEXTECH MICRO-ROCKETS",
        "description": "Heimerdinger fires long-range rockets that converge on his cursor."
      },
      {
        "picUrl": "img/mages/heim/E.png",
        "name": "CH-2 ELECTRON STORM GRENADE",
        "description": "Heimerdinger lobs a grenade at a location, dealing damage to enemy units, as well as stunning anyone directly hit and slowing surrounding units."
      },
      {
        "picUrl": "img/mages/heim/R.png",
        "name": "UPGRADE!!!",
        "description": "Heimerdinger invents an upgrade, causing his next spell to have increased effects."
      }
    ]
  },
  {
  "epithet": "THE GREAT STEAM GOLEM",
  "name": "Blitzcrank",
  "difficulty": ["1", "1", "0.3", "moderate"],
  "bgStory": "Blitzcrank is an enormous, near-indestructible automaton from Zaun, originally built to dispose of hazardous waste. However, he found this primary purpose too restricting, and modified his own form to better serve the fragile people of the Sump. Blitzcrank selflessly uses his strength and durability to protect others, extending a helpful metal fist or burst of energy to subdue any troublemakers.",
  "imgUrl": "url(img/tanks/blitz/blitz.png)",
  "bgColor": "#462b94",
  "abiOrder": ["Passive", "Q", "W", "E", "R"],
  "abilities": [
      {
        "picUrl": "img/tanks/blitz/passive.png",
        "name": "MANA BARRIER",
        "description": "Blitzcrank gains a shield based on his mana when dropping to low health."
      },
      {
        "picUrl": "img/tanks/blitz/Q.png",
        "name": "ROCKET GRAB",
        "description": "Blitzcrank fires his right hand to grab an opponent on its path, dealing damage and dragging it back to him."
      },
      {
        "picUrl": "img/tanks/blitz/W.png",
        "name": "OVERDRIVE",
        "description": "Blitzcrank super charges himself to get dramatically increased Movement and Attack Speed. He is temporarily slowed after the effect ends."
      },
      {
        "picUrl": "img/tanks/blitz/E.png",
        "name": "POWER FIST",
        "description": "Blitzcrank charges up his fist to make his next attack deal double damage and pop his target up in the air."
      },
      {
        "picUrl": "img/tanks/blitz/R.png",
        "name": "STATIC FIELD",
        "description": "Enemies attacked by Blitzcrank are marked and take lightning damage after 1 second. Additionally, Blitzcrank can activate this ability to remove nearby enemies' shields, damage them, and silence them briefly."
      }
    ]
  },
  {
  "epithet": "THE TERROR OF THE VOID",
  "name": "Gho'Gath",
  "difficulty": ["1", "1", "0.3", "moderate"],
  "bgStory": "From the moment Cho'Gath first emerged into the harsh light of Runeterra's sun, the beast was driven by the most pure and insatiable hunger. A perfect expression of the Void's desire to consume all life, Cho'Gath's complex biology quickly converts matter into new bodily growth—increasing its muscle mass and density, or hardening its outer carapace like organic diamond. When growing larger does not suit the Void-spawn's needs, it vomits out the excess material as razor-sharp spines, leaving prey skewered and ready to feast upon later.",
  "imgUrl": "url(img/tanks/gho/gho.png)",
  "bgColor": "#5a8389",
  "abiOrder": ["Passive", "Q", "W", "E", "R"],
  "abilities": [
      {
        "picUrl": "img/tanks/gho/passive.png",
        "name": "CARNIVORE",
        "description": "Whenever Cho'Gath kills a unit, he recovers Health and Mana. The values restored increase with Cho'Gath's level."
      },
      {
        "picUrl": "img/tanks/gho/Q.png",
        "name": "RUPTURE",
        "description": "Ruptures the ground at target location, popping enemy units into the air, dealing damage and slowing them."
      },
      {
        "picUrl": "img/tanks/gho/W.png",
        "name": "FERAL SCREAM",
        "description": "Cho'Gath unleashes a terrible scream at enemies in a cone, dealing magic damage and Silencing enemies for a few seconds."
      },
      {
        "picUrl": "img/tanks/gho/E.png",
        "name": "VORPAL SPIKES",
        "description": "Cho'Gath's attacks release deadly spikes, dealing damage and slowing all enemy units in front of him."
      },
      {
        "picUrl": "img/tanks/gho/R.png",
        "name": "FEAST",
        "description": "Devours an enemy unit, dealing a high amount of true damage. If the target is killed, Cho'Gath grows, gaining maximum Health."
      }
    ]
  },
  {
  "epithet": "THE TITAN OF THE DEPTHS",
  "name": "Nautilus",
  "difficulty": ["1", "1", "0.3", "moderate"],
  "bgStory": "A lonely legend as old as the first piers sunk in Bilgewater, the armored goliath known as Nautilus roams the dark waters off the coast of the Blue Flame Isles. Driven by a forgotten betrayal, he strikes without warning, swinging his enormous anchor to save the wretched, and drag the greedy to their doom. It is said he comes for those who forget to pay the “Bilgewater tithe”, pulling them down beneath the waves with him—an iron-clad reminder that none can escape the depths.",
  "imgUrl": "url(img/tanks/naut/naut.png)",
  "bgColor": "#242c1d",
  "abiOrder": ["Passive", "Q", "W", "E", "R"],
  "abilities": [
      {
        "picUrl": "img/tanks/naut/passive.png",
        "name": "STAGGERING BLOW",
        "description": "Nautilus' first Attack against a target deals increased physical damage and roots them briefly."
      },
      {
        "picUrl": "img/tanks/naut/Q.png",
        "name": "DREDGE LINE",
        "description": "Nautilus hurls his anchor forward. Colliding with an enemy pulls them and Nautilus together, dealing magic damage. Colliding with terrain pulls Nautilus towards it."
      },
      {
        "picUrl": "img/tanks/naut/W.png",
        "name": "TITAN'S WRATH",
        "description": "Nautilus gains a temporary Shield. While it persists, his Attacks deal damage over time to his target and surrounding enemies."
      },
      {
        "picUrl": "img/tanks/naut/E.png",
        "name": "RIPTIDE",
        "description": "Nautilus creates three exploding waves around himself. Each explosion damages and slows enemies."
      },
      {
        "picUrl": "img/tanks/naut/R.png",
        "name": "DEPTH CHARGE",
        "description": "Nautilus fires a shockwave into the earth that chases an opponent. This shockwave rips up the earth above it, knocking enemies into the air. When it reaches the opponent, the shockwave erupts, knocking his target into the air and stunning them."
      }
    ]
  }
];

for (let i = 0; i < champJSON.length; i++) {
  createSection(champJSON[i]);
}

AOS.init();

function createSection(incomingJSON) {

  let newSection = document.createElement("DIV");
  newSection.style.backgroundColor = incomingJSON['bgColor'];
  newSection.style.backgroundImage = incomingJSON['imgUrl'];
  newSection.classList.add('sectionContainer');

  let textDiv = document.createElement("DIV");
  textDiv.classList.add('textContainer');
  newSection.appendChild(textDiv);

  let newH3 = document.createElement("h3");
  newH3.innerText = incomingJSON['epithet'];
  newH3.classList.add('epithet');
  newH3.setAttribute("data-aos", "fade-right");
  textDiv.appendChild(newH3);

  let newH2 = document.createElement("h2");
  newH2.innerText = incomingJSON['name'];
  newH2.classList.add('name');
  newH2.setAttribute("data-aos", "zoom-in");
  textDiv.appendChild(newH2);

  let newStoryDiv = document.createElement("DIV");
  newStoryDiv.classList.add('storyContainer');
  textDiv.appendChild(newStoryDiv);

  let newStoryTitle = document.createElement("P");
  newStoryTitle.innerText = "Background Story: ";
  newStoryTitle.classList.add('subTitles');
  newStoryTitle.setAttribute("data-aos", "zoom-in-right");
  newStoryDiv.appendChild(newStoryTitle);

  let newBgStory = document.createElement("P");
  newBgStory.innerText = incomingJSON['bgStory'];
  newBgStory.setAttribute("data-aos", "zoom-in-right");
  newBgStory.classList.add('bgStory');
  newStoryDiv.appendChild(newBgStory);

  let newDiffLvl = document.createElement("DIV");
  newDiffLvl.classList.add('difficulty');
  newDiffLvl.setAttribute("data-aos", "zoom-out");
  textDiv.appendChild(newDiffLvl);

  let newDiffTitle = document.createElement("P");
  newDiffTitle.innerText = "Difficulty: ";
  newDiffTitle.classList.add('subTitles');
  newDiffLvl.appendChild(newDiffTitle);

  let newSquareDiv = document.createElement("DIV");
  newSquareDiv.classList.add('squareContainer');
  newDiffLvl.appendChild(newSquareDiv);

  for (let i=0; i<3; i++) {
    let newSquare = document.createElement("DIV");
    newSquare.style.opacity = incomingJSON['difficulty'][i];
    newSquare.classList.add('squares');
    newSquareDiv.appendChild(newSquare);
  }

  let newDiffText = document.createElement("P");
  newDiffText.innerText = incomingJSON['difficulty'][3];
  newDiffText.classList.add("diffText");
  newDiffLvl.appendChild(newDiffText);

  let newAbiContent = document.createElement("DIV");
  newAbiContent.classList.add('abilitySection');
  newSection.appendChild(newAbiContent);

// console.log(incomingJSON['abilities']);

  for (let i=0; i<5; i++) {
    let newAbiDiv = document.createElement("DIV");
    newAbiDiv.classList.add('abilityContainer');
    newAbiDiv.setAttribute("data-aos", "fade-down");
    newAbiDiv.setAttribute("data-aos-duration", "1500");
    newAbiDiv.setAttribute("data-aos-anchor-placement", "bottom-bottom");

    let order = 200 * i;

    newAbiDiv.setAttribute("data-aos-delay", order);
    newAbiContent.appendChild(newAbiDiv);

    let newAbiLeft = document.createElement("DIV");
    newAbiDiv.appendChild(newAbiLeft);

    let newAbiImg = document.createElement("IMG");
    newAbiImg.classList.add('abilityImage');
    newAbiImg.src = incomingJSON['abilities'][i]['picUrl'];
    newAbiLeft.appendChild(newAbiImg);

    let newAbiOrder = document.createElement("P");
    newAbiOrder.classList.add('abilityName');
    newAbiOrder.innerText = incomingJSON['abiOrder'][i];
    newAbiLeft.appendChild(newAbiOrder);

    let newAbiTextDiv = document.createElement("DIV");
    newAbiTextDiv.classList.add('abilityTextContainer');
    newAbiDiv.appendChild(newAbiTextDiv);

    let newAbiName = document.createElement("P");
    newAbiName.classList.add('abilityName');
    newAbiName.innerText = incomingJSON['abilities'][i]['name'];
    newAbiTextDiv.appendChild(newAbiName);

    let newAbiInfo = document.createElement("P");
    newAbiInfo.classList.add('abilityDetail');
    newAbiInfo.innerText = incomingJSON['abilities'][i]['description'];
    newAbiTextDiv.appendChild(newAbiInfo);
  }

  var rellax = new Rellax('.rellax');

  galleryElement.appendChild(newSection);
}
