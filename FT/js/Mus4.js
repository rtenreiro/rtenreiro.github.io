var suit = ['o', 'c', 'e', 'b'];
var rank = ['1', '2', '3', '4', '5', '6', '7', 's', 'c', 'r'];
var deck = new Array(40);
var deckGet= new Array();
var ptr = 0;

var lance="Play";
if (Math.floor(Math.random())<1){var mano="Jugador";}else{var mano="Mesa";}

var dealer_cards = new Array(4);
var player_cards = new Array(4);

var dealer_c = "";
var player_c = "";
		
var player_score = 0;
var dealer_score = 0;

var juego_player = 0;
var juego_dealer = 0; 

var pares_player = [];
var pares_dealer = [];

var p_player = "";
var p_dealer = "";


var name_player = "";
var name_dealer = "";

var sena_player="Sin seña";

var grandePlay =0;
var chicaPlay =0;
var paresPlay =0;
var juegoPlay =0;
var puntoPlay =0;

/*CREATE DECK * ========================================================== */

for (var i = 0; i < rank.length; ++i){
    for (var j = 0; j < suit.length; ++j){
        deck[i*suit.length + j] =  rank[i] + suit[j];
}}

function shuffle(){
    for (var i = 0; i < deck.length; ++i){
        var r = i + Math.floor(Math.random() * (40 - i));
        var temp = deck[i];
        deck[i] = deck[r];
        deck[r] = temp;
    }
    playSound("shuffle");
}

shuffle();

/* DICTIONARIES * ========================================================== */

var scoreRanks = new Array();
scoreRanks['1'] = 1;
scoreRanks['2'] = 1;
scoreRanks['3'] = 10;
scoreRanks['4'] = 4;
scoreRanks['5'] = 5;
scoreRanks['6'] = 6;
scoreRanks['7'] = 7;
scoreRanks['s'] = 10;
scoreRanks['c'] = 10;
scoreRanks['r'] = 10;

var nameBet = new Array(7);
nameBet['0'] = 'Nulo';
nameBet['1'] = 'No visto'; 
nameBet['2'] = 'En Paso';
nameBet['3'] = 'Envidada Mesa';
nameBet['4'] = 'Envidada Jugador';
nameBet['5'] = 'Envidada 5 por el Jugador';
nameBet['6'] = 'Liquidada';
nameBet['7'] = 'Ordago';

function nombreBaza(pla){
	var c = pla;
	if (c == "8,8,8,8"){name_p="Piara o el equipo A";}
    else if (c == "8,8,8,1"){ name_p="Solomillo o la bonita";}
	else if (c == "8,8,1,1"){ name_p="Duplex Gallegos";}
    else if (c == "8,8,6,6"){ name_p="Duplex Vascos o Duplex Andaluces o Cojonudos";}
	else if (c == "8,8,7,7"){ name_p="Duplex Castellanos";}
    else if (c == "8,5,5,5"){ name_p="La Real gana a mano";}
	else if (c == "5,4,3,2"){ name_p="Tio Perete";}
    else if (c == "8,1,1,1"){ name_p="Besugo";}
	else if (c == "8,8,7,6"){ name_p="Ley de Mus";}
    else if (c == "8,7,2,1"){ name_p="Equidistante o la del tonto, o del tio Paco";}
	else if (c == "2,2,2,2"){ name_p="Jugada del Sastre";}
    else if (c == "8,7,7,7"){ name_p="El Banco de Bilbao";}
	else if (c == "8,7,1,1"){ name_p="La de Benito o Ladrona";}
    else if (c == "7,7,7,6"){ name_p="El Vitor";}
	else if (c == "6,6,6,1"){ name_p="Cordobeses";}
    else if (c == "7,6,5,2"){ name_p="Juego Jesusiano";}
	else if (c == "8,7,7,6"){ name_p="No era esa la que queria";}
    else if (c == "8,6,6,6"){ name_p="Soterio";}
	else if (c == "8,8,6,1"){ name_p="La una con un par de guarros";}
    else if (c == "8,8,7,1"){ name_p="La una con un par de guarros";}
	else if (c == "8,7,6,1"){ name_p="Una sin pares, con gato incluido";}
    else if (c == "7,5,4,1"){ name_p="Mierdecilla";}
	else if (c == "7,5,3,1"){ name_p="Mierdecilla";}
    else if (c == "7,5,2,1"){ name_p="Mierdecilla";}
	else if (c == "7,4,3,1"){ name_p="Mierdecilla";}
	else if (c == "7,4,2,1"){ name_p="Mierdecilla";}
    else if (c == "7,5,2,1"){ name_p="Mierdecilla";} 
	else {name_p="sin nombre especial"}
	return name_p; 	
}

function senaBaza(){
	var c = pares_player;
	var c2= juego_player;
	var c3= name_p;
	if (c[0] == "1" && c[1] == "8"){sena_player="morderse el labio inferior";}
    if (c[0] == "1" && c[1]== "1"){sena_player="sacar la lengua por el centro";}
	if (c[0] == "2" && c[1]== "8"){sena_player="morderse lateralmente el labio inferior";}
	if (c[0] == "2" && c[1]== "1"){sena_player="sacar la lengua por el lado";}
	if (c[0] == "3"){sena_player="levantar cejas";}
	if (c2==31){sena_player="guiñar el ojo";}
	if (c2==30){sena_player="levantar los hombros";}
	if (c2==29){sena_player="levantar hombro izquierdo";}
	if (c2<31 && c[0]=="0"){sena_player="Ciego: cerrar los ojos";}
	if (c3 == "Solomillo o la bonita"){sena_player="boca como para besar";}
	if (c3 == "La Real gana a mano"){sena_player="tocarse lobulo oreja";}	
	return sena_player; 	
}

var nameCard = ['error',' Pitos',' Cuatros',' Cincos',' Seises',' Sietes',' Sotas',' Caballos',' Reyes']; 

displayOver('game_over', '¡Pulse JUGAR para comenzar!');


/*SOUNDS AND IMAGES * ========================================================== */

var audioSupported = !!document.createElement('audio').play;
function playSound(sId){
    if (document.getElementById("play_sounds").checked)
        if (audioSupported) {
            var sound = document.getElementById(sId);
            if (sound.currentTime != 0) {
                sound.pause();
                sound.currentTime = 0;
            }
            sound.play();
            }
} 
function stopSound(sId){
    if (document.getElementById("play_sounds").checked)
        if (audioSupported) {
            var sd = document.getElementById(sId);
                sd.pause();
                sd.currentTime = 0;
            }
} 

var imgs = new Array(40);

function preloadImages(){
    for (var i = 0; i < deck.length; ++i){
        imgs[i] = new Image();
        imgs[i].src ="images/40/" + deck[i] + ".png";
 }}

/*HANDLERS- BUTTONS * ========================================================== */

var B1  = document.getElementById("B1");
B1.innerHTML = "Jugar";
B1.disabled = false;
B1.style.visibility = "visible";
B1.onclick = function(){ button1();};
var B2  = document.getElementById("B2");
B2.onclick = function(){ button2();};
var B3  = document.getElementById("B3");
B3.onclick = function(){ button3();};
var B4  = document.getElementById("B4");
B4.onclick = function(){ button4();};
var B5  = document.getElementById("B5");
B5.onclick = function(){ button5();};
document.getElementById("B6").disabled =false;
document.getElementById("B6").style.visibility="visible";
document.getElementById("B7").disabled =false;
document.getElementById("B7").style.visibility="visible";

