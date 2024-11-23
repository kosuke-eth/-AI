import React from 'react';
import { useTranslation } from 'react-i18next'; // 翻訳フックのインポート

function Tour() {
  const { t } = useTranslation();

  const tours = [
    {
      "id": 1,
      "title": "犬吠埼灯台",
      "description": "太平洋に突き出した犬吠埼は日本の海上交通の最重要の海のみちしるべのひとつ。維新後近代化を進めた明治政府は、海外から技師を招きこの場所に洋式灯台を建設。1874年(明治7)から現在まで海の安全を守るために稼働中だ。",
      "address": "千葉県銚子市犬吠埼9576",
      "category": "観光",
      "image": "https://svcstrg.cld.navitime.jp/imgfile/02301_1804019_01.jpg",
      "link": "https://www.choshikanko.com/kankoDB/%E7%8A%AC%E5%90%A0%E5%9F%BC%E7%81%AF%E5%8F%B0/"
    },
    {
      "id": 2,
      "title": "銚子ポートタワー",
      "description": "360度見渡せる展望室から眼下に行き交う漁船の風景と太平洋、銚子の町を一望できる「銚子ポートタワー」と隣接する水産物即売センター「ウオッセ21」は銚子漁港の観光拠点。",
      "address": "千葉県銚子市川口町2-6529-34",
      "category": "漁港",
      "image": "https://svcstrg.cld.navitime.jp/imgfile/02301_12800037_01.jpg",
      "link": "https://www.choshikanko.com/kankoDB/choshi_porttower/"
    },
    {
      "id": 3,
      "title": "満願寺",
      "description": "坂東札所めぐりをはじめ、西国、秩父、四国を合わせた百八十八霊場巡拝を満願成就した人々が、報恩感謝のために開創した寺院。その年の一番大きな願いを叶えると言われる本尊の「十一面観世音」に加え、百八十八霊場すべての本尊を勧請している。",
      "address": "千葉県銚子市天王台9822-1",
      "category": "神社・寺院",
      "image": "https://svcstrg.cld.navitime.jp/imgfile/02301_12800141_01.jpg",
      "link": "https://www.choshikanko.com/kankoDB/%E6%BA%80%E9%A1%98%E5%AF%BA/"
    },
    {
      "id": 4,
      "title": "銚子電鉄 ぬれ煎餅駅",
      "description": "ローカル鉄道「銚子電鉄」直営のぬれ煎餅直売店。その売上によって鉄道を存続の危機から救った名物のぬれ煎餅をはじめ、手焼き体験も可能。",
      "address": "千葉県銚子市小浜町1753-1",
      "category": "お土産",
      "image": "https://svcstrg.cld.navitime.jp/imgfile/02301_12800214_01.jpg",
      "link": "https://www.choshi-dentetsu.jp/spot/872/"
    },
    {
      "id": 5,
      "title": "観音食堂 丼屋 七兵衛",
      "description": "銚子港に水揚げされる新鮮な魚を使った漬け丼の専門店。刺身、煮魚など豊富なメニューが特徴。",
      "address": "千葉県銚子市飯沼町1-26",
      "category": "飲食",
      "image": "https://svcstrg.cld.navitime.jp/imgfile/02301_3000262_01.jpg",
      "link": "https://www.choshikanko.com/kankoDB/0036/"
    },
    {
      "id": 6,
      "title": "君ヶ浜しおさい公園",
      "description": "犬吠埼から続く美しい白砂青松の浜辺と太平洋の景観を楽しめる公園。",
      "address": "千葉県銚子市君ケ浜8853-3",
      "category": "公園",
      "image": "https://svcstrg.cld.navitime.jp/imgfile/02301_12800269_01.jpg",
      "link": "https://www.choshikanko.com/kankoDB/%E5%90%9B%E3%82%B1%E6%B5%9C%E3%81%97%E3%81%8A%E3%81%95%E3%81%84%E5%85%AC%E5%9C%92/"
    },
    {
      "id": 7,
      "title": "海鹿島海水浴場",
      "description": "太平洋に面した落ち着いた雰囲気の海水浴場で、釣りや散策も楽しめる。",
      "address": "千葉県銚子市海鹿島5255",
      "category": "海水浴場",
      "image": "https://svcstrg2.navitime.jp/imgfile/02301_3000042_01.jpg",
      "link": "https://www.choshikanko.com/kankoDB/%E6%B5%B7%E9%B9%BF%E5%B3%B6%E6%B5%B7%E6%B0%B4%E6%B5%B4%E5%A0%B4/"
    }
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '2.5em', color: '#2c3e50' }}>
        {t('tour.title')}
      </h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
        {tours.map((tour) => (
          <div key={tour.id} style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)', backgroundColor: '#fff' }}>
            <img src={tour.image} alt={tour.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <div style={{ padding: '20px' }}>
              <h2 style={{ fontSize: '1.5em', color: '#34495e', margin: '0 0 10px' }}>{tour.title}</h2>
              <p style={{ color: '#7f8c8d', lineHeight: '1.5' }}>{tour.description}</p>
              <a href={tour.link} target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'center', marginTop: '10px', padding: '10px 20px', backgroundColor: '#2980b9', color: '#fff', borderRadius: '8px', textDecoration: 'none' }}>
                詳細を見る
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tour;


export default Tour;
