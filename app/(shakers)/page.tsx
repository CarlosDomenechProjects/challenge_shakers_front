import Topbar from '@components/Topbar/Topbar';
import ProjectCard from '@components/ProjectCard/ProjectCard';
import Filters from '@components/Filters/Filters';

const projects = [
  {
    logo: '/logos/jaybrand.png',
    title: 'Diseña una app móvil para un SaaS de contabilidad',
    category: 'Desarrollo de apps | Educación',
    price: '25 - 35 €/h',
    tech: ['React', 'GitHub', 'Node.js', 'Figma'],
  },
  {
    logo: '/logos/loginteam.png',
    title: 'Desarrolla una plataforma de e-learning',
    category: 'Desarrollo web',
    price: '30 - 40 €/h',
    tech: ['Vue.js', 'GitHub', 'Node.js', 'Adobe XD'],
  },
];

export default function HomePage() {
  return (
    <main>
      <Topbar />
      <Filters />
      <div style={{ padding: '2rem' }}>
        {projects.map((proj, index) => (
          <ProjectCard key={index} {...proj} />
        ))}
      </div>
    </main>
  );
}
