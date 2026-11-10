import type {Category} from "./types";
export type Source={name:string;kind:"rss"|"html";url:string;allowedHosts:string[];language:string;category:Category;selectors?:{link:string;title:string;date?:string}};
export const sources:Source[]=[
{name:"Embassy of Russia in Bangladesh",kind:"html",url:"https://bangladesh.mid.ru/",allowedHosts:["bangladesh.mid.ru"],language:"en",category:"embassy_visa",selectors:{link:"a",title:"a"}},
{name:"Study in Russia",kind:"rss",url:"https://studyinrussia.ru/en/rss/",allowedHosts:["studyinrussia.ru"],language:"en",category:"university_admission"},
{name:"USFEU",kind:"html",url:"https://usfeu.ru/",allowedHosts:["usfeu.ru"],language:"ru",category:"university_admission",selectors:{link:"a",title:"a"}},
{name:"Ministry of Education and Science of Russia",kind:"html",url:"https://minobrnauki.gov.ru/",allowedHosts:["minobrnauki.gov.ru"],language:"ru",category:"russia_news",selectors:{link:"a",title:"a"}},
{name:"Ministry of Internal Affairs of Russia",kind:"html",url:"https://мвд.рф/",allowedHosts:["мвд.рф","xn--b1aew.xn--p1ai"],language:"ru",category:"important_notice",selectors:{link:"a",title:"a"}},
{name:"The Daily Star",kind:"rss",url:"https://www.thedailystar.net/rss.xml",allowedHosts:["thedailystar.net","www.thedailystar.net"],language:"en",category:"bangladesh_russia"},
{name:"Dhaka Tribune",kind:"rss",url:"https://www.dhakatribune.com/feed",allowedHosts:["dhakatribune.com","www.dhakatribune.com"],language:"en",category:"bangladesh_russia"},
{name:"Reuters",kind:"rss",url:"https://feeds.reuters.com/reuters/worldNews",allowedHosts:["reuters.com","www.reuters.com"],language:"en",category:"international_news"}
];
export const relevant=(s:string)=>/student|university|admission|scholarship|visa|immigration|flight|travel|bangladesh.{0,30}russia|russia.{0,30}bangladesh|russian/i.test(s);