function button1(){
   if (lance=="Play"){play();}
   else if (lance=="Mus"){descarte();}
   /* Ordago * ========================================================== */
   else if(lance=="Grande"){grandeO();}	
   else if (lance=="Chica"){chicaO();}
   else if (lance=="Pares"){paresO();}
   else if (lance=="Juego"){juegoO();}
   else if (lance=="Punto"){puntoO();}	
   else if (lance=="Resu"){resultado();}
   else if (lance=="Nuevo"){nuevoGame();}	
}

function button2(){
   if (lance=="Cartas"){mus();}
   /* No quiero * ========================================================== */
   else if (lance=="Grande"){grandeN();}
   else if (lance=="Chica"){chicaN();}
   else if (lance=="Pares"){paresN();}	
   else if (lance=="Juego"){juegoN();}
   else if (lance=="Punto"){puntoN();}				
}

function button3(){
	if (lance=="Cartas") {cortar();}
    /* Paso * ========================================================== */
	else if (lance=="Grande"){grandeP();}
	else if (lance=="Chica"){chicaP();}
	else if (lance=="Pares"){paresP();}	
	else if (lance=="Juego"){juegoP();}
	else if (lance=="Punto"){puntoP();}		
					
}
function button4(){
    /* Envido * ========================================================== */
	if (lance=="Grande"){grandeE();}
	else if (lance=="Chica"){chicaE();}	
	else if (lance=="Pares"){paresE();}	
	else if (lance=="Juego"){juegoE();}
	 else if (lance=="Punto"){puntoE();}	
				
}
function button5(){
     /* Cinco mas * ========================================================== */
	if (lance=="Grande"){grandeC();}
	else if (lance=="Chica"){chicaC();}
	else if (lance=="Pares"){paresC();}	
	else if (lance=="Juego"){juegoC();}
	else if (lance=="Punto"){puntoC();}	
}
function buttonH1(B){
        B.disabled = true;
		B.style.visibility = "hidden";
}

function buttonH2(B,C){
        B.disabled = true;
		B.style.visibility = "hidden";
		C.disabled = true;
		C.style.visibility = "hidden";
}

function buttonH5(B,C,D,E,F){
        B.disabled = true;
		B.style.visibility = "hidden";
		C.disabled = true;
		C.style.visibility = "hidden";
		D.disabled = true;
		D.style.visibility = "hidden";
		E.disabled = true;
		E.style.visibility = "hidden";
		F.disabled = true;
		F.style.visibility = "hidden";
}

function buttonVisi(messa,B){
         B.innerHTML = messa;
		 B.disabled = false;
		 B.style.visibility = "visible";
}	

function buttonV4(){
		 var B=document.getElementById("D1");
		 B.disabled = false;
		 B.style.visibility = "visible";
		 var C=document.getElementById("D2");
		 C.disabled = false;
		 C.style.visibility = "visible";
		 var D=document.getElementById("D3");
		 D.disabled = false;
		 D.style.visibility = "visible";
		 var E=document.getElementById("D4");
		 E.disabled = false;
		 E.style.visibility = "visible";
}	
function pesarCartas(){
	    /* JUEGO * ========================================================== */
		juego_player = scoreCards(player_cards);
		juego_dealer = scoreCards(dealer_cards);
		displayOver('player_over', juego_player + ' a juego');
		updateScore('dealer_score7', ' Mesa a Juego: '+ juego_dealer);
        /* CARTAS * ========================================================== */	
		player_c=verCartas(player_cards);
		dealer_c=verCartas(dealer_cards);
         baz = []
                for (var i = 0; i < 4; ++i){
				   d = player_c[i];
				   if (d === 8){baz.push("Rey")}			 
			       if (d === 7){baz.push("Caballo")}
				   if (d === 6){baz.push("Sota")}
				   if (d === 5){baz.push(7)}
				   if (d === 4){baz.push(6)}
				   if (d === 3){baz.push(5)}
				   if (d === 2){baz.push(4)}
				   if (d === 1){baz.push("Pito")}				   
			}
		/*BAZAS * ========================================================== */
		name_player=nombreBaza(player_c);
		name_dealer=nombreBaza(dealer_c);		
		displayOver('player_over2', '( ' + baz[0] + ' - ' + baz[1] + ' - ' + baz[2]+ ' - ' + baz[3] +' ) : ' + name_player);
		updateScore('dealer_score7', ' Cartas: '+ name_dealer);
		/*PARES  * ========================================================== */
		pares_player =hayPares(player_c);
		pares_dealer =hayPares(dealer_c);	
		/*NOMBRE A PARES * ========================================================== */
		p_player=nomPares(pares_player);
		p_dealer=nomPares(pares_dealer);	
		displayOver('player_over3', p_player);
		/* SEÑAS * ========================================================== */
		sena_player = senaBaza();
		displayOver('player_over5','Seña - '+ sena_player);
}

function valorCartas(){
	    var a1="";
		if (juego_player==31){ if (pares_player[0]=="2"){a1=" 31 y Medias ¡Jugadon! ¡CORTAR!";} else if (mano="Jugador"){ a1="¡31 y Mano!    ¡CORTAR! ";} else {a3="31 sin Mano cortaría";}        }
		if (juego_player==40){ if (pares_player[0]=="3") {a1="Duplex y 40. ¡Jugadon! ¡CORTAR!";} else{a3="40 mus!";}
        if (juego_player>31 && pares_player[0]=="3") {a1="Juego con Duplex. ¡Cortar!";}}
		if (juego_player>31 && juego_player< 40){ if (mano="Jugador"){ a1="Juego y Mano pensar!";}else{a3="Juego sin Mano ";}}
		if (juego_player==30){ if (mano="Jugador"){ a1="30 Punto y Mano ";}else{a3="30 Punto sin Mano MUS";}}
		if (juego_player>31 && pares_player[0]=="1") {a1="Juego con Pares. ¡Podemos Cortar!";}
		if (juego_player>31 && pares_player[0]=="2") {a1="Juego con Medias. ¡Cortar!";}
		if (juego_player<31 && pares_player[0]=="2") {a1="Medias. ¡Cortar!";}
		if (juego_player>31 && pares_player[0]=="3") {a1="Juego con Duplex. ¡Cortar!";}
		if (juego_player<31 && pares_player[0]=="2") {a1="Duplex. ¡Cortar!";}
		if (juego_player<31 && pares_player[0]!="0") {a1="Sin juego con Pares";}
		if (juego_player<31 && pares_player[0]=="0"){a1="Sin juego y sin Pares. ¡ROGAR MUS!";}
		displayOver('player_over4', a1);
}

function scoreCards(cards){
    var score = 0;
    for (var i = 0; i < 4; ++i){
        var card = cards[i];
        if (card != ""){
            var card_val = scoreRanks[card.charAt(0)];
            score += card_val;
        }}
    return score;
}

