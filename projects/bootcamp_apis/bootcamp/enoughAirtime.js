export default function enoughAirtime(projectedUsage, airtimeAvailale) {
    var call = 1.88;
    var data = 12;
    var sms = 0.75;
    let airtimeUsed = 0;
    var projectedAirtimeUsage = projectedUsage.split(',');
    console.log(projectedAirtimeUsage);

    for (var i = 0; i < projectedAirtimeUsage.length; i++) {
        if (projectedAirtimeUsage[i].startsWith('call')) {
            airtimeUsed += call;
        }
        else if (projectedAirtimeUsage[i].startsWith('sms')) {
            airtimeUsed += sms;
        }
        else if (projectedAirtimeUsage[i].startsWith('data')) {
            airtimeUsed += data;
        }
    } const sum = (airtimeUsed > airtimeAvailale) ? 0 : airtimeAvailale - airtimeUsed;
      console.log('R' + airtimeUsed.toFixed(2));
    return 'R' + sum.toFixed(2);

}