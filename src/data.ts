// Edit your main project details here
export const PROJECT_INFO = {
  name: "SMART & ROCSAR Projects",
  tagline: "ESA REXUS/BEXUS Aerospace Campaigns",
  description: "A high-reliability system designed for aerospace telemetry, synthetic aperture radar (SAR) amplification chains, and microwave hardware deployment at the Esrange Space Center.",
  subsystems: [
    {
      title: "Embedded Firmware & Control",
      description: "Low-latency multicore firmware for RP2040 microcontrollers utilizing C++ and Rust, handling precise hardware timer synchronization.",
      tags: ["RP2040", "C++ / Rust", "FreeRTOS", "MicroPython"]
    },
    {
      title: "Microwave & RF Front-End",
      description: "Custom 5.8 GHz Front-End Modules, directional couplers, and active filtering pipelines printed on Rogers RO4350B substrates.",
      tags: ["5.8 GHz RF", "QPF4559", "LTspice", "openEMS"]
    },
    {
      title: "Telemetry & Instrumentation",
      description: "Real-time ground control interfaces, serial bus servo controls (ST3215), and continuous data acquisition.",
      tags: ["WebSockets", "NixOS", "TypeScript", "4nec2"]
    }
  ]
};

// Add or remove team members here
export const TEAM_MEMBERS = [
  {
    name: "Pedro Cunha",
    role: "Hardware & Firmware Engineering",
    bio: "Engineering student at FEUP focusing on analog/RF circuit design, embedded RP2040 systems, and electromagnetic PCB simulation.",
    skills: ["RP2040", "C++/Rust", "LTspice", "EMerge 3D"]
  },
  {
    name: "Sérgio Reis Cunha",
    role: "Endorsing Professor",
    bio: "Professor at FEUP acting as the endorsing academic authority and advisor for the university space projects.",
    skills: ["FEUP", "Academic Advising", "Project Management"]
  },
  {
    name: "Alberto",
    role: "Berto",
    bio: "Erto",
    skills: ["Al", "Ber", "To"]
  }
];
