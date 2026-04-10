export type ResumeLink = { label: string; url: string };

export type EducationItem = {
  program: string;
  institution: string;
  location?: string;
  period: string;
  highlights?: string[];
  activities?: string[];
};

export type WorkItem = {
  role: string;
  company: string;
  location?: string;
  period: string;
  bullets: string[];
  tech?: string[];
};

export type LeadershipItem = {
  title: string;
  organization: string;
  location?: string;
  period: string;
  bullets: string[];
};

export type ProjectItem = {
  name: string;
  period?: string;
  description: string;
  highlights?: string[];
  tech?: string[];
  links?: ResumeLink[];
};

export type CertificationItem = {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string;
};

export type ResumeData = {
  profile: {
    name: string;
    headline: string;
    location: string;
    email: string;
    phone?: string;
    website?: string;
    photoUrl: string;
    links: ResumeLink[];
    summary: string;
  };
  personal: {
    currently: string;
    availability: string;
    field: string;
    objective: string;
    strengths: string[];
    interests: string[];
    languages: { name: string; level: string }[];
    address: string;
  };
  education: EducationItem[];
  work: WorkItem[];
  leadership: LeadershipItem[];
  awards: { name: string; date: string }[];
  skills: {
    technical: string[];
    tools: string[];
    soft: string[];
  };
  projects: ProjectItem[];
  certifications: CertificationItem[];
  references: { name: string; title: string; organization: string; phone?: string; email?: string }[];
};

