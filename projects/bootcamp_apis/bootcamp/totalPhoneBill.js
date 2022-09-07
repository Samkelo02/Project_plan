export default function totalPhoneBill(bill)  {
    let total = 0
    let phoneBill = bill.split(", ")
    for (let i=0; i<phoneBill.length; i++)  {
      if(phoneBill[i].startsWith("sms")) {
        total += 0.65
      } else if (phoneBill[i].startsWith("call"))  {
        total += 2.75
      }
    }  return "R" +total.toFixed(2)  
  }