function hayPares(car){
	var r=0;
	var p=0;
	para=[];	
	for (var i = 0; i < 4; ++i){
		var d = car[i];	
		if (d === r ){ para.push(d); p++;}else {r=d;}}
	para.reverse();
	if (para[0] != para[1] && para[1]>"0"){p++;}				 
	para.push(p);
	para.reverse()
	return para;
}

function nomPares(para){
   var r="No hay Pares";
   var r1= ".";
   var p=para[0];
   if (p===1) {
	   r="Hay Pares de ";} 
   else if (p===2){r="Medias de ";}
   else if (p==0) {r="No hay Pares"} 
   else {r="Duplex de "}
   
   if (para[2]>0){ if (para[1]!== para[2]){r="Duplex de "; r1=nameCard[para[1]] + nameCard[para[2]];}else {r1=nameCard[para[1]]}}
   else if (para[1]>0){r1 = nameCard[para[1]];}
   var nom= r+r1;	   
	return nom;      				 
	
}
	
function compareNumbers(a,b){
	return a-b;	
}

function verCartas(arra) {
			var d =0;
			result=[]
			RES="";
    		for (var i = 0; i < 4; ++i){
				d = arra[i].charAt(0);
        	    if (d !== ""){
				   if (d === "r" || d === "3" ){result.push(8);}			 
			       if (d === "c"){result.push(7)}
				   if (d === "s"){result.push(6)}
				   if (d === "7"){result.push(5)}
				   if (d === "6"){result.push(4)}
				   if (d === "5"){result.push(3)}
				   if (d === "4"){result.push(2)}
				   if (d === "1" || d == "2" ){result.push(1)}}				   
			}
			result.sort(compareNumbers);
			result.reverse();
			return result;
}	


/* LANCE GRANDE  * ========================================================== */
function grandeO(){	
		if (dealer_c[2]==8){
			displayOver('game_over', '¡MESA ACEPTA EL ORDAGO!');
			displayOver('game_over2', '¡ORDAGO A GRANDE!');
			if (player_c >dealer_c){
				player_score = 35;
				playSound("win");
				displayOver('game_over', '¡Gana Jugador!');
				updateScore('dealer_score2', ' RESULTADO ORDAGO:¡Gano Jugador!' );
			} else {
				dealer_score = 35;
				playSound("lose");
				displayOver('game_over', '¡Gana MESA!');
				updateScore('dealer_score2', ' RESULTADO ORDAGO:¡Gano MESA!' );}
			updateScore('player_score', + player_score + ' Tantos');
			updateScore('dealer_score', + dealer_score + ' Tantos');
			lance="Nuevo";
			buttonH5(B1,B2,B3,B4,B5); 
			buttonVisi("¡NUEVO JUEGO!",B1);}	
		else {
			displayOver('game_over', '¡MESA NO VA!');
            grandePlay=1;	
			player_score +=1;
			playSound("card_drop");
			displayOver('game_over2', '¡JUGADOR GANA POR QUE NO!');
			playSound("win");
			updateScore('player_score', + player_score + ' Tantos');
			buttonH5(B1,B2,B3,B4,B5); 
			playSound("card_drop");
			grandes();
			}			
}

function grandeN(){	 
		dealer_score +=1;
		grandePlay=1;
		updateScore('dealer_score', + dealer_score + ' Tantos');
		playSound("card_drop");
		displayOver('game_over', '¡MESA GANA POR QUE NO!');
		updateScore('dealer_score3', ' GRANDE: ¡Gano Mesa Por que No!' );
		playSound("lose");
		grandes();
}

function grandeP(){		 
		grandePlay=2;
		displayOver('game_over', '¡GRANDE EN PASE!');
        updateScore('dealer_score3', 'GRANDE en pase.' );
		playSound("card_drop");
		grandes();
}

function grandeE(){	 
		if (grandePlay==3) {grandePlay=3} else {grandePlay=4}
		displayOver('game_over', '¡ENVITE A GRANDE!');
        updateScore('dealer_score3', 'GRANDE: envidada.' );
		playSound("card_drop");
		grandes();
}

function grandeC(){	 
		if (dealer_c[2]==8){
			displayOver('game_over', '¡MESA ACEPTA EL ENVITE!');
            updateScore('dealer_score3', ' GRANDE: mesa acepta envite 5' );
			grandePlay=5;}
		else {
		displayOver('game_over', '¡MESA NO VA!');	
		player_score +=1;
		grandePlay=1;
		playSound("card_drop");
		displayOver('game_over2', '¡JUGADOR GANA PORQUE NO!');
        updateScore('dealer_score3', ' GRANDE: Mesa no acepta, jugador gana porque no!' );
		playSound("win");		
		updateScore('player_score', + player_score + ' Tantos');
		updateScore('dealer_score', + dealer_score + ' Tantos');
		}
		grandes();
}
function grandes(){
	buttonH5(B1,B2,B3,B4,B5);
	playSound("card_drop");					
	lance='Chica';
	if (dealer_c[2]==1){
		chicaPlay=3;
		displayOver('game_over', '¡MESA ENVIDA A LA CHICA!');
		buttonVisi("¡ORDAGO A LA CHICA!",B1);
		buttonVisi("No quiero",B2);  
		buttonVisi("Veo Envite a Chica",B4);
		buttonVisi("Subo a 5 La Chica",B5); 
   }
	else {	
		displayOver('game_over', 'JUGADOR HABLA DE CHICA');		
		buttonVisi("¡ORDAGO A CHICA!",B1);
		buttonVisi("Paso a Chica",B3);  
		buttonVisi("Envido a Chica",B4);
		buttonVisi("Envido 5 a Chica",B5);
	}
}
/* LANCE CHICA  * ========================================================== */
function chicaO(){
		
		if (dealer_c[2]==1){
			displayOver('game_over', '¡MESA ACEPTA EL ORDAGO!');
			displayOver('game_over2', '¡ORDAGO A CHICA!');
			if (player_c < dealer_c){
				player_score = 35;
				playSound("win");
				displayOver('game_over', '¡Gana Jugador!');
				updateScore('dealer_score2', ' RESULTADO ORDAGO:¡Gano Jugador!' );
			} else {
				dealer_score = 35;
				playSound("lose");
				displayOver('game_over', '¡Gana MESA!');
				updateScore('dealer_score2', ' RESULTADO ORDAGO:¡Gano MESA!' );}
			updateScore('player_score', + player_score + ' Tantos');
			updateScore('dealer_score', + dealer_score + ' Tantos');
			lance="Nuevo";
			buttonH5(B1,B2,B3,B4,B5); 
			buttonVisi("¡NUEVO JUEGO!",B1);}	
		else {
			displayOver('game_over', '¡MESA NO VA!');	
			player_score +=1;;
			chicaPlay=1;
			playSound("card_drop");
			displayOver('game_over2', '¡JUGADOR GANA POR QUE NO!');
			updateScore('dealer_score4', ' CHICA: ¡Gano jugador Por que No!' );
			playSound("win");
			updateScore('player_score', + player_score + ' Tantos');
			playSound("card_drop");
            chicas();

			}		
		
}