export const RESUME: ResumeData = {
  profile: {
    name: "MAITHILLY A/P PARTIBAN",
    headline: "Final Year CS Student (Human-Centered Computing) • AI • Software Engineering",
    location: "Georgetown, Penang, Malaysia",
    email: "maithilly.partiban0623@gmail.com",
    phone: "+60164326596",
    website: "",
    photoUrl: "Maithilly.png",
    links: [
      { label: "LinkedIn", url: "https://linkedin.com/in/maithillypartiban" }
    ],
    summary:
      "An enthusiastic and detail-oriented Computer Science student with a strong academic record (Dean’s List recipient) and proven leadership experience at Universiti Utara Malaysia. Actively involved in academic, co-curricular, and community initiatives, including roles as Deputy Head of Education Exco, Head of Community & International Exco, and director of university-level programs. Seeking an internship opportunity to apply technical knowledge, problem-solving skills, and teamwork capabilities while contributing to organizational success and gaining industry exposure."
  },
  personal: {
    currently: "Final Year Student",
    availability: "September 2026 (Internship)",
    field: "Artificial Intelligence, Software Engineering, Programming",
    objective:
      "Seeking an internship opportunity in the field of Computer Science to apply technical knowledge, problem-solving skills, and teamwork capabilities while contributing to the organization’s success and gaining industry exposure.",
    strengths: [
      "Enthusiastic and detail-oriented",
      "Strong academic performance (Dean’s List)",
      "Leadership and event management experience",
      "Teamwork and communication skills"
    ],
    interests: ["Artificial Intelligence", "Software Engineering", "Programming", "Community initiatives"],
    languages: [
      { name: "English", level: "Proficient" },
      { name: "Bahasa Melayu", level: "Proficient" },
      { name: "Tamil", level: "Basic" },
      { name: "Hindi", level: "Basic" }
    ],
    address: "Georgetown, Penang"
  },
  education: [
    {
      program: "Bachelor’s Degree in Computer Science (Human-Centered Computing) with Honours",
      institution: "Universiti Utara Malaysia (School of Computing)",
      location: "Kedah",
      period: "Oct 2023 – Feb 2027",
      highlights: [
        "Cumulative GPA: 3.87",
        "Dean’s List: Semester 1 (3.89), Semester 2 (3.86), Semester 3 (3.78), Semester 4 (3.85), Semester 5 (4.00)",
      ],
      activities: [
        "Director of Exploring the World in 60 Minutes – A Virtual Cultural Tour 2025 (International)",
        "Director of Ritma Menaip Competition – SOC Carnival 2025 (School/PTJ)",
        "Treasurer of Cybersecurity Sharing Session: Live Demonstration of Phishing Attack 2024 (University)",
        "Treasurer of Dean’s Award Ceremony, School of Computing Semester A231 2024 (School/PTJ)",
        "Deputy Secretary of Arabian Night with SOC 2024 (University)",
        "Committee Member of Jelajah Ilmu Bahasa Inggeris 2.0 (2025) (National)",
        "Committee Member of Industrial Visit to ViTrox 2024 (National)",
        "Committee Member of Jelajah Ilmu Bahasa Inggeris 2024 (National)",
        "Committee Member of CSR Visit to Pertubuhan Kebajikan Anak Kesayangan Penang 2024 (National)",
        "Committee Member of Jelajah IPT Anak Penang 2024 (National)",
        "Committee Member of Speak Up Belia Siswa: Empowering Confidence and Charisma 2024 (National)",
        "Committee Member of UUM X Penangites: Towards a Healthier Community 2023 (National)",
        "Committee Member of Video Production Competition (UUM X Palestine) 2024 (University)",
        "Committee Member of Menjelajah Peluang: Sesi Inspirasi Bersama Alumni 2024 (University)",
        "Committee Member of Sentuhan Ria Raya bersama KPC Penang 2024 (Club)",
        "Committee Member of Jelajah Eras Taylor Swift 2024 (University)",
        "Committee Member of Career Talk: Discovering Your Interests and Talents 2024 (University)",
        "Committee Member of Video Competition: Hidden Gems of Penang 2024 (University)",
        "Committee Member of Risiko Sinergi: Collaborative Risk Management Forum 2024 (University)",
        "Committee Member of Sembang Ilmu: Emcee Pro, Smart Communication & Career Opportunities 2024 (University)",
        "Committee Member of School of Computing Carnival 2024 (University)",
        "Committee Member of School of Computing Carnival: Sarong Je La 2024 (University)",
        "Committee Member of Santai Anak Mami 2024 (University)",
        "Committee Member of E-Usahawan Class: Empowering Entrepreneurs through Digital Marketing 2024 (University)",
        "Committee Member of Maybank International Festival (MIFEST) 2024 (University)"
      ]
    },
    {
      program: "Physical Science (Matriculation)",
      institution: "Kolej Matrikulasi Pulau Pinang",
      location: "Pulau Pinang",
      period: "Jun 2022 – May 2023",
      highlights: [
        "Cumulative GPA: 3.75",
        "3rd Place: State-Level Kabaddi Tournament",
        "1st Place: Penang Matriculation Futsal Tournament",
        "Treasurer of Kabaddi Club",
        "PAL Leader/Mentor for Computer Science"
      ],
      activities: ["Treasurer of Kabaddi Club", "PAL Leader/Mentor for Computer Science"]
    },
    {
      program: "Sijil Pelajaran Malaysia (SPM) / PT3",
      institution: "Sekolah Menengah Kebangsaan (P) St. George",
      location: "Pulau Pinang",
      period: "Jan 2017 – Mar 2022",
      highlights: [
        "Achievements: Frog Asia World-Level Participant (2019); International Chess Tournament 2nd Runner-Up (2021); Karate Kata Inter-School (Gold); Karate 4th Kyu",
        "Leadership: Deputy Head Prefect (2021–2022); President of Chess Club (2021–2022); President of STEM Club (2021–2022); Vice President of Karate Club (2021–2022)"
      ],
      activities: [
        "Deputy Head Prefect of St. George's Girls' School (2021–2022)",
        "President of Chess Club (2021–2022)",
        "President of STEM Club (2021–2022)",
        "Vice President of Karate Club (2021–2022)"
      ]
    },
    {
      program: "Ujian Penilaian Sekolah Rendah (UPSR)",
      institution: "Sekolah Kebangsaan Batu Lanchang",
      location: "Pulau Pinang",
      period: "Jan 2011 – Dec 2016",
      highlights: ["UPSR: 4A 2B", "Tokoh NILAM (2016)"],
      activities: ["Timbalan Ketua Pengawas Pusat Sumber", "AJK Kelab Catur"]
    }
  ],
  work: [
    {
      role: "Drive-Thru Crew (Part-Time, 1 month)",
      company: "McDonald’s Greenlane",
      location: "Penang",
      period: "May 2022 – Jun 2022",
      bullets: [
        "Assisted customers at the drive-thru counter by taking and processing orders efficiently.",
        "Handled cash and electronic payments accurately, ensuring smooth transactions.",
        "Prepared and served food and beverages according to company quality and hygiene standards.",
        "Maintained cleanliness and organization of the work area to ensure a safe and efficient environment.",
        "Delivered excellent customer service by addressing customer needs and ensuring satisfaction."
      ],
      tech: ["Customer Service", "Teamwork", "Time Management"]
    }
  ],
  leadership: [
    {
      title: "Head of Community, Integration, and International Exco",
      organization: "Kelab Patriot Chapter Pulau Pinang, Universiti Utara Malaysia",
      period: "Jan 2024 – Dec 2024",
      bullets: [
        "Led initiatives promoting community engagement, cross-cultural integration, and international collaboration.",
        "Organized and coordinated events to foster unity and inclusivity among members.",
        "Represented the club in external collaborations and strengthened partnerships with student bodies."
      ]
    },
    {
      title: "Deputy Head of Education Exco",
      organization: "Kelab Patriot Chapter Pulau Pinang, Universiti Utara Malaysia",
      period: "Jan 2025 – Dec 2025",
      bullets: [
        "Assisted in planning and executing academic development programs and workshops.",
        "Supported peer learning initiatives and tutoring sessions to enhance student academic performance.",
        "Collaborated with other Excos to organize knowledge-sharing forums and skill-building activities."
      ]
    },
    {
      title: "SOC Buddies (Multimedia Department)",
      organization: "School of Computing, Universiti Utara Malaysia",
      period: "Dec 2023 – Jul 2024",
      bullets: [
        "Supported the School of Computing by hosting and facilitating official school programs.",
        "Assisted in organizing and executing school-level events to ensure smooth operations.",
        "Represented the school in events organized by the department and university."
      ]
    }
  ],
  awards: [{ name: "Tokoh Kokurikulum SOC Sesi A231", date: "Mar 2024" }],
  skills: {
    technical: ["HTML5", "CSS3", "Java (Intermediate)"],
    tools: ["Microsoft Word (Excellent)", "Microsoft Excel (Excellent)", "Microsoft PowerPoint (Excellent)", "Canva (Excellent)"],
    soft: ["Leadership", "Teamwork", "Communication", "Problem-solving", "Event coordination"]
  },
  projects: [
    {
      name: "AI Companion for Eldery",
      period: "2025-2026",
      description:
        "Provides companionship, assistance, and support to elderly individuals. The project aims to enhance the quality of life for seniors by offering a virtual companion that can engage in conversations, provide reminders for medication and appointments, and offer emotional support. This is a grant-funded project under the auspices of the Ministry of Higher Education (KPT).",
      highlights: [
        "AI Chat with Lottie animation using Flutter.",
        "Fall Detection System: Uses accelerometer and ML to detect falls and alert caregivers.",
        "Reminder System: Allows setting medication and appointment reminders for better schedule management.",
        "Healthcare Dashboard: Tracks steps and calories with sensors for user health insights.",
        "Cognitive Game: Stimulates mental activity and provides entertainment for elderly users."
      ],
      tech: ["Flutter", "Dart"]
    }
  ],
  certifications: [
    {
      name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      issuer: "Oracle",
      date: "2025"
    },
    {
      name: "HRD Corp e-LATIh HTML5 and CSS3",
      issuer: "HRD Corp e-LATIh",
      date: "2025"
    },
    {
      name: "CCNA: Introduction to Networks",
      issuer: "Cisco",
      date: "2024"
    }
  ],
  references: [
    {
      name: "Prof. Madya. Dr. Massudi Mahmuddin",
      title: "School of Computing",
      organization: "Universiti Utara Malaysia",
      phone: "04-9285300",
      email: "ady@uum.edu.my"
    },
    {
      name: "Prof. Madya. Noraziah Binti Che Pa",
      title: "School of Computing",
      organization: "Universiti Utara Malaysia",
      phone: "04-9285670",
      email: "aziah@uum.edu.my"
    }
  ]
};
