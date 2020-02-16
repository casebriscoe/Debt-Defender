import csv
import psycopg2
import settings

conn = psycopg2.connect(settings.POSTGRES_STRING)
cur = conn.cursor()
data = {}
index = 1
id_x = 1
with open ("SalariesPerJob.csv") as file:
    read = csv.reader(file)
    for row in read:
        major_name = row[0]
        job_one = row[1]
        salary_one = row[2]
        job_two = row[3]
        salary_two = row[4]
        job_three = row[5]
        salary_three = row[6]

        query1 = "INSERT INTO jobs (id, salary, major_id, name) values (%s,%s,%s, %s);"
        params1 = (id_x, salary_one, index, job_one)
        id_x += 1
        params2 = (id_x, salary_two, index, job_two)
        id_x += 1
        params3 = (id_x, salary_three, index, job_three)
        id_x += 1
        cur.execute(query1, params1)
        cur.execute(query1, params2)
        cur.execute(query1, params3)
        index += 1

conn.commit()
conn.close()