function chicaN(){	 
		dealer_score +=1;
		chicaPlay=1;
		updateScore('dealer_score', + dealer_score + ' Tantos');
		playSound("card_drop");
		displayOver('game_over', '¡MESA GANA POR QUE NO!');
        updateScore('dealer_score4', ' CHICA: ¡Gano Mesa Por que No!' );
		playSound("lose");
		chicas();
}

function chicaP(){		 
		chicaPlay=2;
		displayOver('game_over', '¡CHICA EN PASE!');
        updateScore('dealer_score4', ' CHICA: en Paso' );
		playSound("card_drop");
		chicas();
}

function chicaE(){	 
		if (chicaPlay==3) {chicaPlay=3} else {chicaPlay=4}
		displayOver('game_over', '¡SE VE ENVITE A CHICA!');
        updateScore('dealer_score4', ' CHICA: Envidada' );
		playSound("card_drop");
		chicas();
}
	
function chicaC(){	 
		if (dealer_c[2]==8){
			displayOver('game_over', '¡MESA ACEPTA EL ENVITE!');
			chicaPlay=5;
            updateScore('dealer_score4', ' CHICA: ¡Mesa acepta envite de 5!' );}
		else {
		displayOver('game_over', '¡MESA NO VA!');	
		player_score +=1;
		chicaPlay=1;
		playSound("card_drop");
		displayOver('game_over2', '¡JUGADOR GANA PORQUE NO!');
        updateScore('dealer_score4', ' CHICA: jugador gana el porque no!' );
		playSound("win");		
		updateScore('player_score', + player_score + ' Tantos');
		updateScore('dealer_score', + dealer_score + ' Tantos');
		}
		chicas();
}

function chicas(){
	buttonH5(B1,B2,B3,B4,B5);
	playSound("card_drop"); 					
	lance="Pares";
	if (pares_player[0]>0 && pares_dealer[0]>0){
		if (pares_dealer[0]>1){
			paresPlay=3;
			displayOver('game_over', '¡MESA ENVIDA A LOS PARES!');
			buttonVisi('¡ORDAGO A PARES!',B1);
			buttonVisi('No quiero',B2);  
			buttonVisi('Veo Envite a Pares',B4);
			buttonVisi('Subo a 5 Los Pares',B5); 
	   }
		else {	
			displayOver('game_over', 'JUGADOR HABLA DE PARES');		
			buttonVisi('¡ORDAGO A PARES!',B1);
			buttonVisi('Paso a Pares',B3);  
			buttonVisi('Envido a Pares',B4);
			buttonVisi('Envido 5 a Pares',B5);
		}}
   else if (pares_player[0]>0){	
		displayOver('game_over', '¡Jugador tiene PARES!');	
		paresPlay=6;
		paress();	
		}
   else if (pares_dealer[0]>0){
	    displayOver('game_over', '¡Mesa tiene PARES!');	
		paresPlay=6;
		paress();	
		}
   else {
	    paresPlay=0; 
   	    paress();}
}

/*LANCE PARES  * ========================================================== */

function paresO(){	
		if (pares_dealer[0]==3){
			displayOver('game_over', '¡MESA ACEPTA EL ORDAGO!');
			displayOver('game_over2', '¡ORDAGO A PARES!');
			playSound("card_drop");
			if (pares_player > pares_dealer){
				player_score = 35;
				playSound("win");
				displayOver('game_over', '¡Gana Jugador!');
				updateScore('dealer_score2', ' RESULTADO ORDAGO:¡Gano Jugador!' );
			} else {
				dealer_score = 35;
				playSound("lose");
				displayOver('game_over', '¡Gana MESA!');
				updateScore('dealer_score2', ' RESULTADO ORDAGO:¡Gano MESA!' );}
			updateScore('player_score', + player_score + ' Tantos');
			updateScore('dealer_score', + dealer_score + ' Tantos');
			lance="Nuevo";
			buttonH5(B1,B2,B3,B4,B5); 	
			buttonVisi("¡NUEVO JUEGO!",B1);}	
		else {
			displayOver('game_over', '¡MESA NO VA!');	
			player_score +=1;;
			paresPlay=1;
			playSound("card_drop");
			displayOver('game_over2', '¡JUGADOR GANA POR QUE NO!');
            updateScore('dealer_score5', ' PARES: ¡Gana jugador Ordago no visto, Por que No!' );
			playSound("win");
			updateScore('player_score', + player_score + ' Tantos');
            paress();
			}		
		
}

function paresN(){	 
		dealer_score +=1;
		paresPlay=1;
		if (pares_dealer[0]==3){
			displayOver('game_over2', ' ¡Gana Mesa con DUPLEX');
			playSound("lose");
			dealer_score +=3;}
		else if (pares_dealer[0]==2){
			displayOver('game_over2', ' ¡Gana Mesa con MEDIAS');
			playSound("lose");
			dealer_score +=2;}
		else if (pares_dealer[0]==1){
			displayOver('game_over2', ' ¡Gana Mesa con PARES');
			playSound("lose");
			dealer_score +=1;}		
		updateScore('dealer_score5', ' PARES: ¡Gano Mesa Por que no, con ' + p_dealer);
		updateScore('dealer_score', + dealer_score + ' Tantos');
		playSound("card_drop");
		playSound("lose");
		paress();
}

function paresP(){		 
		paresPlay=2;
		displayOver('game_over', '¡PARES EN PASE!');
        updateScore('dealer_score5', ' PARES: en Paso ');
		paress();
}

function paresE(){	 
		if (paresPlay==3) {paresPlay=3} else {paresPlay=4}
		playSound("card_drop");
		displayOver('game_over', '¡SE VE ENVITE A PARES!');
        updateScore('dealer_score5', ' PARES: Envidados');
		paress();
}
	
