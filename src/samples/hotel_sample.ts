interface Hotel {
    name: string;
    location: string;
    priceRange: string;
    rating: number;
    amenities: string[];
    rank: number;
}

const HotelSuggestions: Hotel[] = [
    {
        name: "パレスホテル東京",
        location: "丸の内",
        priceRange: "高級",
        rating: 5,
        amenities: ["スパ", "プール", "高級レストラン", "フィットネス"],
        rank: 1
    },
    {
        name: "セルリアンタワー東急ホテル",
        location: "渋谷",
        priceRange: "プレミアム",
        rating: 4,
        amenities: ["レストラン", "バー", "ビジネスセンター", "フィットネス"],
        rank: 2
    },
    {
        name: "相鉄フレッサイン銀座七丁目",
        location: "銀座",
        priceRange: "スタンダード",
        rating: 3,
        amenities: ["朝食ビュッフェ", "コインランドリー", "ビジネスコーナー"],
        rank: 3
    },
    {
        name: "ザ・リッツ・カールトン東京",
        location: "六本木",
        priceRange: "超高級",
        rating: 5,
        amenities: ["スパ", "ルーフトップバー", "フィットネス", "プール"],
        rank: 1
    },
    {
        name: "帝国ホテル東京",
        location: "日比谷",
        priceRange: "高級",
        rating: 5,
        amenities: ["高級レストラン", "ビジネスセンター", "スパ", "ショッピングモール"],
        rank: 1
    },
    {
        name: "ホテルニューオータニ",
        location: "紀尾井町",
        priceRange: "高級",
        rating: 4,
        amenities: ["ガーデン", "プール", "レストラン", "フィットネス"],
        rank: 2
    },
    {
        name: "シャングリ・ラ ホテル 東京",
        location: "丸の内",
        priceRange: "超高級",
        rating: 5,
        amenities: ["スパ", "プール", "フィットネス", "高級ダイニング"],
        rank: 1
    },
    {
        name: "アマン東京",
        location: "大手町",
        priceRange: "超高級",
        rating: 5,
        amenities: ["スパ", "プール", "プライベートダイニング", "フィットネス"],
        rank: 1
    },
    {
        name: "ヒルトン東京",
        location: "新宿",
        priceRange: "高級",
        rating: 4,
        amenities: ["レストラン", "バー", "プール", "フィットネス"],
        rank: 2
    },
    {
        name: "ホテルグランパシフィック LE DAIBA",
        location: "お台場",
        priceRange: "プレミアム",
        rating: 4,
        amenities: ["レストラン", "プール", "ビジネスセンター", "スパ"],
        rank: 2
    },
    {
        name: "三井ガーデンホテル銀座プレミア",
        location: "銀座",
        priceRange: "プレミアム",
        rating: 4,
        amenities: ["ラウンジ", "レストラン", "ビジネスセンター"],
        rank: 2
    },
    {
        name: "ホテル龍名館東京",
        location: "八重洲",
        priceRange: "スタンダード",
        rating: 3,
        amenities: ["ビジネスセンター", "ランドリーサービス", "朝食ビュッフェ"],
        rank: 3
    },
    {
        name: "グランビア京都",
        location: "京都駅",
        priceRange: "プレミアム",
        rating: 4,
        amenities: ["レストラン", "フィットネス", "ビジネスセンター"],
        rank: 2
    },
    {
        name: "アスコット丸の内東京",
        location: "丸の内",
        priceRange: "高級",
        rating: 5,
        amenities: ["キッチン付きスイート", "フィットネス", "レストラン"],
        rank: 1
    },
    {
        name: "ホテルサンルートプラザ新宿",
        location: "新宿",
        priceRange: "スタンダード",
        rating: 3,
        amenities: ["レストラン", "ランドリーサービス", "ビジネスコーナー"],
        rank: 3
    }
];

export default HotelSuggestions;
