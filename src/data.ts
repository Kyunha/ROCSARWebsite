export const ROCSAR_INFO = {
  name: "ROCSAR",
  tagline: "ROtation Compensated Synthetic Aperture Radar",
  description: "ROCSAR is a BEXUS balloon experiment using compact 5.8 GHz radar to capture sharper ground images from the stratosphere for low-cost Earth observation."
  ,
  objectives: [
    {
      title: "01. SAR",
      desc: "To obtain Synthetic Aperture Radar (SAR) images of the areas surrounding the BEXUS flight path during the ascent and floating phases."
    },
    {
      title: "02. Antennas",
      desc: "To design and test Resonant Cavity Antennas (RCA) for SAR operation."
    },
    {
      title: "03. Rotation Compensation",
      desc: "To design, implement, and test an electromechanical mechanism to compensate for the natural residual rotation of the BEXUS gondola during flight."
    }
  ],

  timeline: [
    { date: "Phase 1", title: "Preliminary Design", desc: "Component selection, LTspice simulations, and openEMS electromagnetic modeling." },
    { date: "Phase 2", title: "Critical Design", desc: "Finalizing PCB layouts, firmware integration, and REXUS/BEXUS panel reviews." },
    { date: "Phase 3", title: "Integration & Testing", desc: "Thermal-vacuum testing, vibration testing, and telemetry validation." },
    { date: "Phase 4", title: "Launch Campaign", desc: "Final payload integration and launch at Esrange Space Center in Kiruna, Sweden." }
  ],

  // Place your project images in the 'public/images/' folder
  designPhotos: [
    { url: "images/design-1.jpg", caption: "5.8 GHz Front-End PCB Layout" },
    { url: "images/design-2.jpg", caption: "RP2040 Telemetry Board" },
    { url: "images/design-3.jpg", caption: "Structural Assembly" }
  ]
};

export const TEAM_MEMBERS = [
  {
    name: "Pedro Cunha",
    role: "Team Leader",
    bio: "",
    skills: ["", "", ""],
    photoUrl: "images/PedroCunha.jpg" // image in public/images/
  },
  {
    name: "Alberto Silva",
    role: "Berto",
    bio: "",
    skills: ["", "", ""],
    photoUrl: "images/AlbertoSilva.jpg"
  },
  {
    name: "Gonçalo Macedo",
    role: "",
    bio: "",
    skills: ["", "", ""],
    photoUrl: "images/GonçaloMacedo.jpg"
  },
  {
    name: "Andre Targa",
    role: "",
    bio: "",
    skills: ["", "", ""],
    photoUrl: "images/AndreTarga.jpeg"
    },
   {
    name: "Beatriz Lourenço",
    role: "",
    bio: "",
    skills: ["", "", ""],
    photoUrl: "images/BeatrizLourenço.jpg"
   },
	{
    name: "Mafalda Santos",
    role: "",
    bio: "",
    skills: ["", "", ""],
    photoUrl: "images/MafaldaSantos.JPG"
   }, 
{
    name: "Rafael Caçoete",
    role: "",
    bio: "",
    skills: ["", "", ""],
    photoUrl: "images/RafaelCaçoete.jpg"
   }, 
];

export const SPONSORS = [
  {
    name: "ESA Education",
    category: "Institutional Partner",
    logoUrl: "assets/sponsors/esa.svg" // Leave as "" if using text fallback
  },
  {
    name: "FEUP",
    category: "Academic Sponsor",
    logoUrl: "sponsors/feup.png"
  },
  {
    name: "Swedish Space Corp",
    category: "Flight Provider",
    logoUrl: "assets/sponsors/ssc.svg"
  },
  {
    name: "ZARM",
    category: "Technical Partner",
    logoUrl: ""
  }
];
