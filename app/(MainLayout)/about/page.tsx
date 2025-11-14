"use client";
import { useState, useEffect, useRef } from "react";

type SectionKey = "who" | "what" | "why" | "stand" | "journey";

export default function AboutPage() {
  const sections: Record<
    SectionKey,
    { title: string; text: string; image: string }
  > = {
    who: {
      title: "Siapa Kami",
      text: `INOShop adalah platform inovasi yang dibangun untuk menghubungkan pelaku usaha,
             peneliti, industri, dan pemerintah guna mempercepat adopsi teknologi serta kolaborasi
             lintas sektor. Kami hadir sebagai ekosistem digital yang mendukung hilirisasi riset
             dan pengembangan inovasi.`,
      image: "/images/story-who.jpg",
    },
    what: {
      title: "Apa yang Kami Lakukan",
      text: `Kami menyediakan marketplace inovasi yang mempertemukan kebutuhan teknologi
             dari industri dengan solusi dari peneliti, startup, dan pelaku usaha.
             INOShop membantu proses pencocokan (matching) inovasi agar lebih cepat dan terarah.`,
      image: "/images/story-what.jpg",
    },
    why: {
      title: "Mengapa Ini Penting",
      text: `Inovasi memainkan peran besar dalam meningkatkan daya saing daerah dan nasional.
             Melalui INOShop, kami membantu pelaku usaha dan peneliti menemukan solusi terbaik
             untuk tantangan mereka.`,
      image: "/images/story-why.jpg",
    },
    stand: {
      title: "Nilai yang Kami Junjung",
      text: `Kami berkomitmen mendorong ekosistem inovasi yang kolaboratif, terbuka,
             inklusif, dan berbasis teknologi modern.`,
      image: "/images/story-stand.jpg",
    },
    journey: {
      title: "Perjalanan Kami",
      text: `INOShop merupakan inisiatif BIRDA Jawa Timur yang lahir untuk menghubungkan
             berbagai pemangku kepentingan dalam mempercepat inovasi di berbagai sektor.`,
      image: "/images/story-journey.jpg",
    },
  };

  const keys: SectionKey[] = ["who", "what", "why", "stand", "journey"];

  const [active, setActive] = useState<SectionKey>("who");
  const [fade, setFade] = useState(true);

  const listRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [indicatorPos, setIndicatorPos] = useState(0);
  const [indicatorHeight, setIndicatorHeight] = useState(20);

  // ⭐ Update posisi indikator saat active berubah
  useEffect(() => {
    const index = keys.indexOf(active);
    const el = listRefs.current[index];

    if (el) {
      setIndicatorPos(el.offsetTop + el.offsetHeight / 2 - 10);
      setIndicatorHeight(20);
    }
  }, [active]);

  // ⭐ Auto rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setActive((prev) => {
          const i = keys.indexOf(prev);
          return keys[(i + 1) % keys.length];
        });
        setTimeout(() => setFade(true), 100);
      }, 200);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = (key: SectionKey) => {
    setFade(false);
    setTimeout(() => {
      setActive(key);
      setTimeout(() => setFade(true), 100);
    }, 150);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            About <span className="text-orange-500">INOShop Platform</span>
          </h1>
        </div>

        {/* OUR STORY */}
        <section className="py-12">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* LEFT CONTENT */}
            <div>
              <h2 className="text-3xl font-bold flex items-center gap-2 mb-8">
                <span className="w-8 h-1 bg-blue-600 rounded"></span> Kisah Kami
              </h2>

              {/* Dynamic Title */}
              <h3
                className={`text-xl font-bold border-l-4 border-blue-600 pl-3 mb-3 transition-opacity duration-300 ${
                  fade ? "opacity-100" : "opacity-0"
                }`}
              >
                {sections[active].title}
              </h3>

              {/* Dynamic Text */}
              <p
                className={`text-gray-700 leading-relaxed mb-6 transition-opacity duration-300 ${
                  fade ? "opacity-100" : "opacity-0"
                }`}
              >
                {sections[active].text}
              </p>

              {/* Navigation List */}
              <ul className="relative space-y-4 font-semibold text-gray-600 pl-4">
                {/* Moving Indicator */}
                <div
                  className="absolute left-0 w-1 bg-blue-600 rounded transition-all duration-300"
                  style={{
                    top: indicatorPos,
                    height: indicatorHeight,
                  }}
                />

                {keys.map((key, idx) => (
                  <li
                    key={key}
                    ref={(el) => {
                      listRefs.current[idx] = el;
                    }}
                    onClick={() => handleClick(key)}
                    className={`cursor-pointer transition-all duration-200 ${
                      active === key
                        ? "text-gray-900"
                        : "text-gray-500 hover:text-blue-500"
                    }`}
                  >
                    {sections[key].title}
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT IMAGE */}
            <div>
              <img
                src={sections[active].image}
                alt={sections[active].title}
                className={`rounded-xl shadow-md object-cover w-full h-[400px] transition-opacity duration-500 ${
                  fade ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          </div>
        </section>

        {/* OUR PEOPLE */}
        <section className="py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Orang-Orang Kami</h2>
            <p className="text-gray-700 text-lg">
              Tim kami adalah sumber kekuatan terbesar. Dengan pengalaman dan
              dedikasi tinggi, kami mendorong lahirnya inovasi yang memberikan
              dampak bagi masyarakat.
            </p>
          </div>
        </section>

        {/* OUR TEAM */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Tim Kami</h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            <TeamCard name="Anggota 1" role="Divisi / Jabatan" />
            <TeamCard name="Anggota 2" role="Divisi / Jabatan" />
            <TeamCard name="Anggota 3" role="Divisi / Jabatan" />
            <TeamCard name="Anggota 4" role="Divisi / Jabatan" />
            <TeamCard name="Anggota 5" role="Divisi / Jabatan" />
          </div>
        </section>
      </div>
    </div>
  );
}

function TeamCard({ name, role }: { name: string; role: string }) {
  return (
    <div className="text-center hover:-translate-y-1 transition transform duration-300">
      <div className="w-32 h-32 mx-auto rounded-full bg-gray-300 shadow-lg"></div>
      <h3 className="font-semibold text-gray-900 mt-4">{name}</h3>
      <p className="text-gray-600 text-sm">{role}</p>
    </div>
  );
}
