const randomTopics = ["Aallonmurtaja", "Arvuuttaja", "Asiakas", "Bakkanaali", "Balanssi", "Bändi", "Catering", "Charmi", "Data", "Dekoltee", "Delirium", "Edeskäypä", "Edistys", "Eetteri", "Elintaso", "Faabeli", "Floora", "Generaattori", "Hankikanto", "Hilavitkutin", "Huoma", "Huussi", "Jättikuukunen", "Kieku", "Liitu", "Limanuljaska", "Luomakunta", "Merenkulku", "Muna", "Napero", "Neilikka", "Ohdake", "Oheisilmiö", "Ojitus", "Oikeusvaltio", "Palko", "Piennar", "Pieru", "Piilo", "Piippu", "Peuhu", "Pohatta", "Pula", "Radikaali", "Rahkasammal", "Riimu", "Tietyö", "Uhma", "Uhrilehto", "Vedenjakaja", "Vilinä", "Yhteiskuntasopimus", "Uhkuavanto", "Zeppeliini", "Äkkinykäisy", "Älkööt", "Öky" ];

const getRandomNumber = (max) => Math.floor(Math.random() * max);

const getRandomTopic = () => `${randomTopics[getRandomNumber(randomTopics.length)]}`;

const setRandomTopic = () => {
    
    document.getElementById('random-topic').innerText = getRandomTopic();
}

document.getElementById('generate').addEventListener('click', setRandomTopic); 

setRandomTopic();
