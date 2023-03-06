
const get_Last_Publish = (arr) =>{
    return Math.max(...arr)

}
const get_author_names = (arr) =>{
    let data = []
    
    arr.map((i)=>{
        data.push(i)

    })
 
    return data
}
export const generate_Data = (arr) =>{
    console.log(arr)
    let data  = []
    arr.map((i)=>{
        
        data.push({
            key:i.key,
        title:i.title + (i.subtitle?i.subtitle:""),
        author:get_author_names(i.author_name),
        first_pub:i.first_publish_year,
        last_pub:get_Last_Publish(i.publish_year)
    })

    })
    console.log("ASDas",data)
   
    return data;
}

export const generateLastPublish = (arr) =>{
    let cnt;
    let data  = {}
    arr.map((i)=>{
        data[i.key]=get_Last_Publish(i.publish_year);
        console.log(i.key)
    })
    return data;
}