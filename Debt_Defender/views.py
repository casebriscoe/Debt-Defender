from django.http import HttpResponse, JsonResponse
from django.shortcuts import redirect
from django.views.decorators.csrf import csrf_exempt
import psycopg2
import json
from django.core.serializers.json import DjangoJSONEncoder
from . import calculation
from . import settings

@csrf_exempt
def login(request):
    if request.method != 'POST':
        return redirect('/')

    name = request.POST['name']
    school = request.POST['school']
    income = request.POST['income']
    commitment = request.POST['commitment']
    major = request.POST['major']
    scholarship_amount = request.POST['scholarships']
    total_semesters = request.POST['semesters']

    params = (name, school, income, commitment, 
            major, scholarship_amount, total_semesters)

    conn = psycopg2.connect(settings.POSTGRES_STRING)
    curr = conn.cursor()
    query = """INSERT INTO Students 
                  (name, school, income, commitment, major,
                   scholarship_amount, semesters) VALUES
                   (%s, %s, %s, %s, %s, %s, %s);"""
                   
    curr.execute(query, params)
    conn.commit()

    second_query = """SELECT id FROM Students ORDER BY id DESC LIMIT 1;"""
    curr.execute(second_query)
    row = curr.fetchone()
    data = {'id': row[0]}
    
    conn.close()

    return JsonResponse(data)

@csrf_exempt
def get_student_info(request):
    if request.method != 'POST':
        return redirect('/')

    ID = request.POST['id']

    conn = psycopg2.connect(settings.POSTGRES_STRING)
    cur = conn.cursor()
    params = (ID)
    
    cur.execute("SELECT * FROM Students WHERE id = %s;", params)
    row = cur.fetchone()
    data = {
            'id': row[0],
            'name': row[1],
            'school': row[2],
            'income': row[3],
            'commitment': row[4],
            'major': row[5],
            'scholarships': row[6],
            'semesters': row[7]
            }

    return JsonResponse(data)

@csrf_exempt
def user_and_school_info(request):
    if request.method != 'POST':
        return redirect('/')

    _id = request.POST.get('_id')
    print(str(_id))
    query = """SELECT * FROM Students JOIN Schools
    ON Students.School = Schools.Name WHERE Students.id = %s;"""
    params = (_id)
    conn = psycopg2.connect(settings.POSTGRES_STRING)
    cur = conn.cursor()
    cur.execute(query, params)
    row = cur.fetchone()
    conn.close()
    data = {
            'id': row[0],
            'name': row[1],
            'school': row[2],
            'income': row[3],
            'commitment': row[4],
            'major': row[5],
            'scholarships': row[6],
            'semesters': row[7],
            'bookcosts': row[10],
            'personalexpenses': row[11],
            'in_state_tuition': row[12],
            'out_of_state_tuition': row[13],
            'room_and_board': row[14],
            'off_campus_housing': row[15],
            'books': row[16],
            'dining': row[17],
            'transportation': row[18]
            }
    return JsonResponse(data)    


def debt_info(request):
    if request.method != 'GET':
        return redirect('/')
    id = request.GET.get('id')

    query = """SELECT * FROM Students JOIN Schools
    ON Students.School = Schools.Name WHERE Students.id = %s;"""

    conn = psycopg2.connect(settings.POSTGRES_STRING)
    cur = conn.cursor()
    params = (id)
    cur.execute(query, params)
    row = cur.fetchone() 
    print(row)
    data = {
            'id': row[0],
            'name': row[1],
            'school': row[2],
            'income': row[3],
            'commitment': row[4],
            'major': row[5],
            'scholarships': row[6],
            'semesters': row[7],
            'residency': row[8],
            'school_id': row[9],
            'school_name': row[10],
            'book_costs': row[11],
            'personal_expenses': row[12],
            'instate_tuition': row[13],
            'oos_tuition': row[14],
            'room_and_board': row[15],
            'off_campus_housing': row[16],
            'books': row[17],
            'dining_costs': row[18],
            'transportation': row[19]
            }
    data['tuition'] = data['instate_tuition'] if data['residency'] == 'in state' else data['oos_tuition']

    job_query = """SELECT salary FROM Majors 
    JOIN Jobs ON Majors.id = Jobs.major_id 
    WHERE Majors.name = %s 
    ORDER BY salary ASC LIMIT 1;"""

    params = (data['major'],)
    
    cur.execute(job_query, params)
    salary = cur.fetchone()  

    calculated_data = calculation.main(data, salary)
    data.update(calculated_data)

    return JsonResponse(data)

def homepage(request):
    return HttpResponse("hoes mad x24")

