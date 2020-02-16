def yearly_change(principle,  repayment, interest):
    return principle - (repayment-interest*principle)

def total_change(principle, repayment, interest,years):
    a=principle
    for i in range(years):
        a=(interest(principle, repayment, interest))
    return a