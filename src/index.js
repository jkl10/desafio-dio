let nivel = "";

let personagens = [["geuij", 1233],
 ["askei", 2323],
 ["kstus", 800],
 ["kimera", 5673],
 ["gust", 7469],
 ["cleito", 8799],
 ["mark", 9877],
 ["frost", 14033]
];

for(let linha = 0; linha < personagens.length; linha++){
    if(personagens[linha][1] < 1000){
        nivel = "Ferro";
    }else if(personagens[linha][1] > 1000 && personagens[linha][1] <= 2000){
        nivel = "Bronze";
    }else if(personagens[linha][1] > 2000 && personagens[linha][1]<= 5000){
        nivel = "Prata";
    }else if(personagens[linha][1] > 5000 && personagens[linha][1] <= 7000){
        nivel = "Ouro";
    }else if(personagens[linha][1] > 7000 && personagens[linha][1] <= 8000){
        nivel = "Platina";
    }else if(personagens[linha][1] > 8000 && personagens[linha][1] <= 9000){
        nivel = "Ascendente";
    }else if(personagens[linha][1] > 9000 && personagens[linha][1] <= 10000){
        nivel = "Imortal";
    }else {
        nivel = "Radiante";
    }

    console.log(`O heroi de nome ${personagens[linha][0]} esta no nível de ${nivel}`);
};