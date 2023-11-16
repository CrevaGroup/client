const calculateAge = (birthdate ) => {
    const birthdateObj = new Date(
      birthdate.year.value,
      birthdate.month.value - 1,
      birthdate.day.value
    );
    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthdateObj.getFullYear();
    const monthDiff = currentDate.getMonth() - birthdateObj.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && currentDate.getDate() < birthdateObj.getDate())
    ) {
      return age - 1;
    }
    return age;
  };

  export default calculateAge