function paresC(){
	    playSound("card_drop");	 
		if (pares_dealer[0]==3){
			displayOver('game_over', '¡MESA ACEPTA EL ENVITE!');
			paresPlay=5;
            updateScore('dealer_score5', ' PARES: ¡Mesa acepta envite a 5');}
		else {
		paresPlay=1;
		if (pares_player[0]==3){
			displayOver('game_over2', ' ¡Gana Jugador con DUPLEX');
			playSound("win");
			player_score +=3;}
		else if (pares_player[0]==2){
			displayOver('game_over2', ' ¡Gana Jugador con MEDIAS');
			playSound("win");
			player_score +=2;}
		else if (pares_player[0]==1){
			displayOver('game_over2', ' ¡Gana Jugador con PARES');
			playSound("win");
			player_score +=1;}		
		updateScore('dealer_score5', ' PARES: ¡Gano Jugador Por que no, con ' + p_player);
		playSound("card_drop");
		playSound("win");		
		updateScore('player_score', + player_score + ' Tantos');
		}
		paress();
}
function paress(){
	buttonH5(B1,B2,B3,B4,B5);
	 playSound("card_drop");					
	lance="Juego";
	if (juego_player>30 && juego_dealer>30){
		if (juego_dealer==31 || juego_dealer==40){
			juegoPlay=3;
			displayOver('game_over', '¡MESA ENVIDA A JUEGO!');
			buttonVisi("¡ORDAGO A JUEGO!",B1);
			buttonVisi("No quiero",B2);  
			buttonVisi("Veo Envite a Juego",B4);
			buttonVisi("Subo a 5 el Juego",B5); 
		   }
		else {	
			displayOver('game_over', 'JUGADOR HABLA DE JUEGO');		
			buttonVisi("¡ORDAGO A JUEGO!",B1);
			buttonVisi("Paso a Juego",B3);  
			buttonVisi("Envido a Juego",B4);
			buttonVisi("Envido 5 a Juego",B5)
            juegoPlay=1;					
	}}
    else if (juego_player<31 && juego_dealer<31){
		lance="Punto";
		juegoPlay=0;
		if (juego_dealer>29){
			displayOver('game_over', '¡MESA ENVIDA AL PUNTO!');
			buttonVisi("¡ORDAGO AL PUNTO!",B1);
			buttonVisi("No quiero",B2);  
			buttonVisi("Veo Envite al Punto",B4);
			buttonVisi("Subo a 5 al Punto",B5); 
		   }
		else {	
			displayOver('game_over', 'JUGADOR HABLA DEL PUNTO');		
			buttonVisi("¡ORDAGO AL PUNTO!",B1);
			buttonVisi("Paso al Punto",B3);  
			buttonVisi("Envido el Punto",B4);
			buttonVisi("Envido 5 al Punto",B5);
		}}
	else if (juego_player>30){	
		displayOver('game_over', '¡JUGADOR TIENE JUEGO!');	
		juegoPlay=6;
		juegos();	
		}
	else if (juego_dealer>30){
	    displayOver('game_over', '¡MESA TIENE JUEGO!');	
		juegoPlay=6;
		juegos();
		}
}

/*LANCE JUEGO  * ========================================================== */
function juegoO(){	
	    playSound("card_drop");
		if (juego_dealer==31 && mano=="Mesa"){
			displayOver('game_over', '¡MESA ACEPTA EL ORDAGO!');
			displayOver('game_over2', '¡ORDAGO A JUEGO!');
			if (name_player="La Real gana a mano"){
				player_score = 35;
				playSound("winner");
				displayOver('game_over', '¡Gana Jugador!');
				updateScore('dealer_score2', ' RESULTADO ORDAGO:¡Gano Jugador!' );
			} else {
				dealer_score = 35;
				playSound("loser");
				displayOver('game_over', '¡Gana MESA!');
				updateScore('dealer_score2', ' RESULTADO ORDAGO:¡Gano MESA!' );}
			updateScore('player_score', + player_score + ' Tantos');
			updateScore('dealer_score', + dealer_score + ' Tantos');
			lance="Nuevo";
			buttonH5(B1,B2,B3,B4,B5); 
			buttonVisi("¡NUEVO JUEGO!",B1);}	
		else {
			displayOver('game_over', '¡MESA NO VA!');	
			player_score +=1;
            if (juego_player == 31){
                player_score +=3;
            } else if (juego_player == 40) {
                player_score +=2;
            }
			juegoPlay=1;
			playSound("card_drop");
			displayOver('game_over2', '¡JUGADOR GANA POR QUE NO!');
            updateScore('dealer_score6', 'JUEGO: Ordago no aceptado, gana el jugador porque no!' );
			playSound("win");
			updateScore('player_score', + player_score + ' Tantos');
            juegos();
			}				
}

function juegoN(){	 		
		if (juego_dealer == 31) {dealer_score +=5;} else {dealer_score +=2;}
		juegoPlay=1;
		updateScore('dealer_score', + dealer_score + ' Tantos');
		playSound("card_drop");
		displayOver('game_over', '¡MESA GANA POR QUE NO!');
        updateScore('dealer_score6', 'JUEGO: Mesa gana el porque no!' );
		playSound("lose");
		 juegos();
}

function juegoP(){		 
		juegoPlay=2;
		playSound("card_drop");
		displayOver('game_over', '¡JUEGO EN PASE!');
        updateScore('dealer_score6', 'JUEGO: En pase!' );
		 juegos();
}

function juegoE(){	 
		if (juegoPlay==3) {juegoPlay=3} else {juegoPlay=4}
		playSound("card_drop");
		displayOver('game_over', '¡SE VE ENVITE A JUEGO!');
        updateScore('dealer_score6', 'JUEGO: Envidado' );
		juegos();
}
	
function juegoC(){	
 		playSound("card_drop");
		if (juego_dealer==31 ||juego_dealer==40 ){
			displayOver('game_over', '¡MESA ACEPTA EL ENVITE!');
            updateScore('dealer_score6', 'JUEGO: Mesa acepta envite 5' );
			juegoPlay=5;}
		else {
		displayOver('game_over', '¡MESA NO VA!');	
		player_score +=2;
		juegoPlay=1;
		if (juego_player==31){player_score +=3;}
		playSound("card_drop");
		displayOver('game_over2', '¡JUGADOR GANA POR QUE NO!');
        updateScore('dealer_score6', 'JUEGO: Jugador gana el porque no' );
		playSound("win");		
		updateScore('player_score', + player_score + ' Tantos');
		updateScore('dealer_score', + dealer_score + ' Tantos');
		}
		juegos();
}
function juegos(){
	buttonH5(B1,B2,B3,B4,B5); 
	playSound("card_drop");
	buttonH1(B1);
	updateScore('dealer_score3', ' Grande en: '+ nameBet[grandePlay]);
	updateScore('dealer_score4', ' Chica en: ' + nameBet[chicaPlay]);
	updateScore('dealer_score5', ' Pares en: '+ nameBet[paresPlay]);
	if (juegoPlay >1) {updateScore('dealer_score6', ' Juego en: '+ nameBet[juegoPlay] );}
	else {updateScore('dealer_score6', ' Punto en: '+ nameBet[puntoPlay]);} 					
	lance="Resu";	
	playSound("musica");				
	buttonVisi("¡Tanteo!",B1);
	displayOver('game_over', 'El Tanteo');
	displayOver('game_over2', '¡Pulse para tanteo de envites y resultado!');	
		
}
/* LANCE PUNTO  * ========================================================== */
function puntoO(){	
		playSound("card_drop");	
		if (juego_dealer==30 && mano=="Mesa"){
			displayOver('game_over', '¡MESA ACEPTA EL ORDAGO!');
			displayOver('game_over2', '¡ORDAGO AL PUNTO!');
			dealer_score = 35;
			playSound("loser");
			displayOver('game_over', '¡Gana Mesa!');
			updateScore('dealer_score2', ' RESULTADO ORDAGO:¡Gano Mesa!' );
			updateScore('player_score', + player_score + ' Tantos');
			updateScore('dealer_score', + dealer_score + ' Tantos');
			lance="Nuevo";
			buttonH5(B1,B2,B3,B4,B5); 
			buttonVisi("¡NUEVO JUEGO!",B1);}	
		else {
			displayOver('game_over', '¡MESA NO VA!');	
			player_score +=1;;
			puntoPlay=1;
			playSound("card_drop");
			displayOver('game_over2', '¡JUGADOR GANA PORQUE NO!');
            updateScore('dealer_score6', 'PUNTO: Mesa no ve órdago, Jugador gana el porque no!' );   
			playSound("win");
			updateScore('player_score', + player_score + ' Tantos');
            puntos();
			}			
}

