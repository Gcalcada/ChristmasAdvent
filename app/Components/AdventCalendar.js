"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/solid";
export default function AdventCalendar() {
  const [openedDays, setOpenedDays] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalImage, setModalImage] = useState("");
  const [titleMessage, setTitleMessage] = useState("");
  const [subtitleMessage, setSubtitleMessage] = useState("");
  const [audio, setAudio] = useState(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const calendarMonth = 11; // change for december month = 12
  const today = new Date();
  const currentDay = today.getDate();
  const currentMonth = today.getMonth() + 1;

  const audios = {
    1: "/assets/audio/day1.mp3",
    2: "/assets/audio/day2.mp3",
    3: "/assets/audio/day3.mp3",
    4: "/assets/audio/day4.mp3",
    5: "/assets/audio/day5.mp3",
    6: "/assets/audio/day6.mp3",
    7: "/assets/audio/day7.mp3",
    8: "/assets/audio/day8.mp3",
    9: "/assets/audio/day9.mp3",
    10: "/assets/audio/day10.mp3",
    11: "/assets/audio/day11.mp3",
    12: "/assets/audio/day12.mp3",
    13: "/assets/audio/day13.mp3",
    14: "/assets/audio/day14.mp3",
    15: "/assets/audio/day15.mp3",
    16: "/assets/audio/day16.mp3",
    17: "/assets/audio/day17.mp3",
    18: "/assets/audio/day18.mp3",
    19: "/assets/audio/day19.mp3",
    20: "/assets/audio/day20.mp3",
    21: "/assets/audio/day21.mp3",
    22: "/assets/audio/day22.mp3",
    23: "/assets/audio/day23.mp3",
    24: "/assets/audio/day24.mp3",
  };

  const gifs = {
    1: "/assets/gifs/day1.gif",
    2: "/assets/gifs/day2.gif",
    3: "/assets/gifs/day3.gif",
    4: "/assets/gifs/day4.gif",
    5: "/assets/gifs/day5.gif",
    6: "/assets/gifs/day6.gif",
    7: "/assets/gifs/day7.gif",
    8: "/assets/gifs/day8.gif",
    9: "/assets/gifs/day9.gif",
    10: "/assets/gifs/day10.gif",
    11: "/assets/gifs/day11.gif",
    12: "/assets/gifs/day12.gif",
    13: "/assets/gifs/day13.gif",
    14: "/assets/gifs/day14.gif",
    15: "/assets/gifs/day15.gif",
    16: "/assets/gifs/day16.gif",
    17: "/assets/gifs/day17.gif",
    18: "/assets/gifs/day18.gif",
    19: "/assets/gifs/day19.gif",
    20: "/assets/gifs/day20.gif",
    21: "/assets/gifs/day21.gif",
    22: "/assets/gifs/day22.gif",
    23: "/assets/gifs/day23.gif",
    24: "/assets/gifs/day24.gif",
  };
  const messages = {
    1: "Happy 1st of December! 🎄",
    2: "Today is a great day to smile 😊",
    3: "Well done, you are on the right track! 🎉",
    4: "Keep going, you're doing amazing! 💪",
    5: "The holiday cheer is starting to show! ✨",
    6: "Let’s spread the festive joy! 🎁",
    7: "The countdown to Christmas is on! 🎅🏼",
    8: "Making memories one day at a time 🎬",
    9: "Christmas is coming soon, stay excited! 🎄",
    10: "You’re getting closer to the big day! 🎁",
    11: "The holiday spirit is in full swing! ✨",
    12: "It’s time to celebrate with joy! 🎉",
    13: "Festivities are all around us! 🎊",
    14: "Only 10 days left until Christmas! 🎅🏼",
    15: "You're almost there! Keep up the great work! 💪",
    16: "Let’s make today extra special! ✨",
    17: "Warm up with some holiday cheer! 🎄",
    18: "The season of giving is here! 🎁",
    19: "Stay cozy and festive! ❄️",
    20: "Just a few days left! Can you feel the magic? ✨",
    21: "The excitement is building up! 🎅🏼",
    22: "Almost time for the big day! 🎉",
    23: "Merry Christmas Eve! 🎄",
    24: "Merry Christmas! Enjoy the festive joy! 🎅🏼🎁",
  };

  const subtitles = {
    1: "Let the Christmas magic begin! 🌟",
    2: "A smile is the best gift you can give today! 😁",
    3: "You’ve unlocked a day of holiday cheer! 🎉",
    4: "Each day brings us closer to the holiday fun! 🕯️",
    5: "Celebrate today’s little wins! 🎊",
    6: "Surprise! A special treat awaits! 🎁",
    7: "Santa is getting ready, and so are we! 🎅",
    8: "Making the season bright, one day at a time! ✨",
    9: "The countdown is almost over! Get ready! ⏳",
    10: "Keep spreading those holiday vibes! ✨",
    11: "It’s the season of togetherness and joy! 🤗",
    12: "Celebrate today with festive joy! 🥳",
    13: "May your heart be full of holiday cheer! ❤️",
    14: "We’re so close to the big day! 🎅🏼",
    15: "You’ve unlocked a special day of joy! 🌟",
    16: "Wrap up the day with some holiday spirit! 🎁",
    17: "It’s a cozy Christmas vibe today! ❄️",
    18: "Let’s spread the holiday joy and love! 🎄",
    19: "Stay warm and merry, it’s the holiday season! 🎅🏼",
    20: "Only a few more days, get ready for the magic! ✨",
    21: "The joy of Christmas is almost here! 🎉",
    22: "The countdown is nearly over! ⏳",
    23: "Christmas Eve is here, let’s celebrate! 🎅🏼🎄",
    24: "Merry Christmas! It’s time to enjoy the magic! 🎁🎉",
  };

  const images = {
    1: "/assets/images/day1.jpg",
    2: "/assets/images/day2.jpg",
    3: "/assets/images/day3.jpg",
    4: "/assets/images/day4.jpg",
    5: "/assets/images/day5.jpg",
    6: "/assets/images/day6.jpg",
    7: "/assets/images/day7.jpg",
    8: "/assets/images/day8.jpg",
    9: "/assets/images/day9.jpg",
    10: "/assets/images/day10.jpg",
    11: "/assets/images/day11.jpg",
    12: "/assets/images/day12.jpg",
    13: "/assets/images/day13.jpg",
    14: "/assets/images/day14.jpg",
    15: "/assets/images/day15.jpg",
    16: "/assets/images/day16.jpg",
    17: "/assets/images/day17.jpg",
    18: "/assets/images/day18.jpg",
    19: "/assets/images/day19.jpg",
    20: "/assets/images/day20.jpg",
    21: "/assets/images/day21.jpg",
    22: "/assets/images/day22.jpg",
    23: "/assets/images/day23.jpg",
    24: "/assets/images/day24.jpg",
  };

  useEffect(() => {
    const sessionKey = "adventCalendarSession";
    const sessionData = JSON.parse(localStorage.getItem(sessionKey)) || {};

    const savedDays = Array.isArray(sessionData.days) ? sessionData.days : [];

    if (sessionData && new Date(sessionData.expiration) > today) {
      setOpenedDays(savedDays);
    } else {
      const newSessionData = {
        days: [],
        expiration: new Date(
          today.getFullYear(),
          today.getMonth() + 1,
          1
        ).toISOString(),
      };
      localStorage.setItem(sessionKey, JSON.stringify(newSessionData));
    }
  }, []);

  const handleOpen = (day) => {
    if (currentMonth !== calendarMonth) {
      alert("Check the month this only for christmas!");
      return;
    }

    if (day > currentDay) {
      alert("This not the day yet !");
      return;
    }

    if (!openedDays.includes(day)) {
      const updatedDays = [...openedDays, day];
      setOpenedDays(updatedDays);

      const sessionKey = "adventCalendarSession";
      const sessionData = JSON.parse(localStorage.getItem(sessionKey)) || {};
      sessionData.days = updatedDays;

      localStorage.setItem(sessionKey, JSON.stringify(sessionData));
      const newAudio = new Audio(audios[day]);
      setAudio(newAudio);
      newAudio.play();
      setIsAudioPlaying(true);

      setModalVisible(true);
      setModalMessage(messages[day]);
      setModalImage(images[day]);
      setTitleMessage(`Congratulations! You opened day: ${day}`);
      setSubtitleMessage(subtitles[day]);
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  const handleStopAudio = () => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
      setIsAudioPlaying(false);
    }
  };
  const handlePlayAudio = () => {
    const randomIndex =
      Math.floor(Math.random() * Object.keys(audios).length) + 1;
    const randomAudio = new Audio(audios[randomIndex]);

    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }

    setAudio(randomAudio);
    setIsAudioPlaying(true);

    randomAudio.play();
    randomAudio.onended = () => setIsAudioPlaying(false);
  };
  return (
    <div className="calendar-wrapper bg-red-500 p-8">
      <h1 className="text-center text-2xl font-bold text-white mb-4">
        Advent Calendar
      </h1>
      <div className="calendar-container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4 w-full bg-red-500">
        {[...Array(24)].map((_, index) => {
          const day = index + 1;
          const gifSrc = gifs[day];

          const isDayAvailable = day <= currentDay;
          const isOpened = openedDays.includes(day);
          return (
            <div key={day} className="calendar-day relative">
              <button
                onClick={() => handleOpen(day)}
                aria-label={
                  isOpened
                    ? `You ${day} already opened this day `
                    : isDayAvailable
                    ? `Open day ${day} of the advent calendar`
                    : `Day ${day} of the schedule unavailable`
                }
                className={`calendar-day-button w-20 h-20 flex flex-col items-center justify-center border rounded p-6 text-center cursor-pointer transition-all transform hover:scale-105 ${
                  isOpened
                    ? "bg-blue-400"
                    : isDayAvailable
                    ? "bg-green-400"
                    : "bg-gray-300 cursor-not-allowed"
                }`}>
                <div
                  className={`day-number absolute top-1 right-1 text-lg font-bold rounded-full w-7 h-7 flex items-center justify-center z-20 ${
                    isOpened
                      ? "bg-blue-400 text-black"
                      : isDayAvailable
                      ? "bg-red-700 text-white"
                      : "bg-yellow-300 cursor-not-allowed"
                  }`}>
                  {day}
                </div>

                {openedDays.includes(day) && gifSrc ? (
                  <div>
                    <Image
                      src={gifSrc}
                      alt={`Day ${day} Gif`}
                      fill
                      className="object-fill rounded-md"
                    />
                    <p>{day}</p>
                  </div>
                ) : (
                  <div></div>
                )}
              </button>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col">
        {isAudioPlaying ? (
          <button
            onClick={handleStopAudio}
            aria-label="Stop audio playback"
            className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-green-700 transition-colors flex items-center justify-center">
            <XMarkIcon className="h-5 w-5 mr-2" /> Parar Áudio
          </button>
        ) : (
          <button
            onClick={handlePlayAudio}
            aria-label="Play a random audio track"
            className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-green-700 transition-colors flex items-center justify-center">
            Play Áudio
          </button>
        )}
      </div>
      {modalVisible && (
        <div className="modal-overlay  fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="modal bg-white border mx-4 rounded-lg shadow-lg p-6 max-w-md w-full relative">
            <h2 className="text-left text-xl font-bold mb-4">{titleMessage}</h2>
            <div className="flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-full">
              <div className="  overflow-hidden text-white rounded-md">
                <Image
                  src={modalImage}
                  alt={`Imagem do dia ${currentDay}`}
                  width={250}
                  height={250}
                  className=" w-full"
                />
              </div>
            </div>
            <div className="mb-2">
              <h5 className="mb-2 text-slate-800 text-md font-semibold">
                {modalMessage}
              </h5>

              <p className="text-slate-600 leading-normal font-light">
                {subtitleMessage}
              </p>
            </div>
            <button
              className="w-full rounded-md mt-2 bg-red-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-green-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              aria-label="Close"
              onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
