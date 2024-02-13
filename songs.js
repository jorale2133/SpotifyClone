
//Variables 
var viewSong = document.createElement('div');
var image = document.createElement('img');
var newTitle = document.createElement('p');
var newDescription = document.createElement('p');

//Asignar imagen y ponerle descripción
image.src = "./assets/img/image1.jpg";
image.alt = "Album";

//Nombre y Titulo de los Albumes
var Titles = [];
var Album = [];
//Imagenes
var images = [];//Se almacena el objeto imagen con su dirección;
var viewSongs = [];//Se almacena el el viewSong en donde se veran Title, Album e imagen

//Get images direction
for(var i=1;i<=7;i++ ){
    var img = document.createElement('img');
    var title = document.createElement('p');
    var album = document.createElement('p');

    img.src = "./assets/img/image" + i + ".jpg";
    title.innerText = "Song" + i ;
    title.classList="song";
    album.innerHTML = " Album" + i ;
    album.classList = "album";

    images.push(img);
    Titles.push(title);
    Album.push(album);
    
} 

//Create structure to put the images, titles and description
for(var i=0;i<7;i++){
    var div = document.createElement('div');
    viewSongs.push(div);
}

//Changes the Id & Add viewSongs;
for(let i=0;i<viewSongs.length;i++){
    viewSongs[i].id = Titles[i].textContent + Album[i].textContent;
    viewSongs[i].classList = "viewSong";
    document.getElementById('playlist').appendChild(viewSongs[i]);
}


//Add 

for( let i = 0 ; i<viewSongs.length; i++){
    document.getElementById(viewSongs[i].id).appendChild(images[i]);
    document.getElementById(viewSongs[i].id).appendChild(Titles[i]);
    document.getElementById(viewSongs[i].id).appendChild(Album[i]);
}

//document.getElementById(viewSongs[0].id).appendChild(images[0]);


