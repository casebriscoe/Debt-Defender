import math
import sys

def tax_prediction(income):
    if(income<9875):
        return 0.1
    if(income<40125):
        return 0.12
    if(income<85525):
        return 0.22
    if(income<163300):
        return 0.24
    if(income<207350):
        return 0.32
    if(income<518400):
        return 0.35
    return 0.37

def time_calculation(principal, income, rate=0.58):
    counter = 0
    income = income[0]
    principal_temp = principal
    while(principal_temp > 0):
        principal_temp = leftover_cost(principal_temp, income, rate)
        if(counter == 1 and principal < principal_temp):
            counter = -1
            break
        counter += 1
        if(counter >= 1200):
            break;
    dictionary = {'monthly_payment' : monthly_payment_calculator(income), 'tax_bracket' : tax_prediction(income),
                  'principal' : principal, 'num_of_months' : counter, 'leftover_income' : income_after_tax(income),
                  'living_expenses' : calculate_living_expenses(), 'years': counter/12}
    return dictionary

def leftover_cost(principal, income, rate):
    monthly_payment = monthly_payment_calculator(income)
    monthly_interest = (principal * rate) / 12
    principal_payment = monthly_payment - monthly_interest
    return principal - principal_payment


def calculate_living_expenses():
    rent = 1641 * 12
    utilities = 51.28 * 12
    food = 13 * 12
    transportation = 237 * 12
    healthcare = 206 * 12
    total = rent + utilities + food + transportation + healthcare
    return total

def income_after_tax(income):
    leftover_income = income - (tax_prediction(income) * income) - calculate_living_expenses()
    return leftover_income

def monthly_payment_calculator(income):
    payment = (income_after_tax(income) * .5) / 12
    return payment

def main(data, job_income):
    principal = total_debt(data)
    return time_calculation(principal, job_income)

def total_debt(data):
    sum=data['book_costs']+data['personal_expenses']+data['room_and_board']+data['transportation']-data['income']-data['scholarships']
    if(data['residency'].lower()=='in state'):
        sum+=data['instate_tuition']
    else:
        sum+=data['oos_tuition']
    return data['semesters']*sum/2
#################//#####main(int(sys.argv[1]), int(sys.argv[2]), float(sys.argv[3]))
