export default function CurrentDatetime() {
  var today = new Date();
 return today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate();
}