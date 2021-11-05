var products=[
    100,"oreo",40,50,
    [101,"50-50",20,60],
    [102,"bourbone",40,1],
    [103,"treat",30,10],
    [104,"arrowroot",30,0],
    [105,"goodday",45,100],
]

// var aval_items=products.filter(item=>item[3]>0)

// var out_stock_name=products.filter(item=>item[3]==0).map(item=>item[1])
// console.log(aval_items);


// var offer_product=products.filter(item=>item[3>50]).map(item=>[item[1],])


// var costly_products=products.reduce((item1,item2)=>item1[2]>item2[2]?item1:item2)
// console.log(costly_products);

// var low_costproducts=products.reduce((item1,item2)=>item1[2]<item2[2]?item1:item2)
// console.log(low_costproducts);

// var search_items=products.find(item=>item[1]=="treat")
// console.log(search_items);

// var is_available=products.some(item=>item[2]<10)
// console.log(is_available);

// Map,filter,sort,reduce,reduceRight,find,some,forEach

products.filter(item=>item[2]>30).forEach(item=>console.log(item))


