import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'

function Start() {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const goToHome = () => {
        navigate('/home');
    }
    return (
        <div className="bg-cover bg-center min-h-screen flex flex-col items-center justify-center text-white" style={{ backgroundImage: "url('https://cloudfront-ap-northeast-1.images.arcpublishing.com/sankei/HUUZ4G6A2BKCVOUVWD36NSVP2U.jpg')" }}>
            <div className="bg-black bg-opacity-50 rounded-lg shadow-lg p-8 max-w-lg text-center">
                <h1 className="text-4xl font-bold mb-4">
                    {t('start.title')}
                </h1>
                <p className="text-lg mb-6">
                    {t('start.subtitle')}
                </p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg" onClick={goToHome}>
                    {t('start.button')}
                </button>
            </div>
        </div>
    );
}

export default Start;
