import psycopg2
import settings

conn = psycopg2.connect(settings.POSTGRES_STRING)
cur = conn.cursor()

# query = """select column_name,data_type 
# from information_schema.columns 
# where table_name = 'majors';"""

query = """CREATE TABLE majors(
    id integer PRIMARY KEY,
    name VARCHAR(255) NOT NULL
    );"""

cur.execute(query)
#print(cur.fetchall())
conn.close()
