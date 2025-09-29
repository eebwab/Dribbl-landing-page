import React from 'react';
import { Linkedin, Twitter, Globe } from 'lucide-react';

const team = [
  {
    name: 'Aruyan Puvanachandran',
    role: 'CEO & Co-Founder',
    bio: 'Pursuing a Bachelors in Computer Science at Toronto Metropolitan University. Passionate about building communities through technology.',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQGSJJXg6_8C7g/profile-displayphoto-shrink_400_400/B4DZb.NfCMGYAg-/0/1748021670364?e=1756339200&v=beta&t=Td1ev7yz1l9JO8Ja7_ndGmOz9PBL8DXfNx34VBD1ydo',
    social: {
      linkedin: '#',
      twitter: '#',
      website: '#'
    }
  },
  {
    name: 'Akram Klai',
    role: 'Co-Founder',
    bio: 'Pursuing a Bachelors in Computer Science at the University of Toronto.',
    image: 'https://media.licdn.com/dms/image/v2/D4E03AQE0cqogdNIkKg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1690724557106?e=1756339200&v=beta&t=BDqommm4-9mjFpQh0YOj3_yZ7G8ZVJiVC1sReXRmt1s',
    social: {
      linkedin: '#',
      twitter: '#',
      website: '#'
    }
  },
  {
    name: 'Nour El Mokhtari',
    role: 'Lead Software Engineer',
    bio: 'Pursuing a Bachelors in Computer Science at Wilfred Laurier University.',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQEt3WM-S0OaFw/profile-displayphoto-shrink_400_400/B56Za34XhBHUAg-/0/1746841729479?e=1756339200&v=beta&t=wHUv_OCt0WKPwHwCYrZjhKPb5U3TEVg-mprWyKG11qw',
    social: {
      linkedin: '#',
      twitter: '#',
      website: '#'
    }
  },
  {
    name: 'Edris Adel',
    role: 'Co-Founder',
    bio: 'Pursuing a Bachelors in Computer Science at Wilfred Laurier University.',
    image: 'https://media.licdn.com/dms/image/v2/D5622AQEhXorpub2Rkw/feedshare-shrink_800/B56ZaSpaFhHgAk-/0/1746217050954?e=2147483647&v=beta&t=bUB9UPIvrXF96NUVu6s12Gm8AuSsV-StMDRfrc6bpO8',
    social: {
      linkedin: '#',
      twitter: '#',
      website: '#'
    }
  },
  {
    name: 'Rishab Nayak',
    role: 'Founding Engineer',
    bio: 'Pursuing Computer Engineering at the University of Waterloo. Passionate about scaling projects to products.',
    image: '/Rishab-zoomed.png',
    social: {
      linkedin: '#',
      twitter: '#',
      website: '#'
    }
  },
  {
    name: 'Azish Qureshi',
    role: 'Founding Engineer',
    bio: 'Pursuing a Bachelors in Computer Science at the University of Guelph. Founded Asteritech, a tech media company',
    image: 'https://media.licdn.com/dms/image/v2/D5635AQHR5145UuIebA/profile-framedphoto-shrink_800_800/B56Zb_hJVnG4Ag-/0/1748043601542?e=1751223600&v=beta&t=2msW4ypN2pzbe8RhyTTMw8ULp5cz0rImt1eA1gsHw1k',
    social: {
      linkedin: '#',
      twitter: '#',
      website: '#'
    }
  },
  {
    name: 'Areesh Khan',
    role: 'Lead Business and Outreach',
    bio: 'Pursuing a Bachelor of Business Administration at the York Schulich School of Business.',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQGc8KN9S94CnQ/profile-displayphoto-shrink_400_400/B56ZSOw_Y4HEAk-/0/1737561995870?e=1756339200&v=beta&t=CxA7jDCejzCKqRBCj1RAUdV3xUPMP9QXKAA5AAt-8yY',
    social: {
      linkedin: '#',
      twitter: '#',
      website: '#'
    }
  },
  {
    name: 'Taisho Yamanaka',
    role: 'Lead Media and Design',
    bio: 'Pursuing a Bachelors in Arts for Film/Video Studies from Sheridan College.',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQGgu_TcubZ8cA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1705970239822?e=1756339200&v=beta&t=VKA0gklW_h6QmMVRRgcr0WKqrDnIuskqFj0B1o-Z_8w',
    social: {
      linkedin: '#',
      twitter: '#',
      website: '#'
    }
  }
];

const Team: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-red-900/30 text-red-300 border-red-800 rounded-full text-sm font-medium border">
              👥 Meet the Team
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              The People Behind{' '}
              <span className="text-red-400">Dribbl</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              We're a diverse team of soccer enthusiasts, tech innovators, and community builders 
              united by our passion for the beautiful game.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group bg-gray-900 rounded-2xl p-6 hover:bg-gray-800 transition-all duration-300 hover:shadow-xl border border-gray-800"
              >
                <div className="text-center space-y-4">
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-gray-800 group-hover:border-red-600 transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-red-400 font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {member.bio}
                    </p>
                  </div>
                  
                  <div className="flex justify-center space-x-3">
                    <a
                      href={member.social.linkedin}
                      className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-colors duration-200"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-colors duration-200"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                    <a
                      href={member.social.website}
                      className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-colors duration-200"
                    >
                      <Globe className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Join Us Section */}
          <div className="mt-20 bg-gray-900 rounded-3xl p-8 lg:p-12 border border-gray-800">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                Join Our Team
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                We're always looking for passionate individuals who share our vision for building 
                the ultimate soccer community platform. If you love soccer and technology, 
                we'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
                  View Open Positions
                </button>
                <button className="px-8 py-4 bg-transparent font-semibold rounded-xl border-2 border-red-600 transition-all duration-200 text-red-400 hover:bg-red-600 hover:text-white">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;