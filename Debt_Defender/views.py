from django.http import HttpResponse, JsonResponse
from django.shortcuts import redirect
from django.views.decorators.csrf import csrf_exempt
import psycopg2
import json
from . import settings
from django.core.serializers.json import DjangoJSONEncoder

@csrf_exempt
def login(request):
    if request.method != 'POST':
        print("AAAAAAAAAAAAAAAAAAA")
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
    rows = curr.fetchall()
    data = {'id': rows[0][0]}
    
    conn.close()

    return JsonResponse(data)

def homepage(request):
    return HttpResponse("hoes mad x24")

