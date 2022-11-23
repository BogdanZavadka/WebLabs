from flask import Flask
import mysql.connector
from flask_cors import CORS

db = mysql.connector.connect(
    host='localhost',
    user='root',
    passwd='pstgrsql'
)
cursor = db.cursor()
cursor.execute('USE lab9_web;')
app = Flask(__name__)
CORS(app)


@app.route('/', methods=['GET'])
def get():
    cursor.execute('SELECT * FROM toys;')
    return {'cat': cursor.fetchall()}


@app.route('/<string:sort_by>/<string:sort_order>', methods=['GET'])
def get_sorted_toys(sort_by: str, sort_order: str):
    cursor.execute('SELECT * FROM toys;')
    toys = cursor.fetchall()
    toys.sort(key=lambda element: element[2], reverse=sort_order == 'Descending')
    return {'cat': toys}


if __name__ == '__main__':
    app.run(debug=True)
