import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

function Home() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <div style={{
            padding: '60px 20px',
            fontFamily: 'Arial, sans-serif',
            maxWidth: '1200px',
            margin: '0 auto',
            backgroundColor: '#f8f9fa',
            borderRadius: '12px',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)'
        }}>
            <h1 style={{
                textAlign: 'center',
                marginBottom: '20px',
                color: '#1a1a1a',
                fontSize: '3em',
                fontWeight: 'bold',
                letterSpacing: '-1px'
            }}>
                {t('home.title')}
            </h1>

            <p style={{
                textAlign: 'center',
                marginBottom: '50px',
                color: '#555',
                fontSize: '1.2em'
            }}>
                {t('home.description')}
            </p>

            {/* AI Planner and Tours Buttons */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '30px',
                flexWrap: 'wrap',
                marginBottom: '60px'
            }}>
                <div style={{ textAlign: 'center' }}>
                    <button 
                        style={{
                            backgroundColor: '#00796B',
                            color: 'white',
                            padding: '15px 50px',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontSize: '1.2em',
                            fontWeight: 'bold',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
                            transition: 'background-color 0.3s, transform 0.3s'
                        }}
                        onClick={() => navigate('/planning')}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#00695c'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#00796B'}
                    >
                        {t('home.button1')}
                    </button>
                    <p style={{ marginTop: '15px', color: '#777', fontSize: '1em' }}>
                        {t('home.button1Description')}
                    </p>
                </div>

                <div style={{ textAlign: 'center' }}>
                    <button 
                        style={{
                            backgroundColor: '#0052CC',
                            color: 'white',
                            padding: '15px 50px',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontSize: '1.2em',
                            fontWeight: 'bold',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
                            transition: 'background-color 0.3s, transform 0.3s'
                        }}
                        onClick={() => navigate('/tour')}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0044b3'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0052CC'}
                    >
                        {t('home.button2')}
                    </button>
                    <p style={{ marginTop: '15px', color: '#777', fontSize: '1em' }}>
                        {t('home.button2Description')}
                    </p>
                </div>
            </div>

            {/* Popular Destinations Section */}
            <h2 style={{
                textAlign: 'center',
                marginBottom: '20px',
                color: '#333',
                fontSize: '2em',
                fontWeight: 'bold',
                letterSpacing: '-0.5px'
            }}>
                {t('home.trendtitle')}
            </h2>
            <p style={{ textAlign: 'center', marginBottom: '30px', color: '#666' }}>
                {t('home.trenddescription')}    
            </p>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '30px',
                marginBottom: '50px'
            }}>
                {[
                    { city: 'Tokyo', imageUrl: 'https://travel.rakuten.co.jp/mytrip/sites/mytrip/files/styles/main_image/public/migration_article_images/ranking/spot-tokyo-key.jpg?itok=VGK6-LNo' },
                    { city: 'Osaka', imageUrl: 'https://cdn.cheapoguides.com/wp-content/uploads/sites/3/2020/06/osaka-dotonbori-iStock-1138049211-1024x683.jpg' },
                    { city: 'Fukuoka', imageUrl: 'https://www.cathaypacific.com/content/dam/focal-point/cx/inspiration/2023/12/CXI1223-A-guide-to-Fukuoka-for-every-type-of-traveller-food-fukuoka-japan-explore-Gettyimages-HERO.renditionimage.900.600.jpg' },
                    { city: 'Kyoto', imageUrl: 'https://boutiquejapan.com/wp-content/uploads/2019/07/yasaka-pagoda-higashiyama-kyoto-japan.jpg' }
                ].map((destination, index) => (
                    <div key={index} style={{
                        position: 'relative',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
                        transition: 'transform 0.3s, box-shadow 0.3s'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.03)';
                        e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.15)';
                    }}>
                        <img src={destination.imageUrl} alt={destination.city} style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                        }} />
                        <span style={{
                            position: 'absolute',
                            bottom: '15px',
                            left: '15px',
                            color: 'white',
                            fontSize: '1.4em',
                            fontWeight: 'bold',
                            backgroundColor: 'rgba(0, 0, 0, 0.6)',
                            padding: '5px 10px',
                            borderRadius: '6px'
                        }}>
                            {destination.city} 🇯🇵
                        </span>
                    </div>
                ))}
            </div>
            {/*
            <h2 style={{
                textAlign: 'center',
                marginBottom: '30px',
                color: '#333',
                fontSize: '2em',
                fontWeight: 'bold'
            }}>
                {t('Get Inspired for Your Next Trip!')}
            </h2>
            <div style={{
                display: 'flex',
                overflowX: 'auto',
                gap: '20px',
                paddingBottom: '10px',
                scrollSnapType: 'x mandatory'
            }}>
                {[
                    { 
                        title: 'Top 5 Ski Towns', 
                        description: 'Discover stunning ski areas around the world.', 
                        imageUrl: 'https://www.hokkaidobackcountryclub.com/wp-content/uploads/20220210-Rusutsu-HBC-DSC01889-105-1500x630.jpg' 
                    },
                    { 
                        title: 'Best Rooftop Bars in Bangkok', 
                        description: 'Explore scenic views and cocktails in Bangkok.', 
                        imageUrl: 'https://miro.medium.com/v2/resize:fit:1400/0*nEHBImvSubxChLiH' 
                    },
                    { 
                        title: 'Luxurious Resorts in Korea', 
                        description: 'Uncover the beauty of Korea with these top resorts.', 
                        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3zuRHgRU3vPNJdt6Xak3dP9kHdgxxqw9PqQ&s' 
                    }
                ].map((article, index) => (
                    <div key={index} style={{
                        minWidth: '300px',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
                        backgroundColor: '#fff',
                        transition: 'transform 0.3s',
                        scrollSnapAlign: 'center'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                        <img src={article.imageUrl} alt={article.title} style={{
                            width: '100%',
                            height: '200px',
                            objectFit: 'cover'
                        }} />
                        <div style={{ padding: '15px' }}>
                            <h3 style={{ fontSize: '1.3em', marginBottom: '10px', color: '#333' }}>
                                {t(article.title)}
                            </h3>
                            <p style={{ color: '#555', fontSize: '0.9em' }}>{t(article.description)}</p>
                        </div>
                    </div> 
                ))} 
            </div> */}
        </div>
    );
}

export default Home;
