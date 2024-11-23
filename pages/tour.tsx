import { useTranslation } from 'react-i18next';

function Tour() {
  const { t } = useTranslation();
  const tours = [
    {
      id: 1,
      title: "Tokyo Bungee Jumping Adventure",
      description: "Experience the thrill of bungee jumping over stunning landscapes near Tokyo.",
      duration: "2 hours",
      price: "$150",
      image: "https://img.activityjapan.com/10/7361/10000000736101_RBLgaXJ1.jpg"
    },
    {
      id: 2,
      title: "Mount Fuji Hiking Tour",
      description: "Embark on a guided hike up Japan's iconic Mount Fuji and witness breathtaking views.",
      duration: "8 hours",
      price: "$120",
      image: "https://trickytour.jp/themes/tt2021/images/fuji/column-point-walking01.jpg"
    },
    {
      id: 3,
      title: "Kyoto Cycling & Temple Tour",
      description: "Explore Kyoto's historic temples and beautiful streets on a guided cycling tour.",
      duration: "4 hours",
      price: "$75",
      image: "https://www.todaiji.or.jp/wp-content/uploads/2022/02/daibutsuden00.jpg"
    },
    {
      id: 4,
      title: "Traditional Tea Ceremony in Kyoto",
      description: "Immerse yourself in Japanese culture with a traditional tea ceremony led by a tea master.",
      duration: "1.5 hours",
      price: "$50",
      image: "https://halmek.co.jp/media/article/image/84cc787cdd81e9e5a24057832474d6cd.jpg"
    },
    {
      id: 5,
      title: "Nara Deer Park & Temple Tour",
      description: "Visit the historic temples of Nara and interact with the friendly deer in Nara Park.",
      duration: "5 hours",
      price: "$75",
      image: "https://www.noborioji.com/cms/wp-content/uploads/2023/08/sika1-2.jpg"
    },
    {
      id: 6,
      title: "Hakone Scenic Onsen and Art Tour",
      description: "Relax in Hakone’s famous hot springs and explore local art museums with a guided tour.",
      duration: "6 hours",
      price: "$100",
      image: "https://www.club-t.com/ct/kanko/guide/images/k_020/k_020_000.jpg"
    },
    {
      id: 7,
      title: "Scenic Drive Along the Izu Peninsula",
      description: "Enjoy a scenic coastal drive along the Izu Peninsula, with stops at stunning viewpoints.",
      duration: "5 hours",
      price: "$90",
      image: "https://www.abarth.jp/scorpion/wp-content/uploads/2019/06/190628_Abarth_drive_02m.jpg"
    },
    {
      id: 8,
      title: "Tokyo Photography Night Tour",
      description: "Capture the vibrant city lights of Tokyo with a photography tour led by a local guide.",
      duration: "3 hours",
      price: "$60",
      image: "https://www.shutoko.jp/-/media/Images/responsive/customer/fun/lightup/rainbowbridge/slide/rb_1.jpg"
    }
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '2.5em', color: '#2c3e50' }}>
        {t('tour.title')}
      </h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
        {tours.map((tour) => (
          <div 
            key={tour.id} 
            style={{
              borderRadius: '12px', 
              overflow: 'hidden', 
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)', 
              backgroundColor: '#fff',
              transition: 'transform 0.3s, box-shadow 0.3s',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.03)';
              e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.15)';
            }}
          >
            <img 
              src={tour.image} 
              alt={tour.title} 
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
            <div style={{ padding: '20px', textAlign: 'left' }}>
              <h2 style={{ fontSize: '1.5em', color: '#34495e', margin: '0 0 10px' }}>{tour.title}</h2>
              <p style={{ color: '#7f8c8d', marginBottom: '10px', lineHeight: '1.5' }}>{tour.description}</p>
              <p style={{ color: '#bdc3c7', fontSize: '0.9em' }}>{tour.duration}</p>
              <p style={{ fontWeight: 'bold', fontSize: '1.2em', margin: '10px 0', color: '#e74c3c' }}>{tour.price}</p>

              <button 
                style={{
                  backgroundColor: '#2980b9',
                  color: 'white',
                  padding: '12px 20px',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '1em',
                  width: '100%',
                  marginTop: '10px',
                  transition: 'background-color 0.3s'
                }}
                onClick={() => alert(`You have booked ${tour.title}!`)}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#3498db'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2980b9'}
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tour;
