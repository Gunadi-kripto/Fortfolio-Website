// components/ProfileSection.tsx
// di terminal ketik 'npm install react-icons'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa'; 

const profileData = {
    name: "Gunadi Setiawan",
    age: 19,
    location: "Jakarta",
    role: "programmer",
    contact: "087874963104",
    instagram: "@edwardsetiawan55",
    github: "Gunadi-kripto",
    profilePicture: "/FOTO DIRI.jpg", 
    
    education: [
        { institution: "SMA Cinta Kasih Tzu Chi", major: "MIPA", year: "2021 - 2024" },
        { institution: "Universitas Tarumanagara", major: "Teknik Informatika", year: "2024 - Sekarang" },
    ],

    experiences: [
        { title: "Junior Web Developer Intern", company: "PT. Digital Solusi Abadi", duration: "Jul 2023 - Des 2023", description: "Membantu pengembangan fitur e-commerce menggunakan React dan Node.js. Bertanggung jawab atas optimasi database." },
        { title: "Freelance Graphic Designer", company: "Klien Individu", duration: "Jan 2022 - Sekarang", description: "Mengerjakan desain logo dan aset digital untuk berbagai klien UKM." },
    ],

    skills: [
        "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express.js", 
        "Tailwind CSS", "Bootstrap", "MySQL", "MongoDB", "Git", "Figma"
    ],

    works: [
        { title: "Project E-Commerce", image: "/project1.jpg" },
        { title: "Landing Page Startup", image: "/project2.jpg" },
        { title: "Mobile App UI/UX", image: "/project3.jpg" },
    ]
};

interface ContentBoxProps {
    title: string;
    children: React.ReactNode;
}

const ContentBox: React.FC<ContentBoxProps> = ({ title, children }) => (
    <div className="border-2 border-gray-900 bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-2xl font-bold mb-4 text-gray-900 border-b pb-2 border-gray-300">{title}</h3>
        {children}
    </div>
);

// KOMPONEN BARU UNTUK KONTAK RINGKAS
interface SocialLinkProps {
    href: string;
    label: string;
    icon: React.ReactNode;
    styleClass: string;
    name: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, label, icon, styleClass, name }) => (
    <Link 
        href={href}
        target="_blank" 
        rel="noopener noreferrer" 
        className={`flex items-center gap-2 p-2 px-4 rounded-full text-white transition duration-300 shadow-md text-sm ${styleClass}`}
        aria-label={label}
    >
        <span className="w-5 h-5 flex items-center justify-center">{icon}</span>
        {name}
    </Link>
);


const ProfileSection: React.FC = () => {
    
    return (
        <section className="min-h-screen bg-gray-900 p-8 sm:p-16 flex flex-col items-center justify-center">

            <div className="bg-[#FAF0E6] p-6 sm:p-12 rounded-lg shadow-xl max-w-4xl w-full">

                <div className="text-center mb-10">
                    <div className="text-xl tracking-widest text-gray-500 mb-6">
                        <span className="mr-2">X X X X X X</span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
                        PORTOFOLIO
                    </h2>

                    <div className="text-xl tracking-widest text-gray-500 mt-6">
                        <span className="ml-2">X X X X X X</span>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 mb-12">

                    <div className="w-full sm:w-1/3 flex justify-center">
                        <div className="relative w-40 h-40 sm:w-56 sm:h-56 border-4 border-gray-900 rounded-lg overflow-hidden">
                            <Image
                                src={profileData.profilePicture}
                                alt="Foto Profil Gunadi Setiawan"
                                layout="fill"
                                objectFit="cover"
                                priority
                                className="rounded-md"
                            />
                        </div>
                    </div>

                    <div className="w-full sm:w-2/3 text-center sm:text-left text-gray-800">
                        <p className="text-lg leading-relaxed">
                            Halo semua, terima kasih telah mengizinkan saya memperkenalkan diri. 
                            Nama lengkap saya adalah {profileData.name}.
                            Saya berumur {profileData.age} tahun. Saya berasal dari {profileData.location},
                            Dan saya adalah seorang {profileData.role}.
                        </p>
                    </div>
                </div>

                <hr className="border-t-2 border-gray-400 mb-12" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    
                    <ContentBox title="Pendidikan 🎓">
                        {profileData.education.map((edu, index) => (
                            <div key={index} className="mb-4 last:mb-0 p-3 bg-gray-50 rounded-md border border-gray-200">
                                <p className="font-semibold text-gray-900">{edu.institution}</p>
                                <p className="text-sm text-gray-700">{edu.major}</p>
                                <p className="text-xs text-gray-500 italic">{edu.year}</p>
                            </div>
                        ))}
                    </ContentBox>

                    <ContentBox title="Pengalaman Kerja 💼">
                        {profileData.experiences.map((exp, index) => (
                            <div key={index} className="mb-4 last:mb-0 p-3 bg-gray-50 rounded-md border border-gray-200">
                                <p className="font-semibold text-gray-900">{exp.title} | {exp.company}</p>
                                <p className="text-xs text-gray-500 italic mb-1">{exp.duration}</p>
                                <p className="text-sm text-gray-700">{exp.description}</p>
                            </div>
                        ))}
                    </ContentBox>
                </div>

                <ContentBox title="Keahlian yang Dikuasai 🛠️">
                    <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                        {profileData.skills.map((skill, index) => (
                            <span 
                                key={index} 
                                className="px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-full shadow-md hover:bg-gray-700 transition duration-300"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </ContentBox>

                <ContentBox title="Karya Saya ✨">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {profileData.works.map((work, index) => (
                            <div 
                                key={index} 
                                className="relative w-full h-48 sm:h-64 overflow-hidden rounded-lg shadow-lg group"
                            >
                                <Image
                                    src={work.image}
                                    alt={work.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="transition duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gray-900 bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                                    <p className="text-white text-lg font-bold p-2 text-center">{work.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </ContentBox>
                
                <hr className="border-t-2 border-gray-400 my-12" />

                <ContentBox title="Hubungi Saya 📲">
                    <div className="flex flex-col sm:flex-row justify-center sm:justify-around gap-6 text-center">
                        
                        <SocialLink
                            href={`https://wa.me/62${profileData.contact.substring(1)}`}
                            label="WhatsApp Gunadi Setiawan"
                            icon={<FaWhatsapp />}
                            styleClass="bg-green-500 hover:bg-green-600"
                            name={profileData.contact}
                        />
                        
                        <SocialLink
                            href={`https://instagram.com/${profileData.instagram.substring(1)}`} 
                            label="Instagram Profile"
                            icon={<FaInstagram />}
                            styleClass="bg-pink-500 hover:bg-pink-600"
                            name={profileData.instagram}
                        />

                        <SocialLink
                            href={`https://github.com/${profileData.github}`}
                            label="GitHub Profile"
                            icon={<FaGithub />}
                            styleClass="bg-gray-800 hover:bg-gray-900"
                            name={profileData.github}
                        />
                    </div>
                </ContentBox>

            </div>
        </section>
    );
};

export default ProfileSection;