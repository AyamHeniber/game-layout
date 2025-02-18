import React from 'react'
import { GameCard } from './common/GameCard';
const games = [
    {
      name: "pragmatic",
      image: "https://eer-wsd.com/asset/vender/slots/pragmatic.png",
      link: "/sub-all-games/slots/pragmatic",
    },
    {
      name: "booongo",
      image: "https://eer-wsd.com/asset/vender/slots/booongo.png",
      link: "/sub-all-games/slots/booongo",
    },
    {
      name: "habanero",
      image: "https://eer-wsd.com/asset/vender/slots/habanero.png",
      link: "/sub-all-games/slots/habanero",
    },
    {
      name: "cq9",
      image: "https://eer-wsd.com/asset/vender/slots/cq9.png",
      link: "/sub-all-games/slots/cq9",
    },
    {
      name: "blueprint-gaming",
      image: "https://eer-wsd.com/asset/vender/slots/blueprint-gaming.png",
      link: "/sub-all-games/slots/blueprint-gaming",
    },
    {
      name: "popok",
      image: "https://eer-wsd.com/asset/vender/slots/popok.png",
      link: "/sub-all-games/slots/popok",
    },
    {
      name: "intouch-games",
      image: "https://eer-wsd.com/asset/vender/slots/intouch-games.png",
      link: "/sub-all-games/slots/intouch-games",
    },
    {
      name: "red tiger",
      image: "https://eer-wsd.com/asset/vender/slots/red_tiger.png",
      link: "/sub-all-games/slots/red tiger",
    },
    {
      name: "patagonia",
      image: "https://eer-wsd.com/asset/vender/slots/patagonia.png",
      link: "/sub-all-games/slots/patagonia",
    },
    {
      name: "bfgames",
      image: "https://eer-wsd.com/asset/vender/slots/bfgames.png",
      link: "/sub-all-games/slots/bfgames",
    },
    {
      name: "conceptgaming",
      image: "https://eer-wsd.com/asset/vender/slots/conceptgaming.png",
      link: "/sub-all-games/slots/conceptgaming",
    },
    {
      name: "play-son",
      image: "https://eer-wsd.com/asset/vender/slots/play-son.png",
      link: "/sub-all-games/slots/play-son",
    },
    {
      name: "gameArt",
      image: "https://eer-wsd.com/asset/vender/slots/gameArt.png",
      link: "/sub-all-games/slots/gameArt",
    },
    {
      name: "smartsoft",
      image: "https://eer-wsd.com/asset/vender/slots/smartsoft.png",
      link: "/sub-all-games/slots/smartsoft",
    },
    {
      name: "vibragaming",
      image: "https://eer-wsd.com/asset/vender/slots/vibragaming.png",
      link: "/sub-all-games/slots/vibragaming",
    },
    {
      name: "pgsoft",
      image: "https://eer-wsd.com/asset/vender/slots/pgsoft.png",
      link: "/sub-all-games/slots/pgsoft",
    },
    {
      name: "nolimitcity",
      image: "https://eer-wsd.com/asset/vender/slots/nolimitcity.png",
      link: "/sub-all-games/slots/nolimitcity",
    },
    {
      name: "platingaming",
      image: "https://eer-wsd.com/asset/vender/slots/platingaming.png",
      link: "/sub-all-games/slots/platingaming",
    },
    {
      name: "onetouch",
      image: "https://eer-wsd.com/asset/vender/slots/onetouch.png",
      link: "/sub-all-games/slots/onetouch",
    },
    {
      name: "liw",
      image: "https://eer-wsd.com/asset/vender/slots/liw.png",
      link: "/sub-all-games/slots/liw",
    },
    {
      name: "legaplay",
      image: "https://eer-wsd.com/asset/vender/slots/legaplay.png",
      link: "/sub-all-games/slots/legaplay",
    },
    {
      name: "egp",
      image: "https://eer-wsd.com/asset/vender/slots/egp.png",
      link: "/sub-all-games/slots/egp",
    },
    {
      name: "evoplay",
      image: "https://eer-wsd.com/asset/vender/slots/evoplay.png",
      link: "/sub-all-games/slots/evoplay",
    },
    {
      name: "amigogaming",
      image: "https://eer-wsd.com/asset/vender/slots/amigogaming.png",
      link: "/sub-all-games/slots/amigogaming",
    },
    {
      name: "bigtimegaming",
      image: "https://eer-wsd.com/asset/vender/slots/bigtimegaming.png",
      link: "/sub-all-games/slots/bigtimegaming",
    },
    {
      name: "gmw",
      image: "https://eer-wsd.com/asset/vender/slots/gmw.png",
      link: "/sub-all-games/slots/gmw",
    },
    {
      name: "hacksaw",
      image: "https://eer-wsd.com/asset/vender/slots/hacksaw.png",
      link: "/sub-all-games/slots/hacksaw",
    },
    {
      name: "wazdan",
      image: "https://eer-wsd.com/asset/vender/slots/wazdan.png",
      link: "/sub-all-games/slots/wazdan",
    },
    {
      name: "micro-gaming",
      image: "https://eer-wsd.com/asset/vender/slots/micro-gaming.png",
      link: "/sub-all-games/slots/micro-gaming",
    },
    {
      name: "mancala",
      image: "https://eer-wsd.com/asset/vender/slots/mancala.png",
      link: "/sub-all-games/slots/mancala",
    },
    {
      name: "platipus",
      image: "https://eer-wsd.com/asset/vender/slots/platipus.png",
      link: "/sub-all-games/slots/platipus",
    },
    {
      name: "dragoonsoft",
      image: "https://eer-wsd.com/asset/vender/slots/dragoonsoft.png",
      link: "/sub-all-games/slots/dragoonsoft",
    },
    {
      name: "eagaming",
      image: "https://eer-wsd.com/asset/vender/slots/eagaming.png",
      link: "/sub-all-games/slots/eagaming",
    },
    {
      name: "redrake",
      image: "https://eer-wsd.com/asset/vender/slots/redrake.png",
      link: "/sub-all-games/slots/redrake",
    },
    {
      name: "netgame",
      image: "https://eer-wsd.com/asset/vender/slots/netgame.png",
      link: "/sub-all-games/slots/netgame",
    },
    {
      name: "dreamtech",
      image: "https://eer-wsd.com/asset/vender/slots/dreamtech.png",
      link: "/sub-all-games/slots/dreamtech",
    },
    {
      name: "jili",
      image: "https://eer-wsd.com/asset/vender/slots/jili.png",
      link: "/sub-all-games/slots/jili",
    },
    {
      name: "relax-gaming",
      image: "https://eer-wsd.com/asset/vender/slots/relax-gaming.png",
      link: "/sub-all-games/slots/relax-gaming",
    },
    {
      name: "play-star",
      image: "https://eer-wsd.com/asset/vender/slots/play-star.png",
      link: "/sub-all-games/slots/play-star",
    },
    {
      name: "1x2-gaming",
      image: "https://eer-wsd.com/asset/vender/slots/1x2-gaming.png",
      link: "/sub-all-games/slots/1x2-gaming",
    },
    {
      name: "iconix",
      image: "https://eer-wsd.com/asset/vender/slots/iconix.png",
      link: "/sub-all-games/slots/iconix",
    },
    {
      name: "skywind",
      image: "https://eer-wsd.com/asset/vender/slots/skywind.png",
      link: "/sub-all-games/slots/skywind",
    },
    {
      name: "tomhorn-gaming",
      image: "https://eer-wsd.com/asset/vender/slots/tomhorn-gaming.png",
      link: "/sub-all-games/slots/tomhorn-gaming",
    },
    {
      name: "belatra",
      image: "https://eer-wsd.com/asset/vender/slots/belatra.png",
      link: "/sub-all-games/slots/belatra",
    },
    {
      name: "kagaming",
      image: "https://eer-wsd.com/asset/vender/slots/kagaming.png",
      link: "/sub-all-games/slots/kagaming",
    },
    {
      name: "playngo",
      image: "https://eer-wsd.com/asset/vender/slots/playngo.png",
      link: "/sub-all-games/slots/playngo",
    },
    {
      name: "booming",
      image: "https://eer-wsd.com/asset/vender/slots/booming.png",
      link: "/sub-all-games/slots/booming",
    },
    {
      name: "thunderkick",
      image: "https://eer-wsd.com/asset/vender/slots/thunderkick.png",
      link: "/sub-all-games/slots/thunderkick",
    },
    {
      name: "net ent",
      image: "https://eer-wsd.com/asset/vender/slots/net_ent.png",
      link: "/sub-all-games/slots/net ent",
    },
    {
      name: "caletagaming",
      image: "https://eer-wsd.com/asset/vender/slots/caletagaming.png",
      link: "/sub-all-games/slots/caletagaming",
    },
    {
      name: "7777",
      image: "https://eer-wsd.com/asset/vender/slots/7777.png",
      link: "/sub-all-games/slots/7777",
    },
  ];
  
const Slot = () => {
  return (
    <GameCard games={games} title={"Slots"}/>
   );
}

export default Slot