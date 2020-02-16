import requests
import settings
import psycopg2

url = 'http://127.0.0.1:8000/'

def login_test(data): 
    full_url = url + 'login/'
    response = requests.post(full_url, data=data)
    return response

data = {
        'name': "Jill Buttlicker",
        'school': "Maryland",
        'income': 10,
        'commitment': "Full time",
        'major': "Cartwheels",
        'scholarships': 10000,
        'semesters': 12
        }
login_test(data)

#conn = psycopg2.connect(settings.POSTGRES_STRING)
#curr = conn.cursor()
#query = """CREATE TABLE Students(id SERIAL,
#        name VARCHAR(255) NOT NULL,
#        school VARCHAR(255) NOT NULL,
#        income float, commitment VARCHAR(255),
#        major VARCHAR(255), scholarship_amount float,
#        semesters INT);"""

#curr.execute(query)
#conn.commit()
#conn.close()

