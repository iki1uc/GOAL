export function buildRespo100(){
    const list = [];
    for(let i=1;i<=100;i++){
        list.push({
            id: i,
            status: "ACTIVE",
            level: "100%",
            type: "LINEAR"
        });
    }
    return list;
}
