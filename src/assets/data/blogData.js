// import images from all-images/blog-img directory
import img01 from "../all-images/blog-img/blog-1.jpg";
import img02 from "../all-images/blog-img/blog-2.jpg";
import img03 from "../all-images/blog-img/blog-3.jpg";

const blogPosts = [
  {
    id: 1,
    title: "Avtomobil sürməyin ən yaxşı yolu",
    author: "Qara",
    date: "12.19.2020",
    time: "21:00",
    imgUrl: img01, 
    description:
      "Avtomobil sürməyin ən yaxşı yolu, təhlükəsizliyi, rahatlığı və məsuliyyətli davranışı ön planda tutaraq sürücülük etməyi nəzərdə tutur. Aşağıda avtomobil sürmək üçün əsas tövsiyələr verilmişdir.",
    quote:
      "Təhlükəsiz avtomobil sürməyin ən yaxşı yolu, hər zaman diqqətli olmaq, qaydalara riayət etmək və yolda həm özünüzün, həm də başqalarının təhlükəsizliyini düşünməkdir.",
  },

  {
    id: 2,
    title: "Avtomobilinizin akkumulyatoru bitibsə",
    author: "Nuran",
    date: "19.05.2022",
    time: "13:00",
    imgUrl: img02, 
    description:
      "Avtomobilinizin akkumulyatoru bitibsə, problemi həll etmək üçün (jump-start metodu) ilə başqa bir avtomobilin köməyindən istifadə edə bilərsiniz. Tullanma kabelləri ilə akkumulyatoru müvəqqəti işə salın və ya akkumulyator yükləyicisi ilə doldurun. Əgər problem həll olunmazsa, yeni akkumulyator əldə etmək üçün texniki xidmət mərkəzinə müraciət edin. Gələcəkdə akkumulyatorun tez bitməsinin qarşısını almaq üçün elektrik cihazlarını avtomobili söndürdükdən sonra yoxlamağı unutmayın.",
    quote:
      "Avtomobilinizin akkumulyatoru bitibsə, panikaya düşməyin. Tullanma kabelləri ilə başqa bir avtomobilin köməyindən istifadə edərək mühərriki işə sala bilərsiniz. Əgər bu mümkün deyilsə, akkumulyatoru yükləyiciyə qoşaraq enerji bərpasını təmin edin. Problem davam edərsə, peşəkar texniki xidmət mərkəzinə müraciət edin. Gələcəkdə bu kimi problemlərin qarşısını almaq üçün elektrik cihazlarını nəzarətdə saxlayın və akkumulyatorun vəziyyətini müntəzəm yoxlayın.",
  },

  {
    id: 3,
    title: "Səyahət etmənin ən yaxşı yolu",
    author: "Fəxri",
    date: "28.11.2024",
    time: "13:00",
    imgUrl: img03,
    description:
      "Səyahət etmənin ən yaxşı yolu, hər bir şəxsin ehtiyaclarına və məqsədinə uyğun olaraq dəyişir. Hər bir nəqliyyat növü fərqli üstünlüklər təklif edir. Uzun məsafələr üçün təyyarə ən sürətli seçim olsa da, yaxın məsafələrdə avtomobillə və ya qatarlə səyahət daha rahat ola bilər. Təbiətə yaxın olmaq istəyənlər üçün velosiped və piyada səyahətləri ən yaxşı seçimdir. Kruizlər isə lüks və əyləncə axtaranlar üçün ideal bir təcrübə təqdim edir. Hər bir səyahət növü özünə görə fərqli təcrübələr və rahatlıqlar təqdim edir.",
    quote:
      "Səyahət etmənin ən yaxşı yolu, yalnız bir növ nəqliyyat vasitəsindən asılı deyil, həm də məqsədinizə, büdcənizə və səyahət etmə tərzinizə uyğun olan yolu seçməkdən keçir. Bəzən ən sürətli və rahat yol təyyarə ola bilər, amma bəzən ən gözəl təcrübə avtomobillə yol alarkən, gözəl mənzərələri izləyərək və yeni yerləri kəşf edərək əldə edilir. Səyahətin ən yaxşı yolu, ruh halınıza və anın təklif etdiyi fürsətlərə uyğun olaraq dəyişir – və bəzən ən gözəl səyahətlər, sadəcə yolda olmaq və hər anın dadını çıxarmaqdır.",
  },
];

export default blogPosts;
