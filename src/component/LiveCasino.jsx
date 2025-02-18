import React from "react";
import { GameCard } from "./common/GameCard";

const games = [
  {
    name: "evolution",
    image: "https://eer-wsd.com/asset/vender/live-casino/evolution.png",
    link: "/playGame/evolution_game_shows/live-casino",
  },
  {
    name: "pragmatic-live",
    image: "https://eer-wsd.com/asset/vender/live-casino/pragmatic-live.png",
    link: "/playGame/pragmatic_live/live-casino",
  },
  {
    name: "oriental",
    image: "https://eer-wsd.com/asset/vender/live-casino/oriental.png",
    link: "/playGame/og-lobby/live-casino",
  },
  {
    name: "7-mojos-live",
    image: "https://eer-wsd.com/asset/vender/live-casino/7-mojos-live.png",
    link: "/playGame/7_mojos_live/live-casino",
  },
  {
    name: "onetouch-live",
    image: "https://eer-wsd.com/asset/vender/live-casino/onetouch-live.png",
    link: "/playGame/onetouch_live_lobby/live-casino",
  },
  {
    name: "playTech-live",
    image: "https://eer-wsd.com/asset/vender/live-casino/playTech-live.png",
    link: "/playGame/zpkpo4084/live-casino",
  },
  {
    name: "ezugi",
    image: "https://eer-wsd.com/asset/vender/live-casino/ezugi.png",
    link: "/playGame/ezugi/live-casino",
  },
  {
    name: "micro-gaming-live",
    image: "https://eer-wsd.com/asset/vender/live-casino/micro-gaming-live.png",
    link: "/playGame/live_microgaming/live-casino",
  },
  {
    name: "dreamgame",
    image: "https://eer-wsd.com/asset/vender/live-casino/dreamgame.png",
    link: "/playGame/dreamgame/live-casino",
  },
  {
    name: "vivo",
    image: "https://eer-wsd.com/asset/vender/live-casino/vivo.png",
    link: "/playGame/vivo/live-casino",
  },
  {
    name: "asia-gaming-live",
    image: "https://eer-wsd.com/asset/vender/live-casino/asia-gaming-live.png",
    link: "/playGame/asia_gaming/live-casino",
  },
  {
    name: "dowin",
    image: "https://eer-wsd.com/asset/vender/live-casino/dowin.png",
    link: "/playGame/dowin/live-casino",
  },
  {
    name: "WM casino",
    image: "https://eer-wsd.com/asset/vender/live-casino/WM_casino.png",
    link: "/playGame/wm_live/live-casino",
  },
  {
    name: "skywind-live",
    image: "https://eer-wsd.com/asset/vender/live-casino/skywind-live.png",
    link: "/playGame/qwatom5475/live-casino",
  },
  {
    name: "bota",
    image: "https://eer-wsd.com/asset/vender/live-casino/bota.png",
    link: "/playGame/bota/live-casino",
  },
];

const LiveCasino = () => {
  return (
   <GameCard games={games} title={"Live Casio"}/>
  );
};

export default LiveCasino;
