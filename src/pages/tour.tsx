import { useTranslation } from 'react-i18next';

function Tour() {
  const { t } = useTranslation();
  const tours = [
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
      "title": "銚子電鉄 ぬれ煎餅駅",
      "description": "ローカル鉄道「銚子電鉄」直営のぬれ煎餅直売店。その売上によって鉄道を存続の危機から救った名物のぬれ煎餅をはじめ、手焼き体験も可能。",
      "address": "千葉県銚子市小浜町1753-1",
      "category": "お土産",
      "image": "https://svcstrg.cld.navitime.jp/imgfile/02301_12800214_01.jpg"
    },
    {
      "id": 5,
      "title": "観音食堂 丼屋 七兵衛",
      "description": "銚子港に水揚げされる新鮮な魚を使った漬け丼の専門店。刺身、煮魚など豊富なメニューが特徴。",
      "address": "千葉県銚子市飯沼町1-26",
      "category": "飲食",
      "image": "https://svcstrg.cld.navitime.jp/imgfile/02301_3000262_01.jpg"
    },
    {
      "id": 6,
      "title": "君ヶ浜しおさい公園",
      "description": "犬吠埼から続く美しい白砂青松の浜辺と太平洋の景観を楽しめる公園。",
      "address": "千葉県銚子市君ケ浜8853-3",
      "category": "公園",
      "image": "https://svcstrg.cld.navitime.jp/imgfile/02301_12800269_01.jpg"
    },
    {
      "id": 7,
      "title": "海鹿島海水浴場",
      "description": "太平洋に面した落ち着いた雰囲気の海水浴場で、釣りや散策も楽しめる。",
      "address": "千葉県銚子市海鹿島5255",
      "category": "海水浴場",
      "image": "https://svcstrg2.navitime.jp/imgfile/02301_3000042_01.jpg"
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
              <p style={{ color: '#bdc3c7', fontSize: '0.9em' }}>{tour.address}</p>
              <p style={{ fontWeight: 'bold', fontSize: '1em', margin: '10px 0', color: '#95a5a6' }}>{tour.category}</p>

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
                onClick={() => alert(`${tour.title} を選択しました！`)}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#3498db'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2980b9'}
              >
                詳細を見る
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tour;
