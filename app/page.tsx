'use client';
import { FormEvent, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import doctorImage from '../public/dr.jpg'; // Ensure this path is correct or replace it

// Define interfaces for doctor and service data
interface Doctor {
  name: string;
  specialty: string;
  experience: string;
  image: string;
  description: string;
}

interface Service {
  name: string;
  icon: string;
}

// Sample data for doctors
const doctorsData: Doctor[] = [
  {
    name: "Charlotte Smith",
    specialty: "General Physician",
    experience: "19 years experience",
    image: "/char.png", // Replace with actual image path
    description: "Dr. Charlotte Smith has extensive experience in all aspects of adult cardiology, in particular the prevention and treatment of heart attack."
  },
  {
    name: "Adam Smith",
    specialty: "Cardiologist",
    experience: "18 years experience",
    image: "/adam.png", // Replace with actual image path
    description: "Dr. Adam Smith has extensive experience in all aspects of adult cardiology, in particular the prevention and treatment of heart attack."
  },
  {
    name: "Anna Smith",
    specialty: "ENT Specialist",
    experience: "15 years experience",
    image: "/anna.png", // Replace with actual image path
    description: "Dr. Anna Smith has extensive experience in all aspects of adult cardiology, in particular the prevention and treatment of heart attack."
  }
];

// Sample service data with icon paths
const servicesData: Service[] = [
  { name: "Women's Health", icon: '/icons/women.webp' },
  { name: "Blood Glucose Monitoring", icon: '/icons/blood.webp' },
  { name: "Physical Exam", icon: '/icons/physical.webp' },
  { name: "X-Rays", icon: '/icons/xray.png' },
  { name: "Spirometry", icon: '/icons/spiro.webp' },
  { name: "Diabetes", icon: '/icons/diabetes.webp' },
  { name: "High Cholesterol", icon: '/icons/cholestrol.webp' },
  { name: "Covid PCR Test", icon: '/icons/covid.webp' },
  { name: "Weight Loss", icon: '/icons/weight.webp' },
  { name: "Stress Test", icon: '/icons/stress.webp' },
];

// ServiceItem component
const ServiceItem = ({ service }: { service: Service }) => (
  <div className="flex flex-col items-center">
    <Image src={service.icon} alt={service.name} width={64} height={64} className="mb-4 transition-transform transform hover:scale-110 duration-200" />
    <p className="text-center text-gray-800">{service.name}</p>
  </div>
);

// DoctorItem component
const DoctorItem = ({ doctor }: { doctor: Doctor }) => (
  <div className="flex flex-col items-center text-center">
    <Image src={doctor.image} alt={doctor.name} width={150} height={150} className="rounded-full mb-4 transition-transform transform hover:scale-105 duration-300" />
    <h3 className="text-lg font-semibold text-gray-800">{doctor.name}</h3>
    <p className="text-teal-600">{doctor.specialty}</p>
    <p className="text-gray-500 text-sm">{doctor.experience}</p>
    <p className="text-gray-700 mt-2">{doctor.description}</p>
  </div>
);

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitMessage('Thank you for your submission! We will contact you soon.');
  };

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-sky-100 text-gray-900">
      {/* Navbar */}
      <header className="w-full bg-sky-100 p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-semibold text-gray-900">Wellness Clinic</div>
          
          {/* Navbar Links */}
          <nav className="space-x-8 hidden md:flex">
            <Link href="#home" className="hover:text-gray-700">Home</Link>
            <Link href="#about" className="hover:text-gray-700">About</Link>
            <Link href="#services" className="hover:text-gray-700">Services</Link>
            <Link href="#doctors" className="hover:text-gray-700">Doctors</Link>
            <div className="text-gray-700">📞 012-345678</div>
            <Link href="#appointment" passHref>
              <button className="bg-teal-500 text-white px-4 py-2 rounded-full hover:bg-teal-600">
                Appointment
              </button>
            </Link>
          </nav>

          {/* Mobile Hamburger Icon */}
          <button onClick={toggleMenu} className="block md:hidden text-gray-900 focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className={`md:hidden ${isOpen ? 'block' : 'hidden'} p-4 space-y-4`}>
          <Link href="#home" className="block hover:text-gray-700">Home</Link>
          <Link href="#about" className="block hover:text-gray-700">About</Link>
          <Link href="#services" className="block hover:text-gray-700">Services</Link>
          <Link href="#doctors" className="block hover:text-gray-700">Doctors</Link>
          <div className="text-gray-700">📞 012-345678</div>
          <Link href="#appointment" passHref>
            <button className="bg-teal-500 text-white px-4 py-2 rounded-full hover:bg-teal-600 w-full">
              Appointment
            </button>
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between container mx-auto py-24">
        <div className="text-left md:w-1/2">
          <p className="text-lg text-teal-600 mb-4">Welcome to Wellness Clinic</p>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">The Clinic that cares for life and humanity. Discover more about our healthcare services</h1>
          <Link href="#about" passHref>
            <button className="bg-teal-500 text-white px-6 py-3 rounded-full hover:bg-teal-600">
              Discover more
            </button>
          </Link>
        </div>
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <div className="rounded-full overflow-hidden border-4 border-teal-500">
            <Image src={doctorImage} alt="Doctor in the Wellness Clinic" width={300} height={300} className="h-64 w-64 object-cover transition-transform transform hover:scale-105 duration-300" />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-12 px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-4xl font-semibold text-center text-gray-800 mb-4">About Us</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Wellness Clinic is a comprehensive medical clinic located in Forest Park, Georgia. Led by Kris Uboat, MD, a board-certified family medicine practitioner with over 15 years of experience, the practice proudly serves patients in the greater Atlanta metro area.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            Wellness Clinic builds compassionate partnerships with patients of all ages to champion health and wellness.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 px-6 bg-sky-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-semibold text-center text-gray-800 mb-8">Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {servicesData.map((service, index) => (
              <ServiceItem key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="py-12 px-6 bg-sky-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-gray-800 mb-2">Our Doctors</h2>
          <p className="text-lg text-gray-700 mb-8">Effective and best healthcare services</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {doctorsData.map((doctor, index) => (
              <DoctorItem key={index} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="appointment" className="py-12 px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-4xl font-semibold text-center text-gray-800 mb-4">Book an Appointment</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">Name</label>
              <input type="text" id="name" className="w-full p-2 border rounded" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input type="email" id="email" className="w-full p-2 border rounded" required />
            </div>
            <div className="mb-4">
              <label htmlFor="date" className="block text-gray-700">Appointment Date</label>
              <input type="date" id="date" className="w-full p-2 border rounded" required />
            </div>
            <button type="submit" className="bg-teal-500 text-white px-4 py-2 rounded-full hover:bg-teal-600 w-full">
              Book Appointment
            </button>
            {submitMessage && <p className="text-center text-teal-500 mt-4">{submitMessage}</p>}
          </form>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-teal-500 text-white p-3 rounded-full shadow-lg hover:bg-teal-600 transition"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}

      {/* Footer */}
      <footer className="bg-sky-100 py-6 text-center">
        <p className="text-gray-600">© {new Date().getFullYear()} Wellness Clinic. All rights reserved.</p>
      </footer>
    </div>
  );
}
