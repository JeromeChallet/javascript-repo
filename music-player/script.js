const playlistSongs = document.getElementById("playlist-songs");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");
const shuffleButton = document.getElementById("shuffle");

const allSongs = [
  {
    id: 0,
    title: "Scratching The Surface",
    artist: "Quincy Larson",
    duration: "4:25",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/scratching-the-surface.mp3",
  },
  {
    id: 1,
    title: "Can't Stay Down",
    artist: "Quincy Larson",
    duration: "4:15",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/can't-stay-down.mp3",
  },
  {
    id: 2,
    title: "Still Learning",
    artist: "Quincy Larson",
    duration: "3:51",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/still-learning.mp3",
  },
  {
    id: 3,
    title: "Cruising for a Musing",
    artist: "Quincy Larson",
    duration: "3:34",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/cruising-for-a-musing.mp3",
  },
  {
    id: 4,
    title: "Never Not Favored",
    artist: "Quincy Larson",
    duration: "3:35",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/never-not-favored.mp3",
  },
  {
    id: 5,
    title: "From the Ground Up",
    artist: "Quincy Larson",
    duration: "3:12",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/from-the-ground-up.mp3",
  },
  {
    id: 6,
    title: "Walking on Air",
    artist: "Quincy Larson",
    duration: "3:25",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/walking-on-air.mp3",
  },
  {
    id: 7,
    title: "Can't Stop Me. Can't Even Slow Me Down.",
    artist: "Quincy Larson",
    duration: "3:52",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/cant-stop-me-cant-even-slow-me-down.mp3",
  },
  {
    id: 8,
    title: "The Surest Way Out is Through",
    artist: "Quincy Larson",
    duration: "3:10",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/the-surest-way-out-is-through.mp3",
  },
  {
    id: 9,
    title: "Chasing That Feeling",
    artist: "Quincy Larson",
    duration: "2:43",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/chasing-that-feeling.mp3",
  },
];

// https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement
// shows all the possible properties of Audio() which is an HTML media element
const audio = new Audio();
let userData = {
  songs: [...allSongs],
  currentSong: null,
  songCurrentTime: 0,
};

// activates and manages the state of the current song
// the id comes from playButton.addEventListener
const playSong = (id) => {
  /* ?. checks if userData and userData.songs exist, 
  if not it will return as undefined and .find() won't run
  .find() is an array function returning the first element being true to the condition
  song in the arrow function. song is simply a word reference of the current element
  selected by .find() to compare the current array element to the condition.
  arguments aren't being passed to it from anywhere*/
  const song = userData?.songs.find((song) => song.id === id);
  // assigns the current song src to the cosnt audio defined as an Audio up there
  audio.src = song.src;
  // assigns the current song title to the cosnt audio defined as an Audio up there
  audio.title = song.title;

  /* if it is the first time playing then audio time will be set to 0 otherwise
  it will remember the assignment happening understand of song to currentSong */
  if (userData?.currentSong === null || userData?.currentSong.id !== song.id) {
    // .currentTime is a built in property of html of Audio()
    audio.currentTime = 0;
  } else {
    audio.currentTime = userData?.songCurrentTime;
  }
  userData.currentSong = song;
  playButton.classList.add("playing");

  highlightCurrentSong();
  setPlayerDisplay();
  setPlayButtonAccessibleText();
  // built in function of Audio()
  audio.play();
};

// pause the song
/* because the current song is already stored in the userData there is no need to pass an id
it only affects the userData so its id is already stored and known in it*/
const pauseSong = () => {
  /* ensure the playback time is stored in the central place of userData
instead of relying on audio.currentTime*/
  userData.songCurrentTime = audio.currentTime;

  playButton.classList.remove("playing");
  // built in function of Audio()
  audio.pause();
};

// select the next song
// again we interact with userData so its id is already known and we do not need to pass it
const playNextSong = () => {
  // if running for the first time check it will set to the first song in the array
  if (userData?.currentSong === null) {
    playSong(userData?.songs[0].id);
  } else {
    // retreive index of the current song from userData thanks to getCurrentSongIndex()
    const currentSongIndex = getCurrentSongIndex();
    const nextSong = userData?.songs[currentSongIndex + 1];
    // set the state of the current song to the next
    playSong(nextSong.id);
  }
};

// select the previous song
const playPreviousSong = () => {
  // if no song present or selected in userData, then do nothing
  if (userData?.currentSong === null) return;
  else {
    // retreive index of the current song from userData thanks to getCurrentSongIndex()
    const currentSongIndex = getCurrentSongIndex();
    const previousSong = userData?.songs[currentSongIndex - 1];
    // set the state of the current song to the previous
    playSong(previousSong.id);
  }
};

const shuffle = () => {
  /* .sort() is a built in array method that takes uses a comparison function as an argument 
  because math.random returns a values between -0.5 and 0.5, it insures to randomly move up or down the selected song
  sort() makes a comparison if a < b put a before, a > b put after and if a = b dont change
  so this way when the comparison happens between 2 songs from userData sometimes it will place after and sometimes before*/
  userData?.songs.sort(() => Math.random() - 0.5);
  // acts as a full reset of the current song
  userData.currentSong = null;
  userData.songCurrentTime = 0;

  renderSongs(userData?.songs);
  pauseSong();
  setPlayerDisplay();
  setPlayButtonAccessibleText();
};

const deleteSong = (id) => {
  // if the id passed belongs to an existing song then reset the whole thing
  if (userData?.currentSong?.id === id) {
    userData.currentSong = null;
    userData.songCurrentTime = 0;

    pauseSong();
    setPlayerDisplay();
  }

  // update userData to have all the songs from the array but the one with that id
  userData.songs = userData?.songs.filter((song) => song.id !== id);
  renderSongs(userData?.songs);
  highlightCurrentSong();
  setPlayButtonAccessibleText();

  /*  everytime time you delete a song, 
  if the song you delete happens to be the last song then the reset button will appear */
  if (userData?.songs.length === 0) {
    // creates a button with values from styles.css and default values like size from html
    const resetButton = document.createElement("button");
    const resetText = document.createTextNode("Reset Playlist");

    // gives an id to that button
    resetButton.id = "reset";
    // gives a text to that button
    resetButton.ariaLabel = "Reset playlist";
    // built JS method to add a child element in this case a text
    resetButton.appendChild(resetText);
    // add the button to DOM element playlistSongs
    playlistSongs.appendChild(resetButton);

    // set a click function that newly created button
    resetButton.addEventListener("click", () => {
      // re implement the songs form teh array to userData
      userData.songs = [...allSongs];

      renderSongs(sortSongs());
      setPlayButtonAccessibleText();
      resetButton.remove();
    });
  }
};

const setPlayerDisplay = () => {
  const playingSong = document.getElementById("player-song-title");
  const songArtist = document.getElementById("player-song-artist");
  // all this data comes from the central place userData
  const currentTitle = userData?.currentSong?.title;
  const currentArtist = userData?.currentSong?.artist;

  playingSong.textContent = currentTitle ? currentTitle : "";
  songArtist.textContent = currentArtist ? currentArtist : "";
};

const highlightCurrentSong = () => {
  // playlist-song and song-${ are defined in renderSongs not index.html
  const playlistSongElements = document.querySelectorAll(".playlist-song");
  const songToHighlight = document.getElementById(
    `song-${userData?.currentSong?.id}`
  );

  // remove the aria-current attribute to all songs and reapply it to the higlighted one
  playlistSongElements.forEach((songEl) => {
    songEl.removeAttribute("aria-current");
  });

  if (songToHighlight) songToHighlight.setAttribute("aria-current", "true");
};

