export const ROCSAR_INFO = {
  name: "ROCSAR Experiment",
  tagline: "ESA REXUS/BEXUS Launch Campaign Payload",
  description: "ROCSAR is an experimental aerospace payload designed to test and validate a 5.8 GHz Synthetic Aperture Radar (SAR) amplification chain in sub-orbital flight conditions.",
  
  objectives: [
    {
      title: "01. RF Front-End Validation",
      desc: "Demonstrate high-fidelity 5.8 GHz signal amplification using QPF4559 modules and directional couplers printed on Rogers RO4350B substrates."
    },
    {
      title: "02. Embedded Telemetry",
      desc: "Maintain deterministic hardware timer synchronization and high-speed data acquisition using multicore RP2040 architecture."
    },
    {
      title: "03. Extreme Environment Operation",
      desc: "Survive and operate through the intense vibration, thermal shifts, and vacuum conditions of an Esrange Space Center launch."
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
    name: "",
    role: "",
    bio: "",
    skills: ["", "", ""],
    photoUrl: "images/member-1.jpg" // Put this image in public/images/
  },
  {
    name: "",
    role: "",
    bio: "",
    skills: ["", "", ""],
    photoUrl: "images/member-2.jpg"
  },
  {
    name: "",
    role: "",
    bio: "",
    skills: ["", "", ""],
    photoUrl: "images/member-3.jpg"
  }
];
