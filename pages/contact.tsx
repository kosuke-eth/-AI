import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();

  return (
    <div style={{
      padding: '40px',
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px',
      margin: '0 auto',
      backgroundColor: '#fff',
      borderRadius: '12px',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)'
    }}>
      <h1 style={{
        textAlign: 'center',
        marginBottom: '30px',
        color: '#2d3436',
        fontSize: '2.5em',
        fontWeight: 'bold'
      }}>
        {t('contact.title')}
      </h1>
      
      <p style={{
        textAlign: 'center',
        marginBottom: '40px',
        color: '#636e72',
        fontSize: '1.1em'
      }}>
        {t('contact.description')}
      </p>

      <form style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '20px'
      }}>
        {/* Name Field */}
        <div style={{ gridColumn: '1 / span 2' }}>
          <label style={{ display: 'block', marginBottom: '5px', color: '#2d3436' }}>
            {t('contact.name')}
          </label>
          <input 
            type="text" 
            placeholder={t('contact.namePlaceholder')} 
            style={{
              width: '100%',
              padding: '12px',
              fontSize: '1em',
              borderRadius: '8px',
              border: '1px solid #ddd'
            }} 
          />
        </div>

        {/* Email Field */}
        <div>
          <label style={{ display: 'block', marginBottom: '5px', color: '#2d3436' }}>
            {t('contact.email')}
          </label>
          <input 
            type="email" 
            placeholder={t('contact.emailPlaceholder')} 
            style={{
              width: '100%',
              padding: '12px',
              fontSize: '1em',
              borderRadius: '8px',
              border: '1px solid #ddd'
            }} 
          />
        </div>

        {/* Phone Field */}
        <div>
          <label style={{ display: 'block', marginBottom: '5px', color: '#2d3436' }}>
            {t('contact.phone')}
          </label>
          <input 
            type="tel" 
            placeholder={t('contact.phonePlaceholder')} 
            style={{
              width: '100%',
              padding: '12px',
              fontSize: '1em',
              borderRadius: '8px',
              border: '1px solid #ddd'
            }} 
          />
        </div>

        {/* Subject Field */}
        <div style={{ gridColumn: '1 / span 2' }}>
          <label style={{ display: 'block', marginBottom: '5px', color: '#2d3436' }}>
            {t('contact.subject')}
          </label>
          <input 
            type="text" 
            placeholder={t('contact.subjectPlaceholder')} 
            style={{
              width: '100%',
              padding: '12px',
              fontSize: '1em',
              borderRadius: '8px',
              border: '1px solid #ddd'
            }} 
          />
        </div>

        {/* Message Field */}
        <div style={{ gridColumn: '1 / span 2' }}>
          <label style={{ display: 'block', marginBottom: '5px', color: '#2d3436' }}>
            {t('contact.message')}
          </label>
          <textarea 
            placeholder={t('contact.messagePlaceholder')} 
            style={{
              width: '100%',
              padding: '12px',
              fontSize: '1em',
              height: '150px',
              borderRadius: '8px',
              border: '1px solid #ddd',
              resize: 'vertical'
            }} 
          />
        </div>

        {/* Submit Button */}
        <div style={{ gridColumn: '1 / span 2', textAlign: 'center', marginTop: '20px' }}>
          <button type="submit" style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '12px 30px',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '1.2em',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
            transition: 'background-color 0.3s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#45a049'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4CAF50'}>
            {t('contact.submit')}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