// when this function is called the array has already been sorted unless is called in the shuffle function
const renderSongs = (array) => {
  const songsHTML = array
    /* .map() will apply the html code to every single element of the song array (that is already sorted)
    it uses the values already present in the array (sorted userData)
    so when the current song object is being processed by .map(), it uses its id, title etc...*/
    .map((song) => {
      return `
      <li id="song-${song.id}" class="playlist-song">
      <button class="playlist-song-info" onclick="playSong(${song.id})">
          <span class="playlist-song-title">${song.title}</span>
          <span class="playlist-song-artist">${song.artist}</span>
          <span class="playlist-song-duration">${song.duration}</span>
      </button>
      <button onclick="deleteSong(${song.id})" class="playlist-song-delete" aria-label="Delete ${song.title}">
          <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8" fill="#4d4d62"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.32587 5.18571C5.7107 4.90301 6.28333 4.94814 6.60485 5.28651L8 6.75478L9.39515 5.28651C9.71667 4.94814 10.2893 4.90301 10.6741 5.18571C11.059 5.4684 11.1103 5.97188 10.7888 6.31026L9.1832 7.99999L10.7888 9.68974C11.1103 10.0281 11.059 10.5316 10.6741 10.8143C10.2893 11.097 9.71667 11.0519 9.39515 10.7135L8 9.24521L6.60485 10.7135C6.28333 11.0519 5.7107 11.097 5.32587 10.8143C4.94102 10.5316 4.88969 10.0281 5.21121 9.68974L6.8168 7.99999L5.21122 6.31026C4.8897 5.97188 4.94102 5.4684 5.32587 5.18571Z" fill="white"/></svg>
        </button>
      </li>
      `;
    })
    // because .map() produces an array, we need .join() to turn it into a string so that innerHTML can use it
    .join("");

  playlistSongs.innerHTML = songsHTML;
};

const setPlayButtonAccessibleText = () => {
  // set up the song to the current or the first if first time running
  const song = userData?.currentSong || userData?.songs[0];

  // displays the title of the current song or 1st song if first time running
  playButton.setAttribute(
    "aria-label",
    song?.title ? `Play ${song.title}` : "Play"
  );
};

// finds and returns the position of the current song in the playlist
const getCurrentSongIndex = () =>
  /* indexOf is a built in array function thar return the current position of the selected element
  in this case userData?.currentSong*/
  userData?.songs.indexOf(userData?.currentSong);

playButton.addEventListener("click", () => {
  // if running for the 1st time, set 0 to playSong function
  if (userData?.currentSong === null) {
    playSong(userData?.songs[0].id);
  } else {
    // otherwise pass the current id from userData
    playSong(userData?.currentSong.id);
  }
});

pauseButton.addEventListener("click", pauseSong);

nextButton.addEventListener("click", playNextSong);

previousButton.addEventListener("click", playPreviousSong);

shuffleButton.addEventListener("click", shuffle);

/* when the audio finishes playing this happens
we know it ended thanks to the built in HTML media property of "ended"
just like "click", it's prebuilt */
audio.addEventListener("ended", () => {
  // retrives current song index thanks to the function getCurrentSongIndex()
  const currentSongIndex = getCurrentSongIndex();
  // checks if there is a song after that to play if possible
  const nextSongExists = userData?.songs[currentSongIndex + 1] !== undefined;

  if (nextSongExists) {
    // if there is a song to play afterwards, play it
    playNextSong();
  } else {
    // if not songs after then reset userData
    userData.currentSong = null;
    userData.songCurrentTime = 0;
    pauseSong();
    setPlayerDisplay();
    highlightCurrentSong();
    setPlayButtonAccessibleText();
  }
});

const sortSongs = () => {
  userData?.songs.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }

    if (a.title > b.title) {
      return 1;
    }

    return 0;
  });

  return userData?.songs;
};

renderSongs(sortSongs());
setPlayButtonAccessibleText();
