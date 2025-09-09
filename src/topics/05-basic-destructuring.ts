interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: 'Mess',
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
}

const { audioVolume, song: songName, songDuration, details } = audioPlayer;
const { author, year } = details;

console.log('The song name is: ', songName);
console.log('The song duration is: ', songDuration);
console.log('The author is: ', author);
console.log('The year is: ', year);
console.log('The audio volume is: ', audioVolume);

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

const [p1, p2, p3, p4 = 'Not found'] = dbz;
console.log('Personaje 1: ', p1 || 'No personaje');
console.log('Personaje 2: ', p2 || 'No personaje');
console.log('Personaje 3: ', p3 || 'No personaje');
console.log('Personaje 4: ', p4 || 'No personaje');