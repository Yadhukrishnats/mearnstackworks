var sales_report={}
for(bill of bill_details){
    let bill_date=bill.date
    let bill_amount=bill.bill_amount
    if(bill_date in sales_report){
        sales_report[bill_date]+=bill_amount
    }
    else{
        sales_report[bill_date]=bill_amount
    }
}
console.log(sales_report);