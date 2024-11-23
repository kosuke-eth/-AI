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
        </div>
    );
}

export default Home;

