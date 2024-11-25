export function isWorkday(day){
    const today = day;
    switch (today) {
      case "lunes":
        return true;
      case "martes":
        return true;
      case "miércoles":
        return true;
      case "jueves":
        return true;
      case "viernes":
        return true;
      case "sábado":
        return false;
      case "domingo":
        return false;
      default:
        return false;
    }
   }