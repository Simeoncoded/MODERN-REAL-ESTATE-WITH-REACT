import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'


 export const fethApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '0185fb8c1dmsh93b745225e8e094p1f7a64jsne9e40aa8ff61',
             'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
           }
         
    })

    return data;
 }