function puntoN(){	
		playSound("card_drop"); 
		dealer_score +=1;
		puntoPlay=1;
		updateScore('dealer_score', + dealer_score + ' Tantos');
		playSound("card_drop");
		displayOver('game_over', '¡MESA GANA POR QUE NO!');
        updateScore('dealer_score6', 'PUNTO: Mesa gana el porque no!' ); 
		playSound("lose");
		puntos();
}

function puntoP(){	
		playSound("card_drop");	 
		puntoPlay=2;
		displayOver('game_over', '¡PUNTO EN PASE!');
        updateScore('dealer_score6', 'PUNTO: En paso!' ); 
		puntos();
}

function puntoE(){	
		 playSound("card_drop");
		puntoPlay=3;
    	updateScore('dealer_score6', 'PUNTO: Envidado!' ); 
	    displayOver('game_over', '¡SE VE ENVITE AL PUNTO!');
		puntos();
}
	
function puntoC(){	
 		playSound("card_drop");
		if (juego_dealer>29){
			displayOver('game_over', '¡MESA ACEPTA EL ENVITE!');
            updateScore('dealer_score6', 'PUNTO: Mesa acepta envite 5!' );
			puntoPlay=5;}
		else {
		displayOver('game_over', '¡MESA NO VA!');	
		player_score +=2;
		puntoPlay=1;
		playSound("card_drop");
		displayOver('game_over2', '¡JUGADOR GANA PORQUE NO!');
        updateScore('dealer_score6', 'PUNTO: Gana Jugador porque no!' );
		playSound("win");		
		updateScore('player_score', + player_score + ' Tantos');
		updateScore('dealer_score', + dealer_score + ' Tantos');
		}
		puntos();
}
function puntos(){
	buttonH5(B1,B2,B3,B4,B5); 
	playSound("card_drop");
	buttonH1(B1);
	updateScore('dealer_score3', ' Grande en: '+ nameBet[grandePlay]);
	updateScore('dealer_score4', ' Chica en: ' + nameBet[chicaPlay]);
	updateScore('dealer_score5', ' Pares en: '+ nameBet[paresPlay]);
	if (puntoPlay >1) {updateScore('dealer_score6', ' Juego en: '+ nameBet[puntoPlay] );}
	else {updateScore('dealer_score6', ' Punto en: '+ nameBet[puntoPlay]);} 					
	lance="Resu";	
	playSound("musica");				
	buttonVisi("¡Tanteo!",B1);
	displayOver('game_over', 'El Tanteo');
	displayOver('game_over2', '¡Pulse para tanteo de envites y resultado!');	
	
		
}


/* PARSES SCORES * ========================================================== */

function scoreWinP(objeto){
	if (objeto == 6){ playSound("shuffle");} 
    else if (objeto == 1){playSound("shuffle");}
	else if (objeto == 2){player_score +=1; playSound("shuffle");} 
	else if (objeto == 5){player_score +=5; playSound("shuffle");}
	else {player_score +=2; playSound("shuffle");}
	updateScore('player_score', + player_score + ' Tantos');
	updateScore('dealer_score', + dealer_score + ' Tantos');
}

function scoreWinD(objeto){	
	if (objeto == 6){ playSound("shuffle");}
    else if (objeto == 1){playSound("shuffle");}
	else if (objeto==2){dealer_score +=1; playSound("shuffle");} 
   	else if (objeto==5){dealer_score +=5; playSound("shuffle");}
	else {dealer_score +=2;playSound("shuffle");}
	updateScore('player_score', + player_score + ' Tantos');
	updateScore('dealer_score', + dealer_score + ' Tantos');
}	

