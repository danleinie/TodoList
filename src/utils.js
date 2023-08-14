export const formattedDate = (date) => {
    const inputDate = new Date(date);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('es-ES', options).format(inputDate);
    const parts = formattedDate.split(' ');
    const day = parts[0];
    const month = parts[2];
    const year = parts[4];
    const modifiedFormattedDate = `${day} ${month}, ${year}`;
    return modifiedFormattedDate;
} 
  
export const colorVariants = {
  blue: 'bg-blue-300',
  red: 'bg-red-300',
  green: 'bg-green-300',
  purple: 'bg-purple-300',
  yellow: 'bg-yellow-300',
  pink: 'bg-pink-300',
  gray: 'bg-gray-300',
  white: 'bg-white'
}