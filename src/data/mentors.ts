import anandKumarPhoto from "@/assets/experts/anand-kumar.webp";
import veenaVijayanPhoto from "@/assets/experts/veena-vijayan.webp";
import taniyaMathewPhoto from "@/assets/experts/taniya-mathew.webp";
import anishThomasPhoto from "@/assets/experts/anish-thomas.webp";

export type Mentor = {
  name: string;
  role: string;
  photo?: string;
};

/** Finprov experts (real, from finprov.com) */
export const mentors: Mentor[] = [
  { name: "CA Anand Kumar H", role: "Founder and Chairman", photo: anandKumarPhoto },
  { name: "CA Veena Vijayan", role: "CEO", photo: veenaVijayanPhoto },
  { name: "CA Taniya Mathew", role: "Academic Head - Kerala", photo: taniyaMathewPhoto },
  { name: "CA Anish Thomas", role: "Academic Head - Karnataka", photo: anishThomasPhoto },
];
