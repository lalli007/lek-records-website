export type BookingProfile = {
  slug: string;
  name: string;
  role: string;
  location: string;
  photo: string;
  bio: string;
  techRider: string[];
  contact: {
    email: string | null;
    phone: string | null;
    instagram: string | null;
    soundcloud: string | null;
    ra: string | null;
    bandcamp: string | null;
  };
  links: {
    label: string;
    url: string;
  }[];
};

export const bookingProfiles: BookingProfile[] = [
  {
    slug: "patas",
    name: "Gabriel Patås",
    role: "Producer / DJ / Live",
    location: "Oslo, NO",
    photo: "photo-three",
    bio: "Gabriel Patås er en norsk produsent, DJ og live-musiker som rir knivseggen mellom ekstatisk eufori og stoisk melankoli. Han holder residency på Kafe Hærverk i Oslo og grunnla Lek.Rec i 2022. Han har tidligere gitt ut musikk på label som Aedi Records, Efja og Mind Controlled Rectifier. Som produsent sier han selv at han tar inspirasjon fra den rike klubbmusikkhistorien, med en ekstra forkjærlighet for å blande dub med dagens eksperimentelle lyder.",
    techRider: ["TBA"],
    contact: {
      email: null,
      phone: null,
      instagram: null,
      soundcloud: null,
      ra: null,
      bandcamp: null,
    },
    links: [],
  },
  {
    slug: "kim-durbeck",
    name: "Kim Dürbeck",
    role: "Producer / DJ / Composer",
    location: "Sandefjord, NO",
    photo: "photo-two",
    bio: "Kim Durbeck, also known as Kim Thanh Ngo, is a Norwegian-Vietnamese DJ and electronic music producer based in Sandefjord. With 20 years of experience as a DJ and producer, he can proudly point to having composed music for institutions such as the National Theatre, as well as for film and advertising, and producing music for the group Liar. He has remixed artists such as Ary and Nothing Personal. Kim Dürbeck is also one of the founders of Lek REC, a label that releases underground music beyond Norway's borders.",
    techRider: ["TBA"],
    contact: {
      email: null,
      phone: null,
      instagram: null,
      soundcloud: null,
      ra: null,
      bandcamp: null,
    },
    links: [],
  },
  {
    slug: "larus",
    name: "Lárus Sigurvin",
    role: "Producer / DJ / Live",
    location: "Oslo, NO",
    photo: "photo-one",
    bio: "Lárus er en elektronisk musikkprodusent, komponist, DJ og live-utøver, samt grunnlegger av plateselskapet Lek.Rec.",
    techRider: ["TBA"],
    contact: {
      email: null,
      phone: null,
      instagram: null,
      soundcloud: null,
      ra: null,
      bandcamp: null,
    },
    links: [],
  },
];
