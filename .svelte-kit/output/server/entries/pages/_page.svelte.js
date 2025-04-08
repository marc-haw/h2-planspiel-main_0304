import { p as push, d as ensure_array_like, f as attr_class, c as pop, e as escape_html, h as attr, i as attr_style, j as stringify, k as bind_props, l as copy_payload, m as assign_payload } from "../../chunks/index.js";
import "clsx";
import { h as fallback } from "../../chunks/utils.js";
const companies = [
  {
    id: 1,
    nick: "metal",
    name: "Metallwerke Hochwald AG",
    img: "factory.png",
    type: "Aktiengesellschaft (AG)",
    description: "Großes Stahlwerk mit hohem Energieverbrauch.",
    pro: "Könnte Klimaneutralen, grünen Stahl produzieren. Bedeutend für die Industriepolitik und den Klimaschutz",
    contra: "Kann alternativ CO2-Zertifikate kaufen und fossile Energien verwenden.",
    h2: 20,
    pay: 7,
    support: 3,
    h2Saving: "Enorm"
  },
  {
    id: 4,
    nick: "maritim",
    name: "Maritim Logistik",
    img: "maritim.png",
    type: "Privatunternehmen (GmbH)",
    description: "Internationaler Lieferdienst mit zentraler Bedeutung für die regionale Logistik. Bietet Transport per Flugzeug und Schiff an.",
    pro: "Flugzeuge und Schiffe erzeugen aktuell viel CO2. Möchte mit einer eigenen, kleinen Raffinerie mithilfe von Wasserstoff klimaschonenden Treibstoff herstellen (sogenannte E-Fuels). Das Unternehmen will sich damit als Vorreiter im Klimaschutz vermarkten.",
    contra: "Großes Privatunternehmen, das hohe Gewinne erzielt und in alternative Antriebe investieren könnte. Erhofft sich durch Umstellung vor allem Marketingeffekt.",
    h2: 15,
    pay: 9.5,
    support: 0.5,
    h2Saving: "Hoch"
  },
  {
    id: 2,
    nick: "hanse",
    name: "Hanse-Mobilität",
    img: "bus.png",
    type: "Teil-Städtischer Betrieb",
    description: "Betreiber des öffentlichen Nahverkehrs in Hamburg.",
    pro: "Möchte auf Wasserstoffbusse umstellen. Dies Würde CO2 vermeiden und umgeht Problematik des Ladens bei Elektrobussen.",
    contra: "Könnte auf elektrische Busse ausweichen oder weiterhin mit Diesel fahren.",
    h2: 7,
    pay: 1,
    support: 0,
    h2Saving: "Mittel"
  },
  {
    id: 5,
    nick: "bio",
    name: "Biotech Solutions",
    img: "biotech.png",
    type: "Forschungsinstitut",
    description: "Erforscht neuartige Technologien im Bereich Gesundheit, Ernährung und Energieversorgung. Gehört zur Universität Hamburg.",
    pro: "Innovativer Ansatz, der langfristig Fortschritt bringen könnte. Benötigt Wasserstoff für gewisse Prozesse.",
    contra: "Relativ niedriger aktueller Verbrauch und Ergebnisse sind in naher Zukunft kaum relevant. Es wird auch an alternativen Technologien ohne Wasserstoff geforscht.",
    h2: 4,
    pay: 5,
    support: 5,
    h2Saving: "Keine"
  },
  {
    id: 3,
    nick: "hospital",
    name: "Städtisches Krankenhaus",
    img: "hospital.png",
    type: "Städtischer Betrieb",
    description: "Großes Krankenhaus im Stadtzentrum.",
    pro: "Das Krankenhaus will mit Wasserstoff heizen, um CO2 einzusparen.",
    contra: "Könnte weiterhin mit Gas heizen oder eine Wärmepumpe einbauen.",
    h2: 3,
    pay: 4,
    support: 6,
    h2Saving: "Gering"
  },
  {
    id: 6,
    nick: "bakery",
    name: "Bäckerei Mehrkorn",
    img: "bakery.png",
    type: "Familienunternehmen",
    description: "Kleine Bäckerei, setzt auf nachhaltige Produktion und beliefert die Region mit Brot aus CO2-neutraler Herstellung.",
    pro: "Hohe Gewinnwohlorientierung; symbolisch wichtig für die regionale Nachhaltigkeitsstrategie.",
    contra: "Geringe Menge benötigt; könnte fossile Energien für eine Übergangszeit nutzen.",
    h2: 1,
    pay: 2,
    support: 8,
    h2Saving: "Gering"
  }
];
const totalH2State = { availableH2: 30 };
function H2ControlA($$payload, $$props) {
  push();
  const maxH2 = 30;
  let h2Counter = 0;
  const each_array = ensure_array_like(Array.from({ length: h2Counter }, (_, i) => i));
  $$payload.out += `<div class="flex justify-between items-center w-full mx-auto mb-3"><div class="flex items-center gap-8 h-32 justify-between rounded-full bg-cyan-50/10 border-3 border-cyan-100 w-full p-3"><button${attr_class("text-2xl font-bold bg-yellow-400 active:bg-yellow-200 transition svelte-1t2b7kl", void 0, {
    "disabled": totalH2State.availableH2 === 30
  })}><img src="/minus.png" class="size-12" alt="minus"></button> <div class="flex flex-col items-center gap-1"><div class="flex items-center gap-3 text-3xl font-bold text-cyan-100 mb-2"><div>H<sub>2</sub>-Einheiten:</div> <div></div></div> <div class="relative"><div class="h-12 top-0 flex items-center gap-1"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    $$payload.out += `<div class="bg-gradient-to-t from-sky-300 to-cyan-200 w-5 h-10 rounded-sm"></div>`;
  }
  $$payload.out += `<!--]--></div></div></div> <button${attr_class("text-2xl font-bold bg-yellow-400 active:bg-yellow-200 transition svelte-1t2b7kl", void 0, {
    "disabled": h2Counter === maxH2
  })}><img src="/plus.png" class="size-8" alt="plus"></button></div></div>`;
  pop();
}
function H2Control($$payload, $$props) {
  push();
  const { maxH2 = 10 } = $$props;
  let h2Counter = 0;
  const each_array = ensure_array_like(Array.from({ length: maxH2 }, (_, i) => i));
  const each_array_1 = ensure_array_like(Array.from({ length: h2Counter }, (_, i) => i));
  $$payload.out += `<div class="flex justify-between items-center mx-auto mb-3"><div class="flex items-center gap-8 h-32 justify-between rounded-full bg-cyan-50/10 border-3 border-cyan-100 p-3"><button${attr_class("text-2xl font-bold bg-yellow-400 active:bg-yellow-200 transition svelte-1t2b7kl", void 0, {
    "disabled": totalH2State.availableH2 === 30
  })}><img src="/minus.png" class="size-12" alt="minus"></button> <div class="flex flex-col items-center gap-1"><div class="flex items-center gap-3 text-3xl font-bold text-cyan-100 mb-2"><div>H<sub>2</sub> Bedarf:</div> <div>${escape_html(h2Counter)} / ${escape_html(maxH2)}</div></div> <div class="relative"><div class="flex items-center gap-1"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    $$payload.out += `<div class="bg-cyan-200/20 w-8 h-10 rounded-sm"></div>`;
  }
  $$payload.out += `<!--]--></div> <div class="absolute top-0 flex items-center gap-1"><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    $$payload.out += `<div class="bg-gradient-to-t from-sky-300 to-cyan-200 w-8 h-10 rounded-sm"></div>`;
  }
  $$payload.out += `<!--]--></div></div></div> <button${attr_class("text-2xl font-bold bg-yellow-400 active:bg-yellow-200 transition svelte-1t2b7kl", void 0, {
    "disabled": h2Counter === maxH2
  })}><img src="/plus.png" class="size-8" alt="plus"></button></div></div>`;
  pop();
}
function GradientBar($$payload, $$props) {
  push();
  let { percentage = 0, id } = $$props;
  const maskSrc = `/leaf${id}.png`;
  if (id !== 5) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="relative inline-block h-28 w-fit mx-auto my-auto"><img${attr("src", maskSrc)} alt="" class="h-full opacity-10"> <div class="absolute inset-0 z-10 dop-shadow-lg"${attr_style(` mask-image: url(${stringify(maskSrc)}); -webkit-mask-image: url(${stringify(maskSrc)}); mask-size: auto 100%; -webkit-mask-size: auto 100%; mask-repeat: no-repeat; -webkit-mask-repeat: no-repeat; mask-position: center; -webkit-mask-position: center; background-color: transparent; `)}><div class="absolute top-0 left-0 h-full transition-all duration-300 bg-gradient-to-t from-lime-400 via-green-400 to-emerald-300"${attr_style(`width: ${stringify(percentage)}%;`)}></div></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<img src="/noco2.png" class="size-28 mx-auto my-auto opacity-50" alt="CO2 Einsparung gering" style="filter: brightness(0) saturate(100%) invert(59%) sepia(55%) saturate(557%) hue-rotate(314deg) brightness(92%) contrast(113%);">`;
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function CompanyNav($$payload, $$props) {
  let navItems = $$props["navItems"];
  let activeItem = $$props["activeItem"];
  const each_array = ensure_array_like(navItems);
  $$payload.out += `<nav class="flex justify-center gap-2 w-full"><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let item = each_array[i];
    $$payload.out += `<button${attr_class(`flex items-center text-lg font-bold justify-center rounded-md py-2 px-4 text-center cursor-pointer active:bg-slate-200/90 transition border-3 ${stringify(activeItem === item ? "border-cyan-200 bg-cyan-300/20 text-cyan-100" : "bg-slate-100/55 border-cyan-100/0 text-slate-600")}`)}>${escape_html(item)}</button>`;
  }
  $$payload.out += `<!--]--></nav>`;
  bind_props($$props, { navItems, activeItem });
}
function CompanyDetails($$payload, $$props) {
  push();
  let content = $$props["content"];
  let activeItem = $$props["activeItem"];
  $$payload.out += `<section class="w-full p-2 rounded-md mt-5 svelte-15t2fi2"><h3 class="font-bold text-2xl ml-[168px] uppercase svelte-15t2fi2">${escape_html(activeItem)}</h3> <div class="text-3xl svelte-15t2fi2">`;
  if (activeItem === "Beschreibung") {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="flex gap-10 overflow-y-auto svelte-15t2fi2"><img src="/description.png" class="size-32 brightness-200 svelte-15t2fi2" alt="description"> ${escape_html(content.description)}</div>`;
  } else if (activeItem === "Pro") {
    $$payload.out += "<!--[1-->";
    $$payload.out += `<div class="flex gap-10 overflow-y-auto h-32 svelte-15t2fi2"><img src="/pros.png" class="size-32 brightness-150 svelte-15t2fi2" alt="pro"> ${escape_html(content.pro)}</div>`;
  } else if (activeItem === "Contra") {
    $$payload.out += "<!--[2-->";
    $$payload.out += `<div class="flex gap-10 overflow-y-auto svelte-15t2fi2"><img src="/cons.png" class="size-32 brightness-180 svelte-15t2fi2" alt="contra"> ${escape_html(content.contra)}</div>`;
  } else if (activeItem === "Zahlungsbereitschaft") {
    $$payload.out += "<!--[3-->";
    $$payload.out += `${escape_html(content.pay)}`;
  } else if (activeItem === "Förderbedarf") {
    $$payload.out += "<!--[4-->";
    $$payload.out += `${escape_html(content.support)}`;
  } else if (activeItem === "CO2-Einsparung") {
    $$payload.out += "<!--[5-->";
    $$payload.out += `${escape_html(content.h2Saving)}`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></section>`;
  bind_props($$props, { content, activeItem });
  pop();
}
function TabNav($$payload, $$props) {
  push();
  let { activePhase, activeTab = void 0 } = $$props;
  $$payload.out += `<nav class="flex gap-2 ml-2 text-xl"><button${attr_class(`p-2 rounded-t-lg cursor-pointer active:bg-gray-100 transition font-bold ${stringify(activeTab === "infos" ? "bg-slate-100/80 text-cyan-600/80  " : "bg-slate-200/50 text-slate-500")}`)}>Infos</button> `;
  if (activePhase !== "a" && activePhase !== "b") {
    $$payload.out += "<!--[-->";
    $$payload.out += `<button${attr_class(`p-2 rounded-t-lg cursor-pointer active:bg-gray-100 transition font-bold ${stringify(activeTab === "co2" ? "bg-slate-100/80 text-cyan-600/80   " : "bg-slate-200/50 text-slate-500")}`)}>CO<sub>2</sub></button>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (activePhase !== "a" && activePhase !== "b" && activePhase !== "c") {
    $$payload.out += "<!--[-->";
    $$payload.out += `<button${attr_class(`p-2 rounded-t-lg cursor-pointer active:bg-gray-100 transition font-bold ${stringify(activeTab === "foerder" ? "bg-slate-100/80 text-cyan-600/80  " : "bg-slate-200/50 text-slate-500")}`)}>Förderbedarf</button>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></nav>`;
  bind_props($$props, { activeTab });
  pop();
}
function EuroCoin($$payload, $$props) {
  let classes = fallback($$props["classes"], "size-12");
  $$payload.out += `<svg${attr_class(classes)} style="enable-background:new 0 0 110 110;" version="1.0" viewBox="0 0 110 110" width="110px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Multicolor"><g><path d="M55,27c15.439,0,28,12.561,28,28S70.439,83,55,83S27,70.439,27,55S39.561,27,55,27 M55,23    c-17.673,0-32,14.327-32,32c0,17.673,14.327,32,32,32s32-14.327,32-32C87,37.327,72.673,23,55,23L55,23z" style="fill:#FBEC9A;"></path><path d="M55,83c-15.439,0-28-12.561-28-28s12.561-28,28-28s28,12.561,28,28S70.439,83,55,83z" style="fill:#FACB1B;"></path><path d="M55,27c-15.439,0-28,12.561-28,28c0,7.946,3.333,15.124,8.667,20.225l39.558-39.558    C70.124,30.332,62.946,27,55,27z" style="fill:#FBE158;"></path><path d="M27,55c0-15.439,12.561-28,28-28c7.925,0,15.086,3.315,20.185,8.625l2.838-2.838    C72.203,26.757,64.042,23,55,23c-17.673,0-32,14.327-32,32c0,9.042,3.757,17.203,9.787,23.022l2.838-2.838    C30.315,70.086,27,62.925,27,55z" style="fill:#FCF6C2;"></path><g><path d="M69.377,66.761c-2.592,3.36-5.809,5.617-10.753,5.617c-7.105,0-12.097-4.561-13.921-11.377h-2.592     c-1.152,0-2.064-0.912-2.064-2.064c0-1.104,0.912-2.064,2.064-2.064h1.872c-0.048-0.576-0.048-1.2-0.048-1.824     c0-0.72,0-1.488,0.096-2.208h-1.92c-1.152,0-2.064-0.912-2.064-2.017c0-1.152,0.912-2.064,2.064-2.064h2.688     c1.872-6.48,6.817-11.137,13.633-11.137c5.088,0,8.161,2.016,10.657,4.896c0.384,0.384,0.768,1.104,0.768,1.968     c0,1.536-1.296,2.784-2.832,2.784c-1.008,0-1.68-0.48-2.064-0.96c-1.824-2.208-3.696-3.408-6.673-3.408     c-3.456,0-6.048,2.256-7.393,5.856h8.545c1.104,0,2.016,0.912,2.016,2.064c0,1.104-0.912,2.017-2.016,2.017h-9.457     c-0.096,0.672-0.096,1.392-0.096,2.112c0,0.672,0,1.296,0.048,1.92h9.505c1.104,0,2.016,0.96,2.016,2.064     c0,1.152-0.912,2.064-2.016,2.064H50.8c1.344,3.84,4.08,6.096,7.873,6.096c2.88,0,4.752-1.392,6.576-3.648     c0.48-0.576,1.152-0.96,2.064-0.96c1.44,0,2.64,1.152,2.64,2.592C69.953,65.801,69.665,66.425,69.377,66.761z" style="fill:#8E6134;"></path></g></g></g></svg>`;
  bind_props($$props, { classes });
}
function CompanyCard($$payload, $$props) {
  push();
  let { company, activePhase } = $$props;
  company.h2;
  let navItems = ["Beschreibung", "Pro", "Contra"];
  let percentage = 0;
  let activeItem = "Beschreibung";
  let activeTab = "info";
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<section class="glass relative flex flex-col justify-between items-center gap-3 p-3 backdrop-blur-sm w-full h-full rounded-lg svelte-k4b32s"><div class="flex items-center justify-center gap-6 w-full text-slate-200"><img${attr("src", `/${stringify(company.img)}`)} class="size-52"${attr("alt", company.img)}> <div class="flex flex-col items-start"><h2 class="font-bold text-6xl">${escape_html(company.name)}</h2> <h3 class="font-light text-3xl">${escape_html(company.type)}</h3></div></div> `;
    if (activePhase === "a") {
      $$payload2.out += "<!--[-->";
      H2ControlA($$payload2);
    } else {
      $$payload2.out += "<!--[!-->";
      H2Control($$payload2, { maxH2: company.h2, nick: company.nick });
    }
    $$payload2.out += `<!--]--> <div class="flex flex-col w-full">`;
    TabNav($$payload2, {
      activePhase,
      get activeTab() {
        return activeTab;
      },
      set activeTab($$value) {
        activeTab = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----> <div class="flex flex-col p-3 gap-3 w-full bg-gray-100/25 h-68 rounded-lg">`;
    if (activePhase === "a" || activePhase === "b" || activeTab === "infos") {
      $$payload2.out += "<!--[-->";
      CompanyNav($$payload2, {
        navItems,
        get activeItem() {
          return activeItem;
        },
        set activeItem($$value) {
          activeItem = $$value;
          $$settled = false;
        }
      });
      $$payload2.out += `<!----> `;
      CompanyDetails($$payload2, { content: company, activeItem });
      $$payload2.out += `<!---->`;
    } else if (activePhase === "c" || activeTab === "co2") {
      $$payload2.out += "<!--[1-->";
      $$payload2.out += `<div class="flex justify-between items-center px-10"><div class="flex flex-col w-full text-2xl font-bold text-center"><div>Potentielle CO<sub>2</sub>-Einsparung:</div> <div class="font-extrabold text-4xl mt-5 mb-4">${escape_html(company.h2Saving)}</div> `;
      GradientBar($$payload2, { percentage, id: company.id });
      $$payload2.out += `<!----></div></div> <div class="text-xl font-bold">Referenz CO<sub>2</sub> Einsparung: ????</div>`;
    } else if (activePhase === "d" || activeTab === "foerder") {
      $$payload2.out += "<!--[2-->";
      const each_array = ensure_array_like(Array.from({ length: company.pay }, (_, i) => i));
      $$payload2.out += `<div class="flex justify-center gap-20 my-auto"><div class="flex flex-col text-center gap-4 font-bold"><div class="text-3xl">Zahlungsbereitschaft:</div> <div class="text-5xl">${escape_html(company.pay.toFixed(2).replace(".", ","))} € / H<sub>2</sub></div> <div class="flex mx-auto"><!--[-->`;
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        EuroCoin($$payload2, { classes: "size-16 not-first:-ml-6" });
      }
      $$payload2.out += `<!--]--> `;
      if (company.id === 4) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<img src="halfeuro.png" class="h-11 -ml-5 mt-[10px]" alt="euro">`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--></div></div> <div class="flex flex-col text-center gap-4 font-bold"><span class="text-3xl">Förderbedarf:</span> `;
      if (company.support === 0) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<span class="text-5xl">Keinen</span>`;
      } else {
        $$payload2.out += "<!--[!-->";
        const each_array_1 = ensure_array_like(Array.from({ length: company.support }, (_, i) => i));
        $$payload2.out += `<span class="text-5xl">${escape_html(company.support.toFixed(2).replace(".", ","))} € / H<sub>2</sub></span> <div class="flex mx-auto"><!--[-->`;
        for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
          EuroCoin($$payload2, { classes: "size-16 not-first:-ml-6 " });
        }
        $$payload2.out += `<!--]--> `;
        if (company.id === 4) {
          $$payload2.out += "<!--[-->";
          $$payload2.out += `<img src="halfeuro.png" class="h-10 mt-2" alt="euro">`;
        } else {
          $$payload2.out += "<!--[!-->";
        }
        $$payload2.out += `<!--]--></div>`;
      }
      $$payload2.out += `<!--]--></div></div>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--></div></div></section>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  pop();
}
function TotalH2($$payload, $$props) {
  push();
  let { activePhase = void 0 } = $$props;
  const each_array = ensure_array_like(Array.from({ length: 30 }, (_, i) => i));
  const each_array_1 = ensure_array_like(Array.from({ length: totalH2State.availableH2 }, (_, i) => i));
  $$payload.out += `<div class="glass flex justify-center w-2/3 gap-16 p-10 px-20 mt-5 rounded-full items-center"><div class="relative flex flex-col items-center p-10 px-20 rounded-full gap-10"><div class="flex items-center gap-4 text-slate-200 text-3xl font-bold"><div>Verfügbare H<sub>2</sub> Einheiten:</div> <div${attr_class("transition", void 0, { "text-red-400": totalH2State.availableH2 < 1 })}>${escape_html(totalH2State.availableH2)} / 30</div></div> <button class="absolute rounded-full border border-slate-200 p-2 top-8 right-[500px] text-slate-200 active:bg-slate-400 transition">H<sub>2</sub> reset</button> <div class="relative w-full"><div class="flex items-center gap-1"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    $$payload.out += `<div class="bg-cyan-200/10 w-12 h-16 rounded-xl"></div>`;
  }
  $$payload.out += `<!--]--></div> <div class="absolute top-0 flex items-center gap-1"><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    $$payload.out += `<div class="bg-gradient-to-t from-sky-300 to-cyan-200 w-12 h-16 rounded-xl"></div>`;
  }
  $$payload.out += `<!--]--></div></div></div> `;
  if (activePhase === "d") {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="flex flex-col items-center gap-6 font-bold text-slate-200"><div class="text-3xl">Markpreis H<sub>2</sub>:</div> <div class="text-5xl">10,00 € / H<sub>2</sub></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
  bind_props($$props, { activePhase });
  pop();
}
function AdminNav($$payload, $$props) {
  push();
  let phases = ["a", "b", "c", "d"];
  let activePhase = fallback($$props["activePhase"], "a");
  const each_array = ensure_array_like(phases);
  $$payload.out += `<nav class="absolute top-2 left-2 flex gap-2 items-center"><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let phase = each_array[i];
    $$payload.out += `<button${attr_class(`flex items-center justify-center size-6 text-xs text-slate-500 border font-light p-2 rounded-full cursor-pointer ${stringify(activePhase === phase ? "border-slate-500 bg-yellow-200" : "bg-slate-200")}`)}>${escape_html(phase)}</button>`;
  }
  $$payload.out += `<!--]--></nav>`;
  bind_props($$props, { activePhase });
  pop();
}
function Header($$payload, $$props) {
  let activePhase = $$props["activePhase"];
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<header class="flex justify-center items-center w-full">`;
    AdminNav($$payload2, {
      get activePhase() {
        return activePhase;
      },
      set activePhase($$value) {
        activePhase = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----> `;
    TotalH2($$payload2, {
      get activePhase() {
        return activePhase;
      },
      set activePhase($$value) {
        activePhase = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----></header>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { activePhase });
}
function SupportBar($$payload, $$props) {
  push();
  let h2CountSum = 0;
  let translateY = 0;
  $$payload.out += `<section class="flex h-full w-auto gap-2"><div class="flex flex-col items-center h-full"><span class="text-xl font-bold text-slate-200 mb-2">${escape_html(h2CountSum)} €</span> <div class="relative h-full w-24 rounded-3xl bg-slate-200/40 z-20 border border-slate-300/40 overflow-clip"><div class="absolute transition top-0 h-full rounded-2xl z-10 w-full bg-yellow-200"${attr_style(`transform: translateY(${stringify(translateY)}%)`)}></div></div></div> <div class="relative h-full text-slate-200 font-bold text-2xl"><div class="absolute bottom-[80%]">Brücke (Rep)</div> <div class="absolute bottom-[60%]">Sporthalle</div> <div class="absolute bottom-[40%]">Teilsanierung Schule</div> <div class="absolute bottom-[20%]">Spielplatz</div></div></section>`;
  pop();
}
function _page($$payload) {
  let activePhase = "d";
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    const each_array = ensure_array_like(companies);
    $$payload2.out += `<section class="color-bg flex flex-col justify-center gap-24 h-screen pt-2 pb-12 px-6 svelte-1i63h72">`;
    Header($$payload2, {
      get activePhase() {
        return activePhase;
      },
      set activePhase($$value) {
        activePhase = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----> <section class="flex h-full">`;
    if (activePhase === "d") {
      $$payload2.out += "<!--[-->";
      SupportBar($$payload2);
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> <section class="grid grid-cols-3 gap-12 h-10/12 w-10/12 mx-auto"><!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let company = each_array[$$index];
      CompanyCard($$payload2, { company, activePhase });
    }
    $$payload2.out += `<!--]--></section></section></section>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
}
export {
  _page as default
};
