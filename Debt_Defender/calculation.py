import math
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

def time_calculation(principal, income, rate):
    taxedIncome = monthlyPaymentCalculator(income)
    return -log(1+rate,(1-principal*rate/taxedIncome))

    def calculate_living_expenses():
    rent = 1641 * 12
    utilities = 51.28 * 12
    food = 13 * 12
    transportation = 237 * 12
    healthcare = 206 * 12
    return rent + utilities + food + transportation + healthcare
 
def income_after_tax(income):
    free_money = salary - (tax_prediction(income) * income) - calculate_living_expenses()
    return free_money
 
def monthly_payment_calculator(income):
    return income_after_tax(income) * .5
 

print(time_calculation(30000,50000,0.058))