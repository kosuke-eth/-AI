import { useTranslation } from 'react-i18next';

function Tour() {
  const { t } = useTranslation();
  const tours = [
    [
      {
        "id": 1,
        "title": "犬吠埼灯台",
        "description": "太平洋に突き出した犬吠埼は日本の海上交通の最重要の海のみちしるべのひとつ。維新後近代化を進めた明治政府は、海外から技師を招きこの場所に洋式灯台を建設。1874年(明治7)から現在まで海の安全を守るために稼働中だ。",
        "address": "千葉県銚子市犬吠埼9576",
        "category": "観光",
        "image": "https://svcstrg.cld.navitime.jp/imgfile/02301_1804019_01.jpg"
      },
      {
        "id": 2,
        "title": "銚子ポートタワー",
        "description": "360度見渡せる展望室から眼下に行き交う漁船の風景と太平洋、銚子の町を一望できる「銚子ポートタワー」と隣接する水産物即売センター「ウオッセ21」は銚子漁港の観光拠点。",
        "address": "千葉県銚子市川口町2-6529-34",
        "category": "漁港",
        "image": "https://svcstrg.cld.navitime.jp/imgfile/02301_12800037_01.jpg"
      },
      {
        "id": 3,
        "title": "満願寺",
        "description": "坂東札所めぐりをはじめ、西国、秩父、四国を合わせた百八十八霊場巡拝を満願成就した人々が、報恩感謝のために開創した寺院。その年の一番大きな願いを叶えると言われる本尊の「十一面観世音」に加え、百八十八霊場すべての本尊を勧請している。",
        "address": "千葉県銚子市天王台9822-1",
        "category": "神社・寺院",
        "image": "https://svcstrg.cld.navitime.jp/imgfile/02301_12800141_01.jpg"
      },
      {
        "id": 4,
        "title": "地球の丸く見える丘展望館",
        "description": "全国トップクラスの水揚げを誇る銚子漁港があるため、港町のイメージがある銚子だが、内陸部には広大な畑が広がっていて、実は農産物でも全国有数の土地。そんな場所の真ん中にあるのがこの展望台だ。",
        "address": "千葉県銚子市天王台1421-1",
        "category": "展望台",
        "image": "https://svcstrg.cld.navitime.jp/imgfile/02301_3000334_01.jpg"
      },
      {
        "id": 5,
        "title": "銚子マリーナ",
        "description": "銚子市潮見町にあるマリーナ。安全講習を受講することで、マリーナとしての利用が可能となる(要海技免許)。敷地内にはバーベキュー場を備えており、「東洋のドーバー」とも呼ばれる屏風ヶ浦の景観とともにバーベキューを楽しめる(要予約)。",
        "address": "千葉県銚子市潮見町15",
        "category": "立ち寄りスポット",
        "image": "https://svcstrg.cld.navitime.jp/imgfile/02301_12800294_01.jpg"
      },
      {
        "id": 6,
        "title": "川口神社",
        "description": "寛和2年(986)創建の古社で、祭神は速秋津姫命。古くから漁業関係者や漁船の守り神として信仰を集めている。",
        "address": "千葉県銚子市川口町2-6378",
        "category": "神社・寺院",
        "image": "https://svcstrg.cld.navitime.jp/imgfile/02301_t9380_01.jpg"
      }
    ]    
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