/* RESULTS Results  * ========================================================== */
function resultado(){
    updateScore('dealer_score2', '<u> RESULTADOS:</u> ' );
    /*RESULTADO GRANDE  * ========================================================== */
	if (grandePlay >1){
	     if ((player_c[0] > dealer_c[0]) || (player_c[0] == dealer_c[0] && player_c[1] > dealer_c[1]) || (player_c[0] == dealer_c[0] && player_c[1] == dealer_c[1] && player_c[2] > dealer_c[2]) || (player_c[0] == dealer_c[0] && player_c[1] == dealer_c[1] && dealer_c[2] == player_c[2] && player_c[3] > dealer_c[3]) || (player_c[0] == dealer_c[0] && player_c[1] == dealer_c[1] && dealer_c[2] == player_c[2] && player_c[3] == dealer_c[3] && mano == "Jugador")){
		updateScore('dealer_score3', ' GRANDE: '+ nameBet[grandePlay]+' ¡Gano Jugador!' );
		playSound("win");
		scoreWinP(grandePlay);}
	else {
		updateScore('dealer_score3', ' GRANDE: '+ nameBet[grandePlay]+' ¡Gano Mesa!' );
		playSound("lose");
		scoreWinD(grandePlay);}}
	else {updateScore('dealer_score3', ' GRANDE: '+ nameBet[grandePlay]+ ' Se fue!')}	
			
	/* RESULTADO CHICA	 * ========================================================== */		
	if (chicaPlay >1){
		 if ((player_c[3] < dealer_c[3]) || (player_c[3] == dealer_c[3] && player_c[2] < dealer_c[2]) || (player_c[3] == dealer_c[3] && player_c[2] == dealer_c[2] && player_c[1] < dealer_c[1]) || (player_c[3] == dealer_c[3] && player_c[2] == dealer_c[2] && dealer_c[1] == player_c[1] && player_c[0] < dealer_c[0]) || (player_c[3] == dealer_c[3] && player_c[2] == dealer_c[2] && dealer_c[1] == player_c[1] && player_c[0] == dealer_c[0] && mano == "Jugador")){
			if (mano=="Jugador"){updateScore('dealer_score4', ' CHICA: '+ nameBet[chicaPlay]+' ¡Gano Jugador!' );
				playSound("win");
				scoreWinP(chicaPlay);}
			else { 
					if (player_c<dealer_c){
						updateScore('dealer_score4', ' CHICA: '+ nameBet[chicaPlay]+' ¡Gano Jugador!');
						playSound("win");
						scoreWinP(chicaPlay);}
        			else {
						updateScore('dealer_score4', ' CHICA: '+ nameBet[chicaPlay]+' ¡Gano Mesa!');
						playSound("lose");
						scoreWinD(chicaPlay);}}}
     	 else {updateScore('dealer_score4', ' CHICA: '+ nameBet[chicaPlay]+' ¡Gano Mesa!');
				playSound("lose");
				scoreWinD(chicaPlay);}}  
	else {updateScore('dealer_score4', ' CHICA: '+ nameBet[chicaPlay]);}
       

	/*RESULTADO PARES	 * ========================================================== */	
	if (paresPlay >1){	
		if (pares_player[0] > pares_dealer[0] || pares_player[0] == pares_dealer[0] && pares_player[1] > pares_dealer[1] || 
		pares_player[0] == pares_dealer[0] && pares_player[1] == pares_dealer[1] && pares_player[2] > pares_dealer[2] ||
		pares_player[0] == pares_dealer[0] && pares_player[1] == pares_dealer[1] && pares_player[2] == pares_dealer[2] && mano=="Jugador"){
			if (pares_player[0]==3){
				playSound("win");
				player_score +=3;}
			else if (pares_player[0]==2){
				playSound("win");
				player_score +=2;}
			else if (pares_player[0]==1){
				playSound("win");
				player_score +=1;}		
			updateScore('dealer_score5', ' PARES: '+ nameBet[paresPlay]+' ¡Gano Jugador con ' + p_player);
			scoreWinP(paresPlay);}
		else{
			if (pares_dealer[0]==3){
						playSound("lose");
				dealer_score +=3;}
			else if (pares_dealer[0]==2){
				playSound("lose");
				dealer_score +=2;}
			else if (pares_dealer[0]==1){
				playSound("lose");
				dealer_score +=1;}		
			updateScore('dealer_score5', ' PARES: '+ nameBet[paresPlay]+' ¡Gano Mesa con ' + p_dealer);
			scoreWinD(paresPlay);
			}}
		else if (paresPlay==0) {
			updateScore('dealer_score5', ' PARES: NO HAY PARES!');}
		else { 
			updateScore('dealer_score5', ' PARES: NO VISTOS Y COBRADOS!');}
		updateScore('player_score', + player_score + ' Tantos');
		updateScore('dealer_score', + dealer_score + ' Tantos');
		
		/*RESULTADO JUEGO	 * ========================================================== */
		if (juegoPlay >1){
		if (juego_player == 31 && mano=="Jugador" || juego_player == 31 && juego_dealer!=31){ 
			player_score +=3;
            updateScore('dealer_score6', ' JUEGO: '+ nameBet[juegoPlay]+' ¡Gano el Jugador con 31!');
			playSound("win");	
			scoreWinP(juegoPlay);}
		else if (juego_player == 40 && juego_dealer == 40 && mano=="Jugador" || juego_player == 40 && juego_dealer != 40 || juego_player>juego_dealer && juego_dealer != 31 && juego_dealer != 40){
			updateScore('dealer_score6', ' JUEGO: '+ nameBet[juegoPlay]+' ¡Gano el Jugador');
			playSound("win");
			scoreWinP(juegoPlay);}
		else if (juego_dealer == 31 && mano=="Mesa" || juego_dealer == 31 && juego_player!= 31){
            dealer_score +=3;
			updateScore('dealer_score6', ' JUEGO: '+ nameBet[juegoPlay]+' ¡Gano la Mesa con 31!');
			playSound("lose");	
			scoreWinD(juegoPlay);}
		else {
			updateScore('dealer_score6', ' JUEGO: '+ nameBet[juegoPlay]+' ¡Gano la Mesa!');
			playSound("lose");
			scoreWinD(juegoPlay);}}
		if (juegoPlay == 1) {
			updateScore('dealer_score6', ' JUEGO: '+ nameBet[juegoPlay]);
		    updateScore('player_score', + player_score + ' Tantos');
		     updateScore('dealer_score', + dealer_score + ' Tantos');}
		
		if (player_score<35 && dealer_score<35){
			lance="Play";
            displayOver('game_over', 'Continuar partida');
	        displayOver('game_over2', '¡Pulse para continuar partida!');	
			buttonVisi("Continuar Partida!",B1);}
	     	else{
			if (player_score < dealer_score) {
				displayOver('game_over', 'GANO MESA');
                playSound("loser");
				displayOver('game_over2', '¿La revancha?');} 
			else {displayOver('game_over', 'GANO JUGADOR');
                playSound("winner");
				displayOver('game_over2', '¡Enhorabuena Campeón!');}
			lance="Nuevo";
			buttonVisi("¡NUEVO JUEGO!",B1);}	
        
		/*RESULTADO PUNTO * ========================================================== */
		if (juegoPlay == 0) {
		if (juego_player > juego_dealer || juego_player==juego_dealer && mano=="Jugador"){ 
			updateScore('dealer_score6', ' PUNTO: '+ nameBet[puntoPlay]+' ¡Gano el Jugador!');
			playSound("win");
			player_score +=1;
			scoreWinP(puntoPlay);}
		else{
			updateScore('dealer_score6', ' PUNTO: '+ nameBet[puntoPlay]+' ¡Gano la Mesa!');
			playSound("lose");
			dealer_score +=1;
			scoreWinD(puntoPlay);}}
			
		updateScore('player_score', + player_score + ' Tantos');
		updateScore('dealer_score', + dealer_score + ' Tantos');
		
		if (player_score<35 && dealer_score<35){
			lance="Play";
			buttonVisi("Continuar Partida!",B1);
            displayOver('game_over', 'Continuar partida');
	        displayOver('game_over2', '¡Pulse para continuar partida!');}	
		else{
			lance="Nuevo";
			if (player_score < dealer_score) {
				displayOver('game_over', 'GANO MESA');
                playSound("loser");
				displayOver('game_over2', '¿La revancha?');} 
			else {displayOver('game_over', 'GANO JUGADOR');
                playSound("winner");
				displayOver('game_over2', '¡Enhorabuena Campeón!');}
			playSound("musica");
			buttonVisi("¡NUEVO JUEGO!",B1);}	
}
    updateScore('player_score', + player_score + ' Tantos');
	updateScore('dealer_score', + dealer_score + ' Tantos');

/* HELPER FUNCTIONS * ========================================================== */
function updateScore(scoreId, score){
    document.getElementById(scoreId).innerHTML = score;
	return;
}

function displayOver(overId, displayText){
    var over = document.getElementById(overId);
    over.innerHTML = displayText;
    over.style.visibility = "visible";
}


window.onload = function(){
    window.setTimeout(preloadImages, 500);
}

function makeVisible(elemId){
    document.getElementById(elemId).style.visibility = "visible";
    playSound("card_drop");
}


function nuevoGame(){
	player_score=0;
	dealer_score=0;
	displayOver('game_over2', '¡Nueva Partida!');
	updateScore('dealer_score2', ' Nueva Mano!' );
	shuffle();
	play();
	}

/*PLAY GAME ROOT * ========================================================== */

