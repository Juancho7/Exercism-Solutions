"""Module for determining if a year is a leap year."""

def leap_year(year):
    """Determine whether a year is a leap year.
    
    :param year: int - year to check.
    :return: bool - True if leap year, False otherwise.
    """
    
    if year % 4 == 0 and year % 100 != 0:
        return True
    if year % 4 == 0 and year % 100 == 0 and year % 400 == 0:
        return True

    return False