 
  function check_type(type){

  
  var array = [
            {
                "type": "A",
                "percentage": 20
            },
            {
                "type": "B",
                "percentage": 35
            },
            {
                "type": "C",
                "percentage": 25
            },
            {
                "type": "D",
                "percentage": 15
            },
            {
                "type": "E",
                "percentage": 19
            }
        ];
        for (let i = 0; i < array.length; i++) {
                let obj = array[i];
                if(obj.type == type){
                    return obj.percentage;
                }               
                   return "NA";
                    }


  }
  function calculate_tax(type,amount){
     var percentage = check_type(type);
    var json_object = {};
     if(percentage !== "NA"){
         let amount_deduction = (percentage*amount)/100;
        let deduction_after_tax = amount - amount_deduction;
         json_object.type = type;
         json_object.total_amount = amount;
         json_object.percentage_deduction = percentage;
         json_object.amount_deducted = amount_deduction;
         json_object.amount_after_tax = deduction_after_tax;
        // console.log(percentage);
     }
     else{
        json_object.type = "NA";
         json_object.total_amount = amount;
         json_object.percentage_deduction = 0;
         json_object.amount_deducted = 0;
         json_object.amount_after_tax = amount;
     }
     return json_object;
  }
  console.log(calculate_tax("A",30000));//
