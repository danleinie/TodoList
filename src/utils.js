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
  blue: 'bg-blue-200',
  red: 'bg-red-200',
  green: 'bg-green-200',
  purple: 'bg-purple-200',
  yellow: 'bg-yellow-200',
  pink: 'bg-pink-200',
  gray: 'bg-gray-200',
  white: 'bg-white'
}

