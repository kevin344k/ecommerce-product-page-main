import React from 'react'
import icon_gps from "/images/redes/icon-gps.svg";
import icon_facebook from "/images/redes/icon-facebook.svg";
import icon_instagram from "/images/redes/icon-instagram-color.svg";
import icon_telegram from "/images/redes/icon-telegram.svg";
import icon_tiktok from "/images/redes/icon-tiktok.svg";
export default function Footer() {

      const jsonRedes = [
        {
          id: 1,
          name: "Facebook",
          url: "",
          icon: icon_facebook,
        },
        {
          id: 2,
          name: "Instagram",
          url: "https://www.instagram.com/jorgemontoya5569/",
          icon: icon_instagram,
        },
        {
          id: 3,
          name: "Tiktok",
          url: "https://www.tiktok.com/@user2531996962637?_t=ZM-8xaKoHvrPt7&_r=1",
          icon: icon_tiktok,
        },
        {
          id: 4,
          name: "Telegram",
          url: "https://t.me/+593980739896",
          icon: icon_telegram,
        },
      ];
  return (
    <div className='bg-fm-Very-dark_blue w-full text-center pb-12'>
            <div className="py-12 max-w-[1200px] flex flex-col items-center justify-center gap-4 mx-auto">
              <div className="flex justify-center items-center gap-2">
                <img className="w-4" src={icon_gps}></img>
                <a
                  className="text-sm text-white"
                  href="https://www.google.com/maps/place/2%C2%B012'03.9%22S+79%C2%B053'01.4%22W/@-2.2010745,-79.8863057,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-2.2010745!4d-79.8837308?hl=es&entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
                >
                  Guayaquil-Manabí y el Alfaro(Local 42)
                </a>
              </div>
              <div className="flex justify-center items-center gap-2">
                <a className="w-10 cursor-pointer" href={jsonRedes[0].url}>
                  <img src={jsonRedes[0].icon}></img>
                </a>
                <a className="w-10 cursor-pointer" href={jsonRedes[1].url}>
                  <img src={jsonRedes[1].icon}></img>
                </a>
                <a className="w-10 cursor-pointer" href={jsonRedes[2].url}>
                  <img className=''  src={jsonRedes[2].icon}></img>
                </a>
                <a className="w-10 cursor-pointer" href={jsonRedes[3].url}>
                  <img src={jsonRedes[3].icon}></img>
                </a>
              </div>
            </div>
            <span className='text-neutral-200 text-center font-fm-kumbh-sans'>jmodasport.com</span>
    </div>
  )
}
