export default function useDateFormatter(temp:string):string {
  const dateTime = new Date(temp);
  const date = `${dateTime.getMonth() + 1}/${dateTime.getDate()}/${dateTime.getFullYear()}`;
  return date;
}
