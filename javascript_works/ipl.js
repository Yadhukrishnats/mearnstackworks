var point_table=[
    {t_name:"csk",pld:10,won:8,loss:2,pts:16},
    {t_name:"dc",pld:11,won:8,loss:3,pts:16},
    {t_name:"rcb",pld:11,won:7,loss:4,pts:14},
    {t_name:"kkr",pld:11,won:5,loss:6,pts:10},
    {t_name:"mi",pld:10,won:8,loss:2,pts:16},
    {t_name:"pk",pld:10,won:8,loss:2,pts:16},
    {t_name:"rr",pld:10,won:8,loss:2,pts:16},
    {t_name:"srh",pld:10,won:8,loss:2,pts:16}






]
var w_count={}
for(let team of point_table){
    if(team.won in w_count){
        w_count[team.won].push(team.t_name)
    }
    else{
        w_count[team.won]=[team.t_name]
    }
}

var is_playing=point_table.some(team=>team.t_name=="csk")
console.log(is_playing);

// sort team wrt loss descending
point_table.sort((team1,team2)=>team2.loss-team1.loss)
console.log(point_table);

// print team details who have max point
var max_point_team=point_table.reduce((team1,team2)=>(team1.pts>team2.pts)?team1:team2)
console.log(max_point_team);