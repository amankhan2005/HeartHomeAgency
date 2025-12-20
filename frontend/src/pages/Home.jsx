 import React from 'react';
  import Hero from '../components/Hero';
import AboutPreview from '../components/AboutPreview';
import ServicesGrid from '../components/ServicesGrid';
 import FAQPreview from '../components/FAQPreview';
import ContactForm from '../components/ContactSection';
 import Footer from '../components/Footer';
 import AboutSection from '../components/AboutSection';
import InsurancePartners from '../components/InsurancePartners';
import TeamSection  from '../components/teamMembers';
export default function Home(){
return (
<div>
 
 <AboutPreview />
<ServicesGrid />
<AboutSection />
<InsurancePartners />
<TeamSection />
 <FAQPreview />
 
  
</div>
);
}