from flask import Flask
import mysql.connector
from flask_cors import CORS

db = mysql.connector.connect(
    host='localhost',
    user='root',
    passwd='mysql123'
)
cursor = db.cursor()
cursor.execute('USE lab5_web;')
app = Flask(__name__)
CORS(app)


@app.route('/<string:title>/<int:weight>', methods=['POST'])
def post(title, weight):
    cursor.execute('INSERT INTO cats (title, weight) VALUES (%s, %s);', (title, int(weight)))
    db.commit()
    return {'message': 'Everything is cool!'}


@app.route('/', methods=['GET'])
def get():
    cursor.execute('SELECT * FROM cats;')
    return {'cat': cursor.fetchall()}


@app.route('/<int:id>/<string:title>/<int:weight>',  methods=['PUT'])
def edit(id, title, weight):
    cursor.execute('UPDATE cats SET title = %s, weight = %s WHERE id = %s;', (title, int(weight), int(id + 1)))
    db.commit()
    return {'message': 'Everything is cool!'}


@app.route('/<int:id>',  methods=['DELETE'])
def delete(id):
    print(id)
    cursor.execute('DELETE FROM cats WHERE id = %s;', (int(id),))
    db.commit()
    return {'message': 'Everything is cool!'}


if __name__ == '__main__':
    app.run(debug=True)