function play(){
        stopSound("musica");
		if (player_score > dealer_score) {playSound("winner");} if (player_score < dealer_score){playSound("loser");}
		lance="Cartas";
		grandePlay =0;
		chicaPlay =0;
		paresPlay =0;
		juegoPlay =0;
		puntoPlay =0;
        if (mano == "Jugador") {mano = "Mesa";} else { mano = "Jugador";}
		updateScore('dealer_score2', ' NUEVO JUEGO');
        updateScore('dealer_score3', '' );
        updateScore('dealer_score4', '' );
        updateScore('dealer_score5', '' );
        updateScore('dealer_score6', '' );
		displayOver('game_over2', 'Seleccione botones superiores');


		for (var i = 0; i < 4; ++i){
            dealer_cards[i] = "";
            var card_img = document.getElementById("dealer_card" + (i + 1));
            card_img.src = "images/40/card_back.png";
            card_img.style.visibility = "hidden";
            player_cards[i] = "";
            var card_img = document.getElementById("player_card" + (i + 1));
            card_img.src = "images/40/card_back.png" ;
            card_img.style.visibility = "hidden";
        }      
        /* start new deck if necessary * ========================================================== */
        var time = 0;
            shuffle();
            ptr = 0;
            if (document.getElementById("play_sounds").checked)
                time += 1000;
            
        /* deal cards * ========================================================== */
        player_cards[0] = deck[ptr++];
		dealer_cards[0] = deck[ptr++];
		player_cards[1] = deck[ptr++];
		dealer_cards[1] = deck[ptr++];
		player_cards[2] = deck[ptr++];
		dealer_cards[2] = deck[ptr++];
		player_cards[3] = deck[ptr++];
		dealer_cards[3] = deck[ptr++];
        document.getElementById("player_card1").src = "images/40/" + player_cards[0] + ".png";
        window.setTimeout("makeVisible('player_card1')", time += 200);
 		document.getElementById("dealer_card1").src = "images/40/" + dealer_cards[0] + ".png";
        window.setTimeout("makeVisible('dealer_card1')", time += 200);
        document.getElementById("player_card2").src = "images/40/" + player_cards[1] + ".png";
        window.setTimeout("makeVisible('player_card2')", time += 200);
	   	document.getElementById("dealer_card2").src = "images/40/" + dealer_cards[1] + ".png";
        window.setTimeout("makeVisible('dealer_card2')", time += 200);
        document.getElementById("player_card3").src = "images/40/" + player_cards[2] + ".png";
        window.setTimeout("makeVisible('player_card3')", time += 200);
        document.getElementById("dealer_card3").src = "images/40/" + dealer_cards[2] + ".png";
        window.setTimeout("makeVisible('dealer_card3')", time += 200);
        document.getElementById("player_card4").src = "images/40/" + player_cards[3] + ".png";
        window.setTimeout("makeVisible('player_card4')", time += 200);
        document.getElementById("dealer_card4").src = "images/40/" + dealer_cards[3] + ".png";
        window.setTimeout("makeVisible('dealer_card4')", time += 200);
		updateScore('player_score', + player_score + ' Tantos');
		updateScore('dealer_score', + dealer_score + ' Tantos');
		updateScore('game_score',' Mano: ' + mano);
        displayOver('game_over', '¡MUS o CORTAR MUS!');
		pesarCartas();
		valorCartas();	
		buttonVisi("MUS",B2);
		buttonVisi("CORTAR",B3);
 	    buttonH1(B1);     
 }
 
/* LANCE MUS * ========================================================== */

function mus(){
	if (player_score > dealer_score) {stopSound("winner");} else {stopSound("loser");}
	if ( juego_dealer == 31 || pares_dealer[0]>1 && juego_dealer > 30){
	   displayOver('game_over', '¡MESA CORTA MUS!');  
	    cortar()
	}else {
		displayOver('game_over', '¡Marque Descartes!');
		lance="Mus"
		buttonVisi("DESCARTAR",B1);
        buttonH2(B2,B3);
		buttonV4();
	}
 }			
	    
function descarte(){
	    displayOver('game_over', '¡MUS o CORTAR MUS!');
		lance="Cartas"
		var time = 0;
        if (ptr > 27){
            shuffle();
            ptr = 0; }  
		/*juego_dealer = scoreCards(dealer_cards);*/ 
		buttonVisi("Mus!",B2);
		buttonVisi("Cortar",B3);  
        buttonH1(B1); 
		buttonV4()		 
		if (document.getElementById("D1").checked){
			player_cards[0] = deck[ptr++];
			document.getElementById("player_card1").src = "images/40/" + player_cards[0] + ".png";
			playSound("card_drop");}
		if (document.getElementById("D2").checked){
			player_cards[1] = deck[ptr++];
			document.getElementById("player_card2").src = "images/40/" + player_cards[1] + ".png";
			playSound("card_drop");}
		if (document.getElementById("D3").checked){
			player_cards[2] = deck[ptr++];
			document.getElementById("player_card3").src = "images/40/" + player_cards[2] + ".png";
			playSound("card_drop");}	
		if (document.getElementById("D4").checked){
			player_cards[3] = deck[ptr++];
			document.getElementById("player_card4").src = "images/40/" + player_cards[3] + ".png";
			playSound("card_drop");}
		if (dealer_cards[0].charAt(0) != "r" && dealer_cards[0].charAt(0) != "3" && juego_dealer!=31 ){           	
			dealer_cards[0] = deck[ptr++];
			document.getElementById("dealer_card1").src = "images/40/" + dealer_cards[0] + ".png";
			playSound("card_drop");}
		if (dealer_cards[1].charAt(0) != "r" && dealer_cards[1].charAt(0) != "3"&& juego_dealer!=31 ){           	
			dealer_cards[1] = deck[ptr++];
			document.getElementById("dealer_card2").src = "images/40/" + dealer_cards[1] + ".png";
			playSound("card_drop");}
		if (dealer_cards[2].charAt(0) != "r" && dealer_cards[2].charAt(0) != "3"&& juego_dealer!=31 ){           	
			dealer_cards[2] = deck[ptr++];
			document.getElementById("dealer_card3").src = "images/40/" + dealer_cards[2] + ".png";
			playSound("card_drop");}
		if (dealer_cards[3].charAt(0) != "r" && dealer_cards[3].charAt(0) != "3"&& juego_dealer!=31 ){           	
			dealer_cards[3] = deck[ptr++];
			document.getElementById("dealer_card4").src = "images/40/" + dealer_cards[3] + ".png";
			playSound("card_drop");}
		pesarCartas();
		valorCartas();		
 }

function cortar(){ 
        if (player_score > dealer_score) {stopSound("winner");} else {stopSound("loser");}
        playSound("card_drop");      
		lance="Grande"; 
		displayOver('game_over', '¡Hablamos de GRANDE!');   		
	    document.getElementById("D1").disabled = true;
		document.getElementById("D1").style.visibility = "hidden";
		document.getElementById("D2").disabled = true;
		document.getElementById("D2").style.visibility = "hidden";
        document.getElementById("D3").disabled = true;
		document.getElementById("D3").style.visibility = "hidden";
		document.getElementById("D4").disabled = true;
		document.getElementById("D4").style.visibility = "hidden";
		if (player_score > 30 || dealer_c[1]=="8"){
            displayOver('game_over', '¡MESA ENVIDA A LA GRANDE!');
			grandePlay=3;
			buttonVisi("¡ORDAGO A LA GRANDE!",B1);
	    	buttonVisi("No quiero",B2);  
            buttonH1(B3); 
     		buttonVisi("Veo Envite a Grande",B4);
	    	buttonVisi("Subo a 5 La Grande",B5); 
            buttonH1(B3);       
			}
		else {	
            displayOver('game_over', 'JUGADOR HABLA DE GRANDE');
			buttonVisi("¡ORDAGO A LA GRANDE!",B1);
            buttonH1(B2); 
	    	buttonVisi("Paso a La Grande",B3);  
     		buttonVisi("Envido La Grande",B4);
	    	buttonVisi("Envido 5 La Grande",B5);  
}
        pesarCartas();
		valorCartas();
}

 playSound("musica");
/* END  * ========================================================== */





