import React from "react";

import HomeButton from "../components/HomeButton";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";
import Image from "next/image";
import { div } from "framer-motion/client";

export default function page() {
  return (
    <div
      className="relative h-screen w-screen overflow-hidden
  before:content-[''] before:absolute before:inset-0
  before:bg-[url('/images/background/16.webp')]
  before:bg-cover before:bg-center
  before:opacity-15"
    >
      <PageTransition transitionKey="credits">
        <div className="mt-70 ml-20 flex gap-20 overflow-hidden scale-85">
          <div className="flex flex-col gap-8">
            <div className="flex text-lg gap-1.5">
              <div className="whitespace-nowrap">
                <span className="font-semibold">
                  Главни и одговорни уредник
                </span>{" "}
                - - -
              </div>
              <div>др Душица Бојић</div>
            </div>

            <div className="flex text-lg gap-1.5">
              <div className="whitespace-nowrap">
                <span className="font-semibold">Аутори</span> - - -
              </div>
              <div className="flex flex-col gap-0.5">
                <p>Борис Марковић</p>
                <p>Срђан Бељић</p>
                <p>Никола Миликић</p>
              </div>
            </div>

            <div className="flex text-lg gap-1.5">
              <div className="whitespace-nowrap">
                <span className="font-semibold">Рецензенти</span> - - -
              </div>
              <div className="flex flex-col gap-0.5">
                <p>др Немања Радоњић</p>
                <p>др Милош Војиновић</p>
              </div>
            </div>

            <div className="flex text-lg gap-1.5">
              <div className="whitespace-nowrap">
                <span className="font-semibold">Сарадници</span> - - -
              </div>
              <div className="flex flex-col gap-0.5">
                <p>Изабела Мартинов Томовић</p>
                <p>Слађана Бојковић</p>
                <p>Вера Здравковић</p>
                <p>др Катарина Митровић</p>
                <p>др Лидија Богдановић</p>
                <p>Ивана Николић</p>
                <p>Зорица Јанковић</p>
                <p>Бошко Љубојевић</p>
              </div>
            </div>

            <div className="flex text-lg gap-1.5">
              <div className="whitespace-nowrap">
                <span className="font-semibold">Дизајн изложбе</span> - - -
              </div>
              <div>Ива Јотић Лубура</div>
            </div>

            <div className="flex text-lg gap-1.5">
              <div className="whitespace-nowrap">
                <span className="font-semibold">
                  Дизајн и развој апликација
                </span>{" "}
                - - -
              </div>
              <div>Јосипа Тивановац</div>
            </div>

            <div className="flex text-lg gap-1.5">
              <div className="whitespace-nowrap">
                <span className="font-semibold">
                  Дизајн и израда инсталације
                </span>{" "}
                - - -
              </div>
              <div>Камен папир маказе</div>
            </div>

            <div className="flex text-lg gap-1.5">
              <div className="whitespace-nowrap">
                <span className="font-semibold">Лектор за српски језик</span> -
                - -
              </div>
              <div>др Јована Јовановић</div>
            </div>

            <div className="flex text-lg gap-1.5">
              <div className="whitespace-nowrap">
                <span className="font-semibold">Превод на енглески језик</span>{" "}
                - - -
              </div>
              <div>Срђан Бељић</div>
            </div>

            <div className="flex text-lg gap-1.5">
              <div className="whitespace-nowrap">
                <span className="font-semibold">Лектор за енглески језик</span>{" "}
                - - -
              </div>
              <div>Ана Ристић</div>
            </div>

            <div className="flex text-lg gap-1.5">
              <div className="whitespace-nowrap">
                <span className="font-semibold">Техничка подршка</span> - - -
              </div>
              <div className="flex flex-col gap-0.5">
                <p>Владимир Чворовић</p>
                <p>Бранислав Мркојевић</p>
                <p>Саша Станојевић</p>
              </div>
            </div>

            <div className="flex text-lg gap-5 jutify-center items-center">
              <div className="whitespace-nowrap">
                <span className="font-semibold">Видео материјал</span> - - -
              </div>
              <div>
                <Image
                  src="images/credits/01.png"
                  alt=""
                  width={200}
                  height={150}
                  className=""
                />
              </div>
            </div>

            <div className="mt-15">
              <div className="whitespace-nowrap">
                <span className="font-semibold">
                  Изложба је реализована под покровитељством
                </span>
              </div>
              <div className="font-semibold">
                Министарства културе Републике Србије
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex text-lg gap-1.5">
              <div className="whitespace-nowrap">
                <span className="font-semibold">Editor-in-Chief</span> - - -
              </div>
              <div>Dusica Bojić, Ph.D.</div>
            </div>

            <div className="flex text-lg gap-1.5">
              <div className="whitespace-nowrap">
                <span className="font-semibold">Authors</span> - - -
              </div>
              <div className="flex flex-col gap-0.5">
                <p>Boris Marković</p>
                <p>Srđan Beljić</p>
                <p>Nikola Milikić</p>
              </div>
            </div>

            <div className="flex text-lg gap-1.5">
              <div className="whitespace-nowrap">
                <span className="font-semibold">Reviewers</span> - - -
              </div>
              <div className="flex flex-col gap-0.5">
                <p>Nemanja Radonjić, Ph.D.</p>
                <p>Miloš Vojinović, Ph.D.</p>
              </div>
            </div>

            <div className="flex text-lg gap-1.5">
              <div className="whitespace-nowrap">
                <span className="font-semibold">Associates</span> - - -
              </div>
              <div className="flex flex-col gap-0.5">
                <p>Izabela Martinov Tomović</p>
                <p>Slađana Bojković</p>
                <p>Vera Zdravković</p>
                <p>Katarina Mitrović, Ph.D.</p>
                <p>Lidija Bogdanović, D.F.A.</p>
                <p>Ivana Nikolić</p>
                <p>Zorica Janković</p>
                <p>Boško Ljubojević</p>
              </div>
            </div>

            <div className="flex text-lg gap-1.5">
              <div className="whitespace-nowrap">
                <span className="font-semibold">Exhibition Design</span> - - -
              </div>
              <div>Iva Jotić Lubura</div>
            </div>

            <div className="flex text-lg gap-1.5">
              <div className="whitespace-nowrap">
                <span className="font-semibold">
                  App Design and Development
                </span>{" "}
                - - -
              </div>
              <div>Josipa Tivanovac</div>
            </div>

            <div className="flex text-lg gap-1.5">
              <div className="whitespace-nowrap">
                <span className="font-semibold">
                  Installation Design and Production
                </span>{" "}
                - - -
              </div>
              <div>Kamen Papir Makaze</div>
            </div>

            <div className="flex text-lg gap-1.5">
              <div className="whitespace-nowrap">
                <span className="font-semibold">
                  Serbian Language Proofreading
                </span>{" "}
                - - -
              </div>
              <div>Jovana Jovanović, Ph.D.</div>
            </div>

            <div className="flex text-lg gap-1.5">
              <div className="whitespace-nowrap">
                <span className="font-semibold">Translation into English</span>{" "}
                - - -
              </div>
              <div>Srđan Beljić</div>
            </div>

            <div className="flex text-lg gap-1.5">
              <div className="whitespace-nowrap">
                <span className="font-semibold">English Proofreading</span> - -
                -
              </div>
              <div>Ana Ristić</div>
            </div>

            <div className="flex text-lg gap-1.5">
              <div className="whitespace-nowrap">
                <span className="font-semibold">Technical Support</span> - - -
              </div>
              <div className="flex flex-col gap-0.5">
                <p>Vladimir Čvorović</p>
                <p>Branislav Mrkojević</p>
                <p>Saša Stanojević</p>
              </div>
            </div>

            <div className="flex text-lg gap-5 jutify-center items-center">
              <div className="whitespace-nowrap">
                <span className="font-semibold">Video Material</span> - - -
              </div>
              <div>
                <Image
                  src="images/credits/01.png"
                  alt=""
                  width={200}
                  height={150}
                  className=""
                />
              </div>
            </div>

            <div className="mt-15">
              <div className="whitespace-nowrap">
                <span className="font-semibold">
                  Exhibition is Organized Under the Auspices of
                </span>
              </div>
              <div className="font-semibold">
                Ministry of Culture, Republic of Serbia
              </div>
            </div>
          </div>
        </div>

        <Footer>
          <HomeButton />
        </Footer>
      </PageTransition>
    </div>
  );
}
