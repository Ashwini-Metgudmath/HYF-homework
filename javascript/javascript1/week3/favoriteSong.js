// List of my favorite songs
const songDatabase = [{
    songId: 1,
    title: 'My baby',
    artist: 'Soggy socks',
  },
  {
    songId: 2,
    title: '3 nails in wood',
    artist: 'The carpenters',
  },
  {
    songId: 3,
    title: 'Blacker than black',
    artist: 'Instant coffee',
  },
  {
    songId: 4,
    title: 'When is enough too little?',
    artist: 'The spies girls',
  },
];

const myPlaylist = [];

function addSongToDatabase(song){
    songDatabase.push(song);
}

addSongToDatabase({songId:5, title:"Mera dil bhi",artist:"Kumar sanu"});
addSongToDatabase({songId:6,title:"Show me the meaning", artist:"Backstreet Boys"});
addSongToDatabase({songId:7, title:"Waving flag", artist:"knaan"});
console.log(`Songs database`);
console.log(songDatabase);

function getSongByTitle(title){
for(let i=0; i<songDatabase.length; i++){
    if(songDatabase[i].title.includes(title)){
        return songDatabase[i];
    }
}
}

function addSongToMyPlaylist(song){
    var foundSong = getSongByTitle(song);
    myPlaylist.push(foundSong);
    return myPlaylist;
}

const myList = addSongToMyPlaylist('Mera');
console.log(`My palylist`);
console.log(myPlaylist);