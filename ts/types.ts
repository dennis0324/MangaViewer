export interface Props {
  data:galleryData;
}


export interface galleryData {
  url: string;
  title: string;
  artist: string;
  group: string;
  type: string;
  tags: string[];
  language: string;
  date:string;
  sitetype:string;
}
