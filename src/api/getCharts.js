
import { baseURlPost, baseURlView } from "./baseAPI";
    
const getCharts = async () => {
   
    const data = await baseURlPost.get("grafik")
    // console.log(data)
    return data;

}

export default getCharts
