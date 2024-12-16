// import all images from assets/images directory
import img01 from "../all-images/cars-img/nissan-offer.png";
import img02 from "../all-images/cars-img/offer-toyota.png";
import img03 from "../all-images/cars-img/bmw-offer.png";
// import img04 from "../all-images/cars-img/nissan-offer.png";
// import img05 from "../all-images/cars-img/offer-toyota.png";
// import img06 from "../all-images/cars-img/mercedes-offer.png";
// import img07 from "../all-images/cars-img/toyota-offer-2.png";
// import img08 from "../all-images/cars-img/mercedes-offer.png";
import img09 from "../all-images/cars-img/сhevrolet_PNG160.png"
import img10 from "../all-images/cars-img/Range-Rover.png"
import img11 from "../all-images/cars-img/mercedes-benz class.png"
import img12 from "../all-images/cars-img/ford-fusion.png"
import img13 from "../all-images/cars-img/bmw-x5.png"

const carData = [
  {
    id: 1,
    brand: "Nissan",
    rating: 112,
    carName: "Nissan Maxima",
    imgUrl: img01,
    model: "Model-2021",
    price: 350,
    speed: "260kmpl",
    gps: "GPS naviqasiyası",
    seatType: "Oturacaqların isidilməsi",
    automatic: "Avtomatik",
    description:
      " 2021-ci ilin Nissan Maxima, premium sedan segmentində yer alan, yüksək performans və rahatlıq təklif edən bir avtomobildir. Bu model, 3.5 litrlik V6 mühərriklə təchiz olunub və 300 at gücü istehsal edir. 2021 Maxima, 8 pilləli avtomatik transmissiya ilə işləyir və gücü ön təkərlərə ötürür.",
  },

  {
    id: 2,
    brand: "Toyota",
    rating: 102,
    carName: "Toyota Camry",
    imgUrl: img02,
    model: "Model-2022",
    price: 400,
    speed: "260kmpl",
    gps: "GPS naviqasiyası",
    seatType: "Oturacaqların isidilməsi",
    automatic: "Avtomatik",
    description:
      " 2022-ci ilin Toyota Camry, orta ölçülü sedan kateqoriyasında yer alır və rahatlıq, təhlükəsizlik və yanacaq sərfiyyatı ilə diqqət çəkir. Camry, 2.5 litrlik 4 silindrli mühərrik və 3.5 litrlik V6 mühərrik variantları ilə təklif olunur. 4 silindrli versiya 203 at gücü, V6 versiyası isə 301 at gücü istehsal edir. Hər iki mühərrik 8 pilləli avtomatik transmissiya ilə birləşdirilir.",
  },

  {
    id: 3,
    brand: "BMW",
    rating: 132,
    carName: "BMW Z4",
    imgUrl: img03,
    model: "Model-2022",
    price: 650,
    speed: "280kmpl",
    gps: "GPS naviqasiyası",
    seatType: "Oturacaqların isidilməsi",
    automatic: "Avtomatik",
    description:
      " 2022-ci ilin BMW Z4, iki yerlilik roadster dizaynı ilə təqdim olunan sport avtomobilidir. Bu model, 2.0 litrlik turbocharged 4 silindrli və 3.0 litrlik turbocharged 6 silindrli mühərrik variantları ilə güc təklif edir. 4 silindrli versiya 255 at gücü, 6 silindrli versiya isə 382 at gücü istehsal edir. Z4, sürətli və çevik idarəetmə təmin edir, 0-dan 100 km/saat sürətə yalnız 4.4 saniyədə çata bilir.",
  },

  {
    id: 4,
    brand: "Chevrolet",
    rating: 102,
    carName: "Chevrolet Camaro",
    imgUrl: img09,
    model: "Model-2017",
    price: 450,
    speed: "280kmpl",
    gps: "GPS naviqasiyası",
    seatType: "Oturacaqların isidilməsi",
    automatic: "Avtomatik",
    description:
      " Chevrolet Camaro 2017, modern dizaynı və güclü performansı ilə fərqlənən bir sport avtomobilidir. Bu model, sürücüsünə dinamik və əyləncəli bir təcrübə təqdim edir, güclü mühərriklər və sürətli idarəetmə imkanları ilə yüksək performans göstərir. Camaro 2017, həmçinin aerodinamik dizaynı və qabaqcıl texnologiyaları ilə göz oxşayır. Avtomobilin interyeri yüksək keyfiyyətli materiallarla təchiz olunub, komfortlu oturacaqlar və müasir infotainment sistemi ilə təmin edilir. Təhlükəsizlik baxımından da güclü xüsusiyyətlərə malikdir və sürücülərə etibarlı bir sürüş təcrübəsi təmin edir.",
  },

  {
    id: 5,
    brand: "Land-Rover",
    rating: 94,
    carName: "Land-Rover Range-Rover",
    imgUrl: img10,
    model: "Model-2013",
    price: 650,
    speed: "280kmpl",
    gps: "GPS naviqasiyası",
    seatType: "Oturacaqların isidilməsi",
    automatic: "Avtomatik",
    description:
      " 2013-cü ilin Range Rover, lüks və performanslı SUV seqmentindəki ikonalarından biridir. Bu model, yeni alüminium döküm şassisi ilə daha yüngül və davamlıdır, əvvəlki versiyalara nisbətən daha yüksək yanacaq sərfiyyatı təklif edir. 2013 Range Rover, həmçinin inkişaf etmiş torpaq sürüş qabiliyyətinə və yüksək səviyyədə komfort təmin edən interyerə malikdir.",
  },

  {
    id: 6,
    brand: "Mercedes",
    rating: 119,
    carName: "Mercedes-Benz C-Class",
    imgUrl: img11,
    model: "Model-2019",
    price: 550,
    speed: "300kmpl",
    gps: "GPS naviqasiyası",
    seatType: "Oturacaqların isidilməsi",
    automatic: "Avtomatik",
    description:
      " 2019-cu ilin Mercedes-Benz C-Class, premium sedan segmentində yüksək komfort, şık dizayn və qabaqcıl texnologiyalar təklif edən bir avtomobildir. Bu model, həm performans, həm də sürüş rahatlığı baxımından üstün xüsusiyyətlərə sahibdir. 2019 C-Class, müxtəlif mühərrik variantları ilə təklif olunurdu, o cümlədən 2.0 litrlik 4 silindrli turbocharged mühərrik, həmçinin daha güclü AMG C-Class versiyaları mövcuddur.",
  },

  {
    id: 7,
    brand: "Ford",
    rating: 82,
    carName: "Ford Fusion",
    imgUrl: img12,
    model: "Model-2015",
    price: 300,
    speed: "240kmpl",
    gps: "GPS naviqasiyası",
    seatType: "Oturacaqların isidilməsi",
    automatic: "Avtomatik",
    description:
      " 2015-ci ilin Ford Fusion, orta ölçülü sedan olaraq həm komfortlu, həm də enerjiyə qənaətcil bir seçim təklif edir. Fusion, şık dizaynı, qabaqcıl texnologiyaları və yaxşı sürüş keyfiyyəti ilə diqqət çəkir. Bu model, həm benzinli, həm də hibrid mühərrik variantları ilə mövcuddur. Fusion, 2.5 litrlik 4 silindrli mühərriklə standart təklif olunur, amma 1.5 litrlik turbocharged 4 silindrli mühərrik və 2.0 litrlik turbocharged mühərrik variantları da mövcuddur. Hibrid versiyası isə daha yaxşı yanacaq sərfiyyatı təmin edir.",
  },

  {
    id: 8,
    brand: "BMW",
    rating: 52,
    carName: "BMW X5",
    imgUrl: img13,
    model: "Model-2024",
    price: 1000,
    speed: "340kmpl",
    gps: "GPS naviqasiyası",
    seatType: "Oturacaqların isidilməsi",
    automatic: "Avtomatik",
    description:
      "2024-cü ilin BMW X5 modeli lüks və müasir bir SUV olaraq bir sıra yeniliklərlə təchiz edilib. Xarici görünüşdə yeni işıqlandırma, yenilənmiş radiator barmaqlığı və daha zərif dizaynı ilə diqqət çəkir. İç məkanda isə 12.3 düymlük rəqəmsal göstərici paneli və 14.9 düymlük ekranla təchiz edilmiş yeni BMW Curved Display sistemi mövcuddur. Bu yeniliklər, BMW-nin iDrive 8 infotainment sistemi və Highway Assist kimi funksiyaları ilə dəstəklənir ki, bu da bəzi yollarda həngsiz sürüş təcrübəsi təqdim edir.",
  },
];

export default carData